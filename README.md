# RUN ./configure.js after cloning before true initial commit to new project

# %%REPO_NAME%%

%%REPO_DESC%%

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/bengreenier/%%REPO_NAME%%)

![project logo](./.github/logo.png)

This project provides %%REPO_README_INFO%%

## Getting started

This repo is set up using [typescript](http://www.typescriptlang.org/), [eslint](https://eslint.org/), [prettier](https://prettier.io/), and [jest](https://jestjs.io/) to ensure quality and usability are top of mind. There's some great tooling for leveraging these things:

- [VS Code](https://code.visualstudio.com/)
- [Extension: Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Extension: Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

To run the tests or examples, follow these steps:

- Install [Git](https://git-scm.com/)
- Install [Node + NPM](https://nodejs.org/en/)
- Clone this repository

```
git clone %%REPO_URL%%
```

- Enter the created directory

```
cd %%REPO_NAME%%
```

- Install dependencies

```
npm install
```

- Build the source

```
npm run build
```

- Run the tests

```
npm test
```

- Run the examples

```
npm start
```

### Binary Releases

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/bengreenier/%%REPO_NAME%%)

To simplify cases when one might simply want to run the examples without needing to build the source,binary releases are provided for Windows, Mac, and Linux on the [Releases Page](https://github.com/bengreenier/%%REPO_NAME%%/releases/latest).

## Contributing

Open a PR against this repository, or create an Issue.
