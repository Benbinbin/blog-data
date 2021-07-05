 Python Fun

## 有趣的模块

### turtle
`turtle` 库是 Python 2.6 版本后引入的一个简单的绘图工具，使用[海龟绘图](https://docs.python.org/zh-cn/3.7/library/turtle.html)可以实现代码的有趣可视化。

```python
import turtle

# 创建海归
t = turtle.Turtle()

# 向前移动
t.forward(100)
# 右转 90°
t.right(90)
```

### unicodedata
`unicodedata` 模块可以根据名称查询字符，包括**表情符号**

```python
>>> import unicodedata
>>> unicodedata.lookup("snake")
'🐍'
>>> unicodedata.lookup("airplane")
'✈'
```

表情符号在**屏幕**上的占据空间通常比字母或数字更宽；在等宽字体中，它们通常占据两个字符。并且占据更多计算机内存。**但是 Python 字符串的长度仅取决于其中的字符数量，而不是什么类型的字符**。