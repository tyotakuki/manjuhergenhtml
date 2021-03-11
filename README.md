# 满文HTML发布的一个解决方案

该项目的目标是为满文提供一个较为便利的在HTML上发布的方案。远期目标包括：
- 实现汉文、满文、拉丁字母文字的混排；
- 实现表格、图片、MathJax的LaTeX公式在满文网页上的良好显示；
- 实现词法查询等功能；
- LaTeX(MonTeX)和LuaTeX编辑的满文文档与HTML的接口问题；
- 满文文档后台数据库和网页的接口。

## 生成满文文本
目前阶段，该项目是一个用Javascript实现的简单应用，读取包含满文文档内容的Json文件
![Json Demonstration](https://github.com/tyotakuki/manjuhergenhtml/blob/main/json_demo.png)
并且使用Javascript脚本+正则表达式实现从类似Möllendorff的MonTeX罗马化转写到满文的替换。页面效果如下：
![Json Demonstration](https://github.com/tyotakuki/manjuhergenhtml/blob/main/page_demo.png)

## 文件说明
目前可用的文件主要有：
- mydata.json：存放待发布的罗马化转写满文文本；
- manchu-json.js：从Json发布满文文档的主要脚本；
- manju-vert.css：实现竖排汉满混排的层叠样式表；
- manju-math.css：实现满文和MathJax数学公式的混排（未完成）。
