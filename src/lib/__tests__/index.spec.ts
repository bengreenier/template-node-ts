import template from "../index"

/* eslint-env node, jest */

describe("index", () => {
    it("should export hello", () => {
        expect(template.hello).toBe("world")
    })
})
