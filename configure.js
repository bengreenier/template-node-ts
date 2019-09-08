const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('Booting (requires network). Hang on...')
spawnSync('npm install --no-save prompt replace-in-file', { shell: true })
const prompt = require('prompt')
const rif = require('replace-in-file')

prompt.start()

const gitRemoteUrl = /origin\s(.+)\s\(push\)/.exec(spawnSync('git remote -v', { shell: true }).stdout.toString())[1]
const httpRemoteUrl = gitRemoteUrl.replace('git@github.com:', 'https://github.com/').replace('.git', '')

const schema = {
  properties: {
    '%%REPO_NAME%%': {
      default: path.basename(__dirname),
    },
    '%%REPO_URL%%': {
      default: httpRemoteUrl,
    },
    '%%REPO_DESC%%': {
      required: true,
    },
    '%%REPO_README_INFO%%': {
      required: true,
    },
  },
}

prompt.get(schema, (err, data) => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }
  for (const prop in data) {
    rif.sync({
      ignore: ['./configure.js', '.git/**/*', 'node_modules/**/*'],
      files: './**/*',
      from: new RegExp(prop, 'g'),
      to: data[prop],
    })
  }

  rif.sync({
    files: './README.md',
    from: '# RUN ./configure.js after cloning before true initial commit to new project\n\n#',
    to: '#',
  })

  // delete self
  fs.unlinkSync('./configure.js')
})
