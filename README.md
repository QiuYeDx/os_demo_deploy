# OS Demo in React

用js实现操作系统实验功能，并以较为直观的前端页面进行展示。

## 在线演示

[OS Demo](https://qiuyedx.github.io/os_demo_deploy/)

## 项目进度

- 实验一 
  - 设计并实现一个模拟进程状态转换及其相应PCB组织结构变化的程序； 
  - 独立设计、编写、调试程序； 
  - 程序界面应能反映出在模拟条件下，进程之间状态转换及其对应的PCB组织的变化。

## 测试与部署

### 本地测试

本地测试需要把`package.json`中的`homepage`条目删掉或者改为`"homepage": "./"`

### 部署到GitHub.io

运行`npm run deploy`前，需要将`package.json`中的`homepage`条目改为

`"homepage": "https://qiuyedx.github.io/os_demo_deploy/",`

### 排查

若遇到部署失败的问题，可以看这篇博客

[「微博客」将 React 应用程序部署到 GitHub.io](https://qiuyedx.com/?p=1868)
