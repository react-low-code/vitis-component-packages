## 关于组件开发

运行如下命令启动项目

```dotnetcli
yarn start
```

组件的入口位于 src/index.ts，建议不要修改该文件中的内容。组件的实现写在 src/component.tsx 中。

## 关于组件文档

组件文档位于 src/README.md 中，本项目使用[dumi](https://d.umijs.org/zh-CN) 作为组件开发的文档工具，dumi 背后的类型解析工具是 react-docgen-typescript，更多类型和注解的用法可参考[它的文档](https://github.com/styleguidist/react-docgen-typescript#example)。

## 关于组件规格

组件规格是为了让低代码编辑器识别出组件的 props 以及每个 prop 对应的配置面板描述，它来告诉低代码搭建系统，组件接受哪些属性，又是该用怎样的方式来配置这些属性。

执行如下命令生成组件规格。

```dotnetcli
yarn genAsset
```

## 关于组件发布

组件必须上传到组件市场才能被低代码编辑器使用，在上传组件之前务必先生成组件规格，并保证组件规格无误。执行如下命令发布并上传组件：

```dotnetcli
npm publish
```