module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            // type的可选类型
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "style",
                "refactor",
                "test",
                "chore",
                "revert",
            ],
        ],
        "type-case": [2, "always", "lowerCase"], // type需小写
        "type-empty": [2, "never"], // type不能为空
        "subject-full-stop": [2, "never", "."], // subject不以‘.’结尾
    },
}
