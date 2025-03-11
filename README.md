# Grunt Scss to css

将 scss 文件转为 css

> grunt 默认不支持 ES6 语法;

> grunt 构建工具在压缩代码的时候，如果你的代码中有未使用的变量或者函数，它会默认在压缩时进行删除

## 前提条件

- 安装 grunt-cli

  > npm install -g grunt-cli

- 安装 ruby

  > 下载安装包: rubyinstaller-devkit-3.3.6-2-x64

  > 安装完成后，打开 cmd, 运行"ruby -v" 看是否安装完成 (直接在 vscode 终端执行，好像会提示不存在 ruby 指令)

- 安装完成后运行下面命令，安装 sass
  > 在打开的项目根目录下执行“gem install sass”

## 运行命令

```shell
grunt scsstocss
```
