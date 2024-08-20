# box3-docs
box3文档

这是一个由[AlanBestHacker](https://github.com/genius-alray)创建，内容来自社区的第三方 Box3 文档  
由于文档内容过时，由[qndm](https://github.com/qndm)继续编写

## 镜像
该Fork有一个[Gitee](https://gitee.com/qndm/box3-docs)镜像  
由于Gitee Page不可用，你可以手动本地部署 ~~或者将gh-pages分支的内容下载并打开`index.html`~~ 强烈不推荐，所有图标都会失效

## 本地部署
1. 克隆仓库
```bash
git clone https://github.com/qndm/box3-docs.git
cd box3-docs
```
也可使用镜像
```bash
git clone https://gitee.com/qndm/box3-docs.git
cd box3-docs
```
2. 安装python，推荐`3.10`，其他版本应该也能运行
3. 安装依赖
```bash
pip install mkdocs-material
pip install mkdocs-glightbox
pip install mkdocs-material-extensions
pip install mkdocs-minify-plugin
```
4. 启动服务器
```bash
mkdocs serve
```