---
tags:
  - numpy
---

# NumPy
[NumPy](http://www.numpy.org/) 是 **Numerical Python** 的简称，它是 Python 中的**科学计算**基本软件包，高效处理庞大的**多维数组和矩阵**。

* Numpy 创建的 ndarray （数组）中**所有元素类型都一样**
* NumPy 的一个强大功能是具有可以表示**向量**和**矩阵**的**多维数组数据结构**。
* NumPy 具有大量优化的**内置数学函数**。非常快速地进行各种复杂的数学计算。
* NumPy 数组能节省内存，**在执行算术、统计和线性代数运算时采用优化算法，**对**大型数组**执行操作时，速度比 Python 列表的快。

这些只是使 NumPy 成为 Python 中的科学计算必要软件包的其中一些关键功能。实际上，NumPy 已经变得非常热门，**Pandas 等很多 Python 软件包都是在 NumPy**

## 下载
`anaconda` 包含 NumPy

### 安装特定版本
在 Anaconda 中键入

```python
# 安装1.13版本的numpy
conda install numpy=1.13
```

:warning: 随着新版 NumPy 的推出，一些功能可能会过时或被替换掉，确保安装正确的 NumPy 版本。

## 版本
检查 NumPy 可在 **Jupyter notebook 键入**

```python
!conda list numpy
```

或在 **Anaconda 键入**

```python
conda list numpy
```
## 导入numpy

```python
import numpy as np
```

## 创建 ndarray
NumPy 的核心是 **ndarray**，其中 `nd` 表示 **n 维（n dimension）**。ndarray 是一个形状可以多样，并且可以存储数字或字符串的**网格**。

**秩**

* 一维数组称之为**秩为 1 **的数组。通常，N 维数组的**秩为 N**
* 数组中**所有元素类型都一样**

### 使用python列表创建
向 `np.array()` 函数**提供 Python 列表**创建 ndarray

:warning: `np.array()` 不是类，它只是一个**返回 `ndarray` 的函数**。

```python
# We import NumPy into Python
import numpy as np
# We create a 1D ndarray that contains only integers
x = np.array([1, 2, 3, 4, 5])
# Let's print the ndarray we just created using the print() command
print('x = ', x)
```

:hammer:

```shell
x = [1 2 3 4 5]
```

### 使用内置numpy函数创建
使用numpy的内置函数可以快速创建含特定属性的多维数组

#### 函数np.zeros()
使用函数 `np.zeros(shape)` 创建一个元素全为 `0` 的给定**形状**（即每个维度的大小）的ndarray

```python
# 创建一个 3 x 4 元素全为0的 ndarray
X = np.zeros((3,4))
print('X = \n', X)

# We print information about X
print('X has dimensions:', X.shape)
print('X is an object of type:', type(X))
print('The elements in X are of type:', X.dtype)
```

:hammer:

```shell
X =
[[ 0. 0. 0. 0.]
 [ 0. 0. 0. 0.]
 [ 0. 0. 0. 0.]]

X has dimensions: (3, 4)
X is an object of type: class 'numpy.ndarray'
The elements in X are of type: float64
```

:warning: numpy函数 `np.zeros()` 默认地**创建一个 `dtype` 为 `float64` 的数组**，可使用关键字 `dtype` 修改数据类型

#### 函数np.ones()
使用函数 `np.ones(shape)` 创建一个元素全为 `1` 的给定**形状**的ndarray

```python
# 创建一个 3 x 2 元素全为1的ndarray
X = np.ones((3,2))
print('X = \n', X)

# We print information about X
print('X has dimensions:', X.shape)
print('X is an object of type:', type(X))
print('The elements in X are of type:', X.dtype)
```

:hammer:

```shell
X =
[[ 1. 1.]
 [ 1. 1.]
 [ 1. 1.]]

X has dimensions: (3, 2)
X is an object of type: class 'numpy.ndarray'
The elements in X are of type: float64
```

:warning: 创建的数组默认的元素类型 `dtype` 也是 `float64`

#### 函数np.full()
使用函数 `np.full(shape, constant value)` 创建全部元素为指定数字的数组，参数 `shape` 指定**形状**，参数 `consatnt value` 指定元组中需要「填充」的**常数值**

```python
# 创建一个 2 x 3 元素全为5的ndarray
X = np.full((2,3), 5)
print('X = \n', X)

# We print information about X
print('X has dimensions:', X.shape)
print('X is an object of type:', type(X))
print('The elements in X are of type:', X.dtype)
```

:hammer:

```shell
X =
[[5 5 5]
 [5 5 5]]

X has dimensions: (2, 3)
X is an object of type: class 'numpy.ndarray'
The elements in X are of type: int64
```
:warning: 创建的元素 `dtype` 与所传入的参数类型相同

#### 函数np.eye()
使用函数 `np.eye(N)` 会创建一个对应于**单位矩阵**（主对角线全为1）的方形 N x N的ndarray。接受一个整数 `N` 作为参数。

```python
# We create a 5 x 5 Identity matrix.
X = np.eye(5)
print('X = \n', X)
```

:hammer:

```shell
X =
[[ 1. 0. 0. 0. 0.]
 [ 0. 1. 0. 0. 0.]
 [ 0. 0. 1. 0. 0.]
 [ 0. 0. 0. 1. 0.]
 [ 0. 0. 0. 0. 1.]]
```

#### 函数np.diag()
使用 `np.diag()` 函数创建一个对应于**对角矩阵**（仅在**主对角线**上有值的**方形**矩阵）的 ndarray

```python
# 创建一个 4 x 4 对角矩阵，其中主对角线上的值依次为 10、20、30 、50
X = np.diag([10,20,30,50])
print('X = \n', X)
print()
```

:hammer:

```shell
X =
[[10 0 0 0]
 [ 0 20 0 0]
 [ 0 0 30 0]
 [ 0 0 0 50]]
```

#### 函数np.arange()
使用函数 `np.arange()` 创建在**给定区间内值均匀分布**的 ndarray，默认的 `dtype` 是`int`

* 输入一个参数

    ```python
    np.arange(N)
    ````

    创建**秩为 1**的ndarray，其中包含**从 0 到 N-1**（不含端点）的连续整数

    ```python
    x = np.arange(10)
    print('x = ', x)

    print('x has dimensions:', x.shape)
    print('x is an object of type:', type(x))
    print('The elements in x are of type:', x.dtype)
    ```

    :hammer:

    ```shell
    x = [0 1 2 3 4 5 6 7 8 9]
    x has dimensions: (10,)
    x is an object of type: class 'numpy.ndarray'
    The elements in x are of type: int64
    ```

* 输入两个参数

    ```python
    np.arange(start,stop)
    ```

    创建一个**秩为1**的ndarray，包含位于**半开区间 `[start, stop)`**（不包括 stop 数字）内并**均匀分布**的（整数）值

    ```python
    x = np.arange(4,10)
    print('x = ', x)

    print('x has dimensions:', x.shape)
    print('x is an object of type:', type(x))
    print('The elements in x are of type:', x.dtype)
    ```

    :hammer:

    ```shell
    x = [4 5 6 7 8 9]
    x has dimensions: (6,)
    x is an object of type: class 'numpy.ndarray'
    The elements in x are of type: int64
    ```

* 输入三个参数

    ```python
    np.arange(start,stop,step)
    ```

    创建一个**秩为1**的ndarray，其中包含位于**半开区间 `[start, stop)`** 内并均匀分布的值，`step` 表示**两个相邻值之间的差**

    ```python
    x = np.arange(1,14,3)
    print('x = ', x)

    print('x has dimensions:', x.shape)
    print('x is an object of type:', type(x))
    print('The elements in x are of type:', x.dtype)
    ```

    :hammer:

    ```shell
    x = [ 1 4 7 10 13]
    x has dimensions: (5,)
    x is an object of type: class 'numpy.ndarray'
    The elements in x are of type: int64
    ```

#### 函数 `np.linspace()`
`np.arange()` 函数允许间隔为非整数，但是**由于浮点数精度有限**，输出（数值精度）通常不一致。

需要创建 shell 非整数间隔**推荐使用函数 `np.linspace(start, stop, N)`，返回 `N` 个在**闭区间** [start, stop] 内均匀分布的数字，也可以将参数 `endpoint` 设置为`enpoint=False` 将产生的ndarray**不含结束点**

调用 `np.linspace()` 函数时，必须**至少**以 `np.linspace(start,stop)` 的形式传入**两个参数**，`N` 的默认值为 **`50`**

函数 `np.linspace()` 创建的 ndarray 元素数据类型是 `float64`

```python
# 创建秩为1的ndarray，在0到25范围内（包含端点）共10个元素
x = np.linspace(0,25,10)

print('x = \n', x)
print('x has dimensions:', x.shape)
print('x is an object of type:', type(x))
print('The elements in x are of type:', x.dtype)
```

:hammer:

```shell
x = [ 0. 2.77777778 5.55555556 8.33333333 11.11111111 13.88888889 16.66666667 19.44444444 22.22222222 25. ]
x has dimensions: (10,)
x is an object of type: class 'numpy.ndarray'
The elements in x are of type: float64
```

```python
# 端点25不包含在内
x = np.linspace(0,25,10, endpoint = False)
print('x = ', x)
print('x has dimensions:', x.shape)
print('x is an object of type:', type(x))
print('The elements in x are of type:', x.dtype)
```

:hammer:

```shell
x = [ 0. 2.5 5. 7.5 10. 12.5 15. 17.5 20. 22.5]
x has dimensions: (10,)
x is an object of type: class 'numpy.ndarray'
The elements in x are of type: float64
```

**排除了结束点**，值之间的间隔需要更改，因为需要在给定区间内填充 10 个均匀分布的数字。

#### 函数np.reshape()
`np.reshape(ndarray, new_shape)`函数会将给定ndarray转换为指定的`new_shape`（创建**秩为2**的ndarray）

`new_shape`应该与给定ndarray中的**元素数量保持一致**。

```python
# We create a rank 1 ndarray with sequential integers from 0 to 19
x = np.arange(20)
print('Original x = ', x)

# We reshape x into a 4 x 5 ndarray
x = np.reshape(x, (4,5))
print('Reshaped x = \n', x)

# We print information about the reshaped x
print('x has dimensions:', x.shape)
print('x is an object of type:', type(x))
print('The elements in x are of type:', x.dtype)
```

:hammer:

```shell
Original x = [ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19]

Reshaped x =
[[ 0 1 2 3 4]
 [ 5 6 7 8 9]
 [10 11 12 13 14]
 [15 16 17 18 19]]

x has dimensions: (4, 5)
x is an object of type: class 'numpy.ndarray'
The elements in x are of type: int64
```

#### 方法
NumPy 的一大特性是某些函数还可以当做**方法**使用。这样我们便能够**在一行代码中按顺序应用不同的函数**。ndarray 方法使用**点记法`.`**


```python
# 使用方法 arrange() 创建一个一维 ndarray，使用方法 reshape() 转换数组的形状
Y = np.arange(20).reshape(4, 5)
print('Y = \n', Y)

# 打印多维数组 Y 属性
print('Y has dimensions:', Y.shape)
print('Y is an object of type:', type(Y))
print('The elements in Y are of type:', Y.dtype)
```

:warning: 将 `reshape()` 当做方法使用，我们不需要将 ndarray 当做参数传递给 `reshape()` 函数，只需传递 `new_shape` 参数。

:hammer:

```shell
Y =
[[ 0 1 2 3 4]
 [ 5 6 7 8 9]
 [10 11 12 13 14]
 [15 16 17 18 19]]

Y has dimensions: (4, 5)
Y is an object of type: class 'numpy.ndarray' The elements in Y are of type: int64
```

#### 随机数组

##### 函数random.random()
`random.random(shape)` 函数创建具有**给定形状**，位于**半开区间 `[0.0, 1.0)`** 内由随机**浮点数**构成的一个多维数组。

```python
# 创建一个范围在[0.0, 1.0)中的形状为3x3的多维数组
X = np.random.random((3,3))
print('X = \n', X)

print('X has dimensions:', X.shape)
print('X is an object of type:', type(X))
print('The elements in x are of type:', X.dtype)
```

:hammer:

```shell
X =
[[ 0.12379926 0.52943854 0.3443525 ]
 [ 0.11169547 0.82123909 0.52864397]
 [ 0.58244133 0.21980803 0.69026858]]

X has dimensions: (3, 3)
X is an object of type: class 'numpy.ndarray' The elements in X are of type: float64
```

##### 函数np.random.randint()
`np.random.randint(start=0, stop, size = shape)` 函数创建形状为 `shape`，位于**半开区间** `[start, stop)` 内由**随机整数**构成的一个多维数组。

```python
# 创建一个范围在[4, 15)中形状为3x2的多维数组
X = np.random.randint(4,15,size=(3,2))
print('X = \n', X)

print('X has dimensions:', X.shape)
print('X is an object of type:', type(X))
print('The elements in X are of type:', X.dtype)
```

:hammer:

```shell
X =
[[ 7 11]
 [ 9 11]
 [ 6 7]]

X has dimensions: (3, 2)
X is an object of type: class 'numpy.ndarray' The elements in X are of type: int64
```
:warning:
* 默认 `start=0`，当只向函数 `np.random.randint()` 传递一个参数（作为 `stop`）时
* 当 `size=value` 返回一个一维含有 `value` 个元素的 ndarray

##### 函数np.random.normal()
`np.random.normal(mean, standard deviation, size=shape)` 函数创建具有给定形状`shape`，从**正态高斯分布（具有给定均值 `mean` 和标准差 `standard`）中抽样**的随机数字。

我们来创建一个 1,000 x 1,000 ndarray，其中包含从正态分布（均值为 0，标准差为 0.1）中随机抽样的浮点数。

```python
# 创建一个元素服从正态分布，维度为 1000 x 1000 的多维数组，元素数据类型为 float64
# 正态分布的均值和标准差分别是(0, 0.1)
X = np.random.normal(0, 0.1, size=(1000,1000))
print('X = \n', X)

print('X has dimensions:', X.shape)
print('X is an object of type:', type(X))
print('The elements in X are of type:', X.dtype)
print('The elements in X have a mean of:', X.mean())
print('The maximum value in X is:', X.max())
print('The minimum value in X is:', X.min())
# 分别统计多维数组中负数和恶正数的个数
print('X has', (X < 0).sum(), 'negative numbers')
print('X has', (X > 0).sum(), 'positive numbers')
```

:hammer:

```shell
X =
[[ 0.04218614 0.03247225 -0.02936003 ..., 0.01586796 -0.05599115 -0.03630946]
 [ 0.13879995 -0.01583122 -0.16599967 ..., 0.01859617 -0.08241612 0.09684025]
 [ 0.14422252 -0.11635985 -0.04550231 ..., -0.09748604 -0.09350044 0.02514799]
 ...,
 [-0.10472516 -0.04643974 0.08856722 ..., -0.02096011 -0.02946155 0.12930844]
 [-0.26596955 0.0829783 0.11032549 ..., -0.14492074 -0.00113646 -0.03566034]
 [-0.12044482 0.20355356 0.13637195 ..., 0.06047196 -0.04170031 -0.04957684]]

X has dimensions: (1000, 1000)
X is an object of type: class 'numpy.ndarray' The elements in X are of type: float64
The elements in X have a mean of: -0.000121576684405
The maximum value in X is: 0.476673923106
The minimum value in X is: -0.499114224706 X 具有 500562 个负数 X 具有 499438 个正数
```

解释：ndarray 中的随机数字的**平均值** `mean` 接近 `0`，`X` 中的**最大值和最小值与 `0`（平均值）保持对称**，正数和负数的数量很接近。

##### 函数np.random.choice()
`np.random.choice(ndarray, size=value)` 函数创建大小为 `size` 从传递的 `ndarray` 中**随机**挑选元素

可通过指定参数`p`设定**概率阵列**，元素个数与 `ndarray` 相同，以产生**偏性随机**阵列

:warning: 参数默认值 `replace=True` 表示使用**自助法**（即有放回抽样），修改参数 `replace=False` 则可进行**无放回抽样**（注意抽样数量应少于总体元素数量）

```python
# 模拟1000次偏性的投硬币试验，并求平均值
np.random.choice([0, 1], size=10000, p=[0.8, 0.2]).mean()
```

:hammer:

```shell
# 阵列的期望接近 0.2
0.19889999999999999
```

## ndarray属性
### ndarray形状
数组的形状是指**每个维度的大小**。如秩为 2 的数组的形状对应于数组的行数和列数。

使用属性 `.shape` 获取 ndarray 的形状，返回一个由 n 个正整数（用于指定每个维度的大小）组成的元组。

```python
# We create a rank 2 ndarray that only contains integers
Y = np.array([[1,2,3],[4,5,6],[7,8,9], [10,11,12]])

print('Y = \n', Y)

# We print information about Y
print('Y has dimensions:', Y.shape)

Y =
[[ 1 2 3]
 [ 4 5 6]
 [ 7 8 9]
 [10 11 12]]
```

:hammer:

```shell
Y has dimensions: (4, 3)
```

`shape` 属性返回元组 `(4,3)`，表示 **`Y` 的秩为 2，有 4 行 3 列**。

### ndarray大小
使用属性 `.size` 获取 ndarray 的大小，即多维数组的元素个数

```python
# We create a rank 2 ndarray that only contains integers
Y = np.array([[1,2,3],[4,5,6],[7,8,9], [10,11,12]])

# We print Y

print('Y = \n', Y)

# We print information about Y
print('Y has dimensions:', Y.shape)
print('Y has a total of', Y.size, 'elements')
```

:hammer:

```shell
Y =
[[ 1 2 3]
 [ 4 5 6]
 [ 7 8 9]
 [10 11 12]]

Y has dimensions: (4, 3)
Y has a total of 12 elements
```

### ndarray类型
使用函数 `type()` 获取**多维数组的数据类型**，一般都返回 `class 'numpy.ndarray'`

### 元素数据类型
使用属性 `.dtype` 获取**元素的数据类型**

:warning: 与 Python 列表不同的是，ndarray 的**所有元素都必须类型相同**。因此返回的元素的数据类型**只有一种**。

```python
# 创建一个1D的ndarray其中含有整数和字符串
x = np.array([1, 2, 'World'])

print('x = ', x)

# We print information about x
print('x has dimensions:', x.shape)
print('x is an object of type:', type(x))
print('The elements in x are of type:', x.dtype)
```

:hammer:

```shell
x = ['1' '2' 'World']
x has dimensions: (3,)
x is an object of type: 'numpy.ndarray'
The elements in x are of type: U21
```

* `shape` 属性返回了元组 `(3,)`，即 x 的秩为 1（即 **x 只有一个维度**），并且有 **3 个元素**
* x 的类型是 `NumPy ndarray`
* 向 `np.array()` 函数提供具有整数和字符串不同数据类型 Python 列表，但是 x 中的**元素类型都一样**，NumPy 会将**所有元素解析为字符串**，即具有 21 个字符的 Unicode 字符串。类似地当创建同时包含浮点数和整数的 ndarray 时，其元素分配 `float64` 的 `dtype`
* **向上转型**——由于 ndarray 所有元素都必须**类型相同**，NumPy 将多维数组中的整数向上转型为浮点数，避免在进行数学计算时丢失精度。

**指定元素的 `dtype`**

在使用 `np.array()` 函数中创建 ndarray 时，NumPy 自动为 ndarray 选择 dtype，可以**使用关键字`dtype`指定元素类型**。

```python
# 设置 dtype 类型为 int64
x = np.array([1.5, 2.2, 3.7, 4.0, 5.9], dtype = np.int64)

print('x = ', x)

# We print the dtype x
print('The elements in x are of type:', x.dtype)
```

:hammer:

```shell
x = [1 2 3 4 5]
The elements in x are of type: int64
```

用浮点数创建了 ndarray，但是通过将 `dtype` 指定为 `int64`，NumPy 通过**去除小数将浮点数转换成了整数**（向下取整）。如果你不希望 NumPy 意外地选择错误的数据类型，或者你只希望达到一定的计算精度，从而节省内存。

## 保存ndarray
使用函数 `np.save()` 将 ndarray 保存到后缀为 `.npy` 的指定文件名的文件中，存于当前工作目录下。

```python
# We create a rank 1 ndarray
x = np.array([1, 2, 3, 4, 5])

# We save x into the current directory as
np.save('my_array', x)
```

## 加载ndarray
使用函数 `np.load()` 加载ndarray到变量中。

```python
# We load the saved array from our current directory into variable y
y = np.load('my_array.npy')

# We print y
print('y = ', y)
```

:hammer:

```shell
y = [1 2 3 4 5]
```

## 编辑ndarray
### 访问元素
通过在方括号 `[]` 中添加**索引**来访问 ndarray 中的元素,在 NumPy 中，可使用**正索引**和**负索引**访问。如访问秩为 `2` 的 ndarray 元素,提供两个索引，格式为 `[row, column]`

:warning: 第一个元素的索引为 `0`（而不是 `1`）

```python
# 使用 python 列表创建一维的 ndarray
X = np.array([1, 2, 3, 4, 5])
print('X = ', X)

print('This is First Element in X:', X[0])

# 使用 python 列表创建一个二维 3 x 3 数组
Y = np.array([[1,2,3],[4,5,6],[7,8,9]])
print('Y = \n', Y)
print()

# 索引 [0, 0] 是指第一行第一列的元素
print('This is (0,0) Element in X:', X[0,0])
```

:hammer:

```shell
X = [1 2 3 4 5]
This is First Element in X: 1

Y =
[[1 2 3]
 [4 5 6]
 [7 8 9]]
This is (0,0) Element in Y: 1
```
#### 布尔型索引

使用逻辑参数（而不是确切的索引）选择元素

```python
X = np.arange(25).reshape(5, 5)
print('Original X = \n', X)

# 使用布尔型索引选择元组 X 中符合条件的元素
print('The elements in X that are greater than 10:', X[X > 10])
print('The elements in X that lees than or equal to 7:', X[X <= 7])
print('The elements in X that are between 10 and 17:', X[(X > 10) & (X < 17)])
```

```python
Original X =
[[ 0 1 2 3 4]
 [ 5 6 7 8 9]
 [10 11 12 13 14]
 [15 16 17 18 19]
 [20 21 22 23 24]]

The elements in X that are greater than 10: [11 12 13 14 15 16 17 18 19 20 21 22 23 24]
The elements in X that lees than or equal to 7: [0 1 2 3 4 5 6 7]
The elements in X that are between 10 and 17: [11 12 13 14 15 16]
```

* 修改值

    ```python
    X = np.arange(25).reshape(5, 5)
    print('Original X = \n', X)

    # 将符合条件（大于10小于17）的元素赋值为-1
    X[(X > 10) & (X < 17)] = -1
    print('X = \n', X)
    ```

    :hammer:

    ```shell
    Original X =
    [[ 0 1 2 3 4]
     [ 5 6 7 8 9]
     [10 11 12 13 14]
     [15 16 17 18 19]
     [20 21 22 23 24]]

    X =
    [[ 0 1 2 3 4]
     [ 5 6 7 8 9]
     [10 -1 -1 -1 -1]
     [-1 -1 17 18 19]
     [20 21 22 23 24]]
    ```

* 集合运算

    ```python
    x = np.array([1,2,3,4,5])
    y = np.array([6,7,2,8,4])
    ```
    * 交集
        使用函数 `np.intersect1d(ndarray1, ndarray2)` 返回两个元组中相同元素

        ```python
        print('The elements that are both in x and y:', np.intersect1d(x,y))
        ```

    * 补集
        使用函数 `np.setdiff1d(ndarray1, ndarray2)` 返回以元组 `ndarray1` 为全集的 `ndarray2` 的补集

        ```python
        print('The elements that are in x that are not in y:', np.setdiff1d(x,y))
        ```

    * 全集
        使用函数 `np.union1d(ndarray1, ndarray2)` 返回两个元组组成的全集（无元素重复）

        ```python
        print('All the elements of x and y:',np.union1d(x,y))
        ```

    :hammer:

    ```shell
    x = [1 2 3 4 5]
    y = [6 7 2 8 4]

    The elements that are both in x and y: [2 4]
    The elements that are in x that are not in y: [1 3 5]
    All the elements of x and y: [1 2 3 4 5 6 7 8]
    ```



### 修改元素
ndarray 创建之后可以更改

```python
# 创建一个 3 x 3 的二维 ndarray
X = np.array([[1,2,3],[4,5,6],[7,8,9]])
print('Original:\n X = \n', X)

# 将元素 (0,0) 从 1 修改为 20
X[0,0] = 20

print('Modified:\n X = \n', X)
```

:hammer:

```shell
Original:
X =
[[1 2 3]
 [4 5 6]
 [7 8 9]]

Modified:
X =
[[20 2 3]
 [ 4 5 6]
 [ 7 8 9]]
```

### 删除元素

使用 `np.delete(ndarray, elements, axis)` 函数删除元素。沿着 ndarray **指定的轴 `axis`** 删除**由列表 `elements` 指定**的元素。

* 对于秩为 1 的 ndarray，不需要使用关键字 axis（只有一个轴）

```python
x = np.array([1, 2, 3, 4, 5])
print('Original x = ', x)

# 删除一维数组 x 的第一个和最后一个元素
x = np.delete(x, [0,4])
# We print x with the first and last element deleted
print('Modified x = ', x)
```

:hammer:

```shell
Original x = [1 2 3 4 5]
Modified x = [2 3 4]
```

* 对于秩为 2 的 ndarray，axis = 0 表示选择行，axis = 1 表示选择列。

```python
Y = np.array([[1,2,3],[4,5,6],[7,8,9]])
print('Original Y = \n', Y)

# 删除二维数组 y 第一行，输入轴为0，输入元素为0
w = np.delete(Y, 0, axis=0)

# 删除二维数组 y 第一列和最后一列，输入轴为1，输入列表为[0,2]
v = np.delete(Y, [0,2], axis=1)

print('w = \n', w)
print('v = \n', v)
```

:hammer:

```shell
Original x = [1 2 3 4 5]

Modified x = [2 3 4]

Original Y =
[[1 2 3]
 [4 5 6]
 [7 8 9]]

w =
[[4 5 6]
 [7 8 9]]

v =
[[2]
 [5]
 [8]]
```

### 添加元素

使用 `np.append(ndarray, elements, axis)` 函数附加元素到指定的**轴**上

```python
# 创建一维数组
x = np.array([1, 2, 3, 4, 5])
print('Original x = ', x)

# 将整数6附加到x
x = np.append(x, 6)
print('x = ', x)

# 创建二维数组
Y = np.array([[1,2,3],[4,5,6]])

# 附加新的一行，轴设置为0，元素分别为7、8、9
v = np.append(Y, [[7,8,9]], axis=0)

# 附加新的一列，轴设置为1，元素分别为9、10
q = np.append(Y,[[9],[10]], axis=1)
print('v = \n', v)
print('q = \n', q)
```

:hammer:

```shell
Original x = [1 2 3 4 5]
x = [1 2 3 4 5 6]

Original Y =
[[1 2 3]
 [4 5 6]]

v =
[[1 2 3]
 [4 5 6]
 [7 8 9]]

q =
[[ 1 2 3 9]
 [ 4 5 6 10]]
```

### 插入元素

使用 `np.insert(ndarray, index, elements, axis)` 函数向中插入值，将给定的元素列表**沿着指定的轴**插入给定的**索引前面**

```python
x = np.array([1, 2, 5, 6, 7])
print('Original x = ', x)

# 在索引为2位置之前（即2和5之间）插入元素（列表）3、4
x = np.insert(x,2,[3,4])
print('x = ', x)

Y = np.array([[1,2,3],[7,8,9]])
print('Original Y = \n', Y)

# 在行插入选择轴为0，索引为1（即在第一行和第二行之间） 插入元素（列表）4、5、6
w = np.insert(Y,1,[4,5,6],axis=0)

# 在列插入选择轴为1，索引为1（即在第一列和第二列之间） 插入元素（多个）5
v = np.insert(Y,1,5, axis=1)

print('w = \n', w)
print('v = \n', v)
```

:hammer:

```shell
Original x = [1 2 5 6 7]
x = [1 2 3 4 5 6 7]

Original Y =
[[1 2 3]
 [7 8 9]]

w =
[[1 2 3]
 [4 5 6]
 [7 8 9]]

v =
[[1 5 2 3]
 [7 5 8 9]]
```
### 切片
使用**切片**的方式访问元组**子集**，常见的三种方式：
* `ndarray[start:end]` 截取从索引 `start` 到 `end`（不包含）的元素
* `ndarray[start:]` 截取从索引 `start` 开始到元组最后的元素
* `ndarray[:end]` 截取从元组开始到 `end`（不包含）的元素

若 ndarray 是多维数组，在切片时，通常需要为数组的**每个维度指定一个切片**。

```python
# 创建一个 4 x 5 多维数组，使用的是reshape方法
X = np.arange(20).reshape(4, 5)
print('X = \n', X)

# 选择在第2至第4行、第3和第5列的元素
Z = X[1:4,2:5]
print('Z = \n', Z)

# 使用另一种方法（没有终点索引）选择相同的元素
W = X[1:,2:5]
print('W = \n', W)

# 使用一个索引值，选择第3列元素，返回一个一维元组
q = X[:,2]
print('q = ', q)

# 使用两个索引值，选择第3列元素，返回一个二维元组
R = X[:,2:3]
print('R = \n', R)
```

:hammer:

```shell
X =
[[ 0 1 2 3 4]
 [ 5 6 7 8 9]
 [10 11 12 13 14]
 [15 16 17 18 19]]

Z =
[[ 7 8 9]
 [12 13 14]
 [17 18 19]]

W =
[[ 7 8 9]
 [12 13 14]
 [17 18 19]]

q = [ 2 7 12 17]

R =
[[ 2]
 [ 7]
 [12]
 [17]]
```

:warning: 切片结果保存到**新的变量**中，并不是产生副本，只是创建了原始数组的新 **「视图」**（一个只显示原来数组的特定区域元素的视图），当修改这个「视图」里的元素后对应的**原始数组也会发生改变**

```python
X = np.arange(20).reshape(4, 5)
print('X = \n', X)

Z = X[1:4,2:5]
print('Z = \n', Z)

# 修改切片中的元素
Z[2,2] = 555

# 原始的数组对应元素也发生了改变
print('X = \n', X)
```

:hammer:

```shell
X =
[[ 0 1 2 3 4]
 [ 5 6 7 8 9]
 [10 11 12 13 14]
 [15 16 17 18 19]]

Z =
[[ 7 8 9]
 [12 13 14]
 [17 18 19]]

X =
[[ 0 1 2 3 4]
 [ 5 6 7 8 9]
 [ 10 11 12 13 14]
 [ 15 16 17 18 555]]
```

#### 函数np.copy()
若要修改切片而不影响原始的数组，可以使用 `np.copy(ndarray)`函数为切片创建一个**副本**，此函数还可以当做**方法**使用。

```python
X = np.arange(20).reshape(4, 5)
print('X = \n', X)

# 使用np.copy()函数创建切片副本
Z = np.copy(X[1:4,2:5])

#  使用方法copy创建切片副本
W = X[1:4,2:5].copy()

Z[2,2] = 555
W[2,2] = 444

print('X = \n', X)
print('Z = \n', Z)
print('W = \n', W)
```

```python
X =
[[ 0 1 2 3 4]
 [ 5 6 7 8 9]
 [10 11 12 13 14]
 [15 16 17 18 19]]

X =
[[ 0 1 2 3 4]
 [ 5 6 7 8 9]
 [10 11 12 13 14]
 [15 16 17 18 19]]

Z =
[[ 7 8 9]
 [ 12 13 14]
 [ 17 18 555]]

W =
[[ 7 8 9]
 [ 12 13 14]
 [ 17 18 444]]
```

#### 函数np.diag()
函数 `np.diag(ndarray, k=N)` 函数会以 `N` 定义的**对角线提取元素**，默认 `k=0` 表示主对角线，`k > 0` 选择主对角线之上的对角线中的元素，`k < 0` 选择主对角线之下的对角线中的元素。

```python
X = np.arange(25).reshape(5, 5)
print('X = \n', X)

print('z =', np.diag(X))
print('y =', np.diag(X, k=1))
print('w = ', np.diag(X, k=-1))
```

:hammer:

```shell
X =
[[ 0 1 2 3 4]
 [ 5 6 7 8 9]
 [10 11 12 13 14]
 [15 16 17 18 19]
 [20 21 22 23 24]]

z = [ 0 6 12 18 24]

y = [ 1 7 13 19]

w = [ 5 11 17 23]
```

#### 函数np.unique()

`np.unique(ndarray)` 函数查找 ndarray 中的唯一元素

## 堆叠ndarray

* 使用 `np.vstack()` 函数将**形状相符**的数组进行**垂直 vertical 堆叠**，即数组**在竖直方法上**增长**
* 使用 `np.hstack()` 函数将**形状相符**的数组进行**水平 horizontal 堆叠**，即数组**在水平方法上**增长**
* 输入的两个堆叠ndarray以**元组**形式输入

```python
# 创建一个1x2的一维数组
x = np.array([1,2])
print('x = ', x)

# 创建一个2x2的二维数组
Y = np.array([[3,4],[5,6]])
print('Y = \n', Y)

# 将数组Y元素垂直堆叠到x之下（前提为两者axis=0时元组形状相同，均为2）
z = np.vstack((x,Y))

# 将数组x元素水平堆叠到Y之右（前提为两者axis=0时元组形状相同，先要调用通过函数reshape()改变x的形状，再输入hstack()函数种）
w = np.hstack((Y,x.reshape(2,1)))

print('z = \n', z)
print('w = \n', w)
```

:hammer:

```shell
x = [1 2]

Y =
[[3 4]
 [5 6]]

z =
[[1 2]
 [3 4]
 [5 6]]

w =
[[3 4 1]
 [5 6 2]]
```

## 排序
### 函数np.sort()

* 使用 `np.sort()` 对数组进行排序，**不更改**原始的数组序列
* 二维数组需要输入排序所依照的**轴 `axis`**，如对于二维数组
    * 当 `axis = 0` 时，对数组的**每行**元素分别进行排序
    * 当 `axis = 1` 时，对数组的**每列**元素分别进行排序

```python
X = np.random.randint(1,11,size=(5,5))
print('Original X = \n', X)

# 使用函数 np.sort() 对数组基于行进行排序
print('X with sorted columns :\n', np.sort(X, axis = 0))

# 使用函数 np.sort() 对数组基于列进行排序
print('X with sorted rows :\n', np.sort(X, axis = 1))
```

:hammer:

```shell
Original X =
[[6 1 7 6 3]
  [3 9 8 3 5]
  [6 5 8 9 3]
  [2 1 5 7 7]
  [9 8 1 9 8]]

X with sorted columns :
[[2 1 1 3 3]
  [3 1 5 6 3]
  [6 5 7 7 5]
  [6 8 8 9 7]
  [9 9 8 9 8]]

X with sorted rows :
[[1 3 6 6 7]
  [3 3 5 8 9]
  [3 5 6 8 9]
  [1 2 5 7 7]
  [1 8 8 9 9]]
```

### 方法sort
将`sort`当做方法，`ndarray.sort()` 会就地排序 ndarray，即**原始数组会变成排序后的数组**。

```python
x = np.random.randint(1,11,size=(10,))
print('Original x = ', x)

# 使用 np.sort() 函数进行排序
print('Sorted x (out of place):', np.sort(x))

# 使用 ndarray.sort() 方法进行排序，原始数组进行改变
print('x after sorting:', x)
```

:hammer:

```shell
Original x = [9 6 4 4 9 4 8 4 4 7]
Sorted x (out of place): [4 4 4 4 4 6 7 8 9 9]
x after sorting: [9 6 4 4 9 4 8 4 4 7]
```

## 广播
[广播](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)是一种矢量化数组的操作方法， 在算术运算期间（隐式/显式）处理具有**不同形状 `shape` 的数组**，使较小的数组「广播」为相应的较大数组，以便它们具有**兼容的形状**方便运算。

* 对单个数字进行广播

```python
# X 数组形状为 2x2
X = np.array([[1,2], [3,4]])
print('X = \n', X)

# NumPy 在后台（隐式）对 ndarray 广播 3，使它们具有相同的形状，可以使 X 的每个元素加 3
print('3 * X = \n', 3 * X)
print()
```

:hammer:

```shell
X =
[[1 2]
 [3 4]]

3 * X =
[[ 3 6]
 [ 9 12]]
```

* 对不同 ndarray 进行广播
此时广播操作的前提是，更小的 ndarray 可以很**清晰明确**扩展成**相应**更大的 ndarray 的形状。

```python
# 创建一维数组 x
x = np.array([1,2,3])

# 创建二维，形状为 3x3 的数组 Y
Y = np.array([[1,2,3],[4,5,6],[7,8,9]])

# 创建二维，形状为 3x1 的数组 Z
Z = np.array([1,2,3]).reshape(3,1)

print('x = ', x)
print('Y = \n', Y)
print('Z = \n', Z)

# 对数组 x 进行广播，相当于
# x =
# [[1 2 3]
#  [1 2 3]
#  [1 2 3]]
print('x + Y = \n', x + Y)

# 对数组 Z 进行广播，相当于
# Z =
# [[1 1 1]
#  [2 2 2]
#  [3 3 3]]
print('Z + Y = \n',Z + Y)
```

:hammer:

```shell
x = [1 2 3]

Y =
[[1 2 3]
 [4 5 6]
 [7 8 9]]

Z =
[[1]
 [2]
 [3]]

x + Y =
[[ 2 4 6]
 [ 5 7 9]
 [ 8 10 12]]

Z + Y =
[[ 2 3 4]
 [ 6 7 8]
 [10 11 12]]
```
## 运算
### 元素级运算
在进行元素级运算时，对其执行运算的 ndarray **必须具有相同的形状或者可以广播**（具有不同形状的 ndarray 进行元素级算术运算，如在标量和 ndarray 之间进行算术运算时，会隐式地用到广播。）

#### 算术运算
可使用函数或算术符号，函数可通过关键字调整各种运算选项。
* 加法
使用 `np.add(ndarray1, ndarray2)` 函数或 `+` 算术符号

* 减法
使用 `np.subtract(ndarray1, ndarray2)` 函数或 `-` 算术符号

* 乘法
使用 `np.multiply(ndarray1, ndarray2) 函数或 `*` 算术符号

* 除法
使用 `np.divide(ndarray1, ndarray2)` 函数或 `/` 算术符号

* 平方根
使用函数 `np.sqrt(ndarray)`

* 自然指数函数
使用函数 `np.exp(ndarray)` 返回数组各元素 x 的指数 e^x^

* 乘幂函数
使用函数 `np.power(x,k)`（其中 `k` 为指数），如 `np.power(ndarray,2)` 返回数组各元素的平方

#### 统计学信息
* 平均数

方法 `X.mean()` 返回元组所有元素的均值

* 求和

方法 `X.sum()` 返回元组所有元素的和

* 中位数

函数 `np.median(ndarray)` 返回元组所有元素的中位数

* 最大值

方法 `X.max()` 返回元组所有元素中的最大值

* 最小值

方法 `X.min()` 返回元组所有元素中的最小值

* 标准偏差

方法 `X.std()` 返回元组所有元素的标准偏差

* 方差

函数 `np.var(ndarray)` 返回元组所有元素的方差

:warning: 可设置参数 `axis` 以计算**特定维度元素的均值**

```python
X = np.array([[1,2], [3,4]])
print('X = \n', X)

print('Average of all elements in X:', X.mean())
print('Average of all elements in the columns of X:', X.mean(axis=0))
print('Average of all elements in the rows of X:', X.mean(axis=1))
```

:hammer:

```shell
X =
[[1 2]
 [3 4]]

Average of all elements in X: 2.5
Average of all elements in the columns of X: [ 2. 3.]
Average of all elements in the rows of X: [ 1.5 3.5]
```

### 矩阵运算


## 相关教程
我们将仅介绍 NumPy 的一些基本功能。如果你想深入学习 NumPy，确保参阅 NumPy 文档：

* [NumPy 手册](https://docs.scipy.org/doc/numpy-1.13.0/contents.html)
* [NumPy 用户指南](https://docs.scipy.org/doc/numpy-1.13.0/user/index.html)
* [NumPy 参考资料](https://docs.scipy.org/doc/numpy-1.13.0/reference/index.html#reference)
* [Scipy 讲座](http://www.scipy-lectures.org/intro/numpy/index.html)