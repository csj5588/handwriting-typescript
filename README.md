# handwriting typescripts
  记录typescript知识点，手写所有语法原理及例子。

## TypeScript开发辅助工具

- [typescript playground](https://www.typescriptlang.org/play/) 简介：TypeScript 官方提供的在线 TypeScript 运行环境，利用它你可以方便地学习 TypeScript 相关知识与不同版本的功能特性。

- [TypeScript UML Playground](tsuml-demo.firebaseapp.com/) 简介：一款在线 TypeScript UML 工具，利用它你可以为指定的 TypeScript 代码生成 UML 类图。
- [JSON TO TS](www.jsontots.com/) 简介：一款 TypeScript 在线工具，利用它你可以为指定的 JSON 数据生成对应的 TypeScript 接口定义。
- [Schemats](https://github.com/SweetIQ/schemats) 简介：利用 Schemats，你可以基于（Postgres，MySQL）SQL 数据库中的 schema 自动生成 TypeScript 接口定义。
- [TypeScript AST Viewer](ts-ast-viewer.com/) 简介：一款 TypeScript AST 在线工具，利用它你可以查看指定 TypeScript 代码对应的 AST（Abstract Syntax Tree）抽象语法树。
- [TypeDoc](typedoc.org/) 简介：TypeDoc 用于将 TypeScript 源代码中的注释转换为 HTML 文档或 JSON 模型。它可灵活扩展，并支持多种配置。
- [TypeScript ESLint](typescript-eslint.io/) 简介：使用 TypeScript ESLint 可以帮助我们规范代码质量，提高团队开发效率。
  
## 目录结构
```
|-- github
    |-- README.md
    |-- TSC.md
    |-- compileContext.md
    |-- directoryList.md
    |-- array
    |   |-- array.ts
    |-- assertion
    |   |-- assertion.sure.ts
    |   |-- assertion.ts
    |   |-- assertion.un.ts
    |-- basetype
    |   |-- any.ts
    |   |-- array.ts
    |   |-- boolean.ts
    |   |-- enum.ts
    |   |-- null-undefined.ts
    |   |-- number.ts
    |   |-- object.ts
    |   |-- string.ts
    |   |-- symbol.ts
    |   |-- tuple.ts
    |   |-- unknown.ts
    |   |-- void.ts
    |-- class
    |   |-- abstract.ts
    |   |-- class.ts
    |   |-- extends.ts
    |   |-- getter.ts
    |   |-- private.ts
    |   |-- reload.ts
    |-- declare
    |   |-- declare.ts
    |-- decorators
    |   |-- class.ts
    |   |-- decorators.ts
    |   |-- method.ts
    |   |-- params.ts
    |   |-- property.ts
    |-- function
    |   |-- function.reload.ts
    |   |-- function.ts
    |-- generics
    |   |-- class.ts
    |   |-- extends.ts
    |   |-- generics.ts
    |   |-- in.ts
    |   |-- infer.ts
    |   |-- interface.ts
    |   |-- keyof.ts
    |   |-- partial.ts
    |   |-- typeof.ts
    |-- guard
    |   |-- guard.diy.ts
    |   |-- guard.in.ts
    |   |-- guard.instanceof.ts
    |   |-- guard.ts
    |   |-- guard.typeof.ts
    |-- hello
    |   |-- hello.ts
    |-- implements
    |   |-- implements.ts
    |-- interface
    |   |-- declaration-merging.ts
    |   |-- extend.ts
    |   |-- implements.ts
    |   |-- interface.ts
    |   |-- re-interface.ts
    |-- object
    |   |-- object.ts
    |-- overlapping
    |   |-- overlapping.same.ts
    |   |-- overlapping.ts
    |   |-- overlapping.unsame.ts
    |-- type
    |   |-- type.ts
    |-- union
        |-- union.alias.ts
        |-- union.discriminated.ts
        |-- union.guard.ts
        |-- union.ts

```
## 如何生成目录结构

```shell
  npx mddir "./"
```