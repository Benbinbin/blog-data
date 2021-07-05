---
tags:
  - matplotlib
---

# matplotlib
[matplotlib](https://matplotlib.org/) 是一个绘图库，高效地实现数据可视化。
## 导入matplotlib包

```python
import matplotlib.pyplot as plt
```

:warning: 若使用 Jupyter notebook 进行可视化操作并显示，需要在代码框输入 `% matplotlib inline`

## 散点图
使用函数 `plt.scatter(x, y)` 绘制散点图

## 直方图
使用函数 `plt.hist(data)` 绘制直方图

## 柱状图
使用函数 `plt.bar(x_value_list, y_value_list)` 绘制[柱状图](https://matplotlib.org/api/pyplot_api.html#matplotlib.pyplot.bar)，提供两个**必要参数**：

* `x_value_list` 坐标值
* `y_value_list` 坐标值（条柱的高度）
* 参数 `tick_label=x_label_list` 设置 x 轴刻度标签

## 折线图
使用函数 `plt.plot(data_list, format)` 绘制折线图

* 参数 `data_list` 是输入绘制曲线的数据，可以输入
    * `(x, y)` 一对**表示 x 轴**和 **y 轴**数据的列表（若数据 `x` 和 `y` 是二维数组，相应的列分别画出折线图）
    * `y` 单独的 **y轴**数据（默认使用 x 轴的离散点 `[0, 1, 2...N-1]` 作为 x 轴索引）
* 参数 `format` 描述折现的外观属性，如 `bo*` 表示 `blue circle` 即用蓝色圆形点标记数据点。

### 折线和标记参数
| character | description |
| --- | --- |
| '-' | solid line style |
| '--' | dashed line style |
| '-.' | dash-dot line style |
| ':' | dotted line style |
| '.' | point marker |
| ',' | pixel marker |
| 'o' | circle marker |
| 'v' | triangle_down marker |
| '^' | triangle_up marker |
| '<' | triangle_left marker |
| '>' | triangle_right marker |
| '1' | tri_down marker |
| '2' | tri_up marker |
| '3' | tri_left marker |
| '4' | tri_right marker |
| 's' | square marker |
| 'p' | pentagon marker |
| '*' | star marker |
| 'h' | hexagon1 marker |
| 'H' | hexagon2 marker |
| '+' | plus marker |
| 'x' | x marker |
| 'D' | diamond marker |
| 'd' | thin_diamond marker |
| '|' | vline marker |
| '_' | hline marker |

### 颜色参数
| character | color |
| --- | --- |
|  'b' | blue |
| 'g' | green |
| 'r' | red |
| 'c' | cyan |
| 'm' | magenta |
|  'y' | yellow |
| 'k' | black |
| 'w' | white |

## 修改图表元素

### 修改坐标轴
#### 函数xticks
通过函数 `plt.xtcks(x_value_list, x_label_list)` 为 x 轴指定**刻度标签**，其中列表 `x_value_list` 和列表 `x_label_list` 元素数量相同

#### 添加坐标轴标题
使用函数 `plt.xlabel('x_label_name')` 或函数 `plt.ylabel('y_label_name')` 修改/添加横或纵坐标轴

### 添加标题
使用函数 `plt.title('title_name')` 添加图表标题

### 显示图例
使用函数 `plt.legend()` 添加图例