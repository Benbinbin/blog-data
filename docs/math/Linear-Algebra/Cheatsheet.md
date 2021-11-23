---
show: true
collection: MIT 18.06SC Linear Algebra
collectionOrder: 0
summary: 线性代数速查表
cover: Introduction-to-Linear-Algebra.jpg
tags:
  - linear-algebra
---

# Cheatsheet
## 行向量与列向量相乘
行向量 $a_{1 \times n}$ 与列向量 $b_{n \times 1}$ 相乘，结果是一个数值 $c$

可以将这种相乘方式看作是维度为 $1 \times n$ 的矩阵与列向量（也是 $n$ 维）相乘，**以矩阵与列向量相乘的角度来考虑**，因此结果是矩阵各列基于列向量作为系数的线性组合，

<!-- #region-->
$$
\begin{aligned}
c
&=
\begin{bmatrix}
  a_{1}& a_{2}& \cdots  & a_{n}
\end{bmatrix}
\begin{bmatrix}
 b_{1}\\
 b_{2}\\
 \vdots\\
 b_{n}
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

即 $c = \sum_{k=1}^{n} a_{k}b_{k}$

:warning: 向量元素数量需要相同。



## 列向量与行向量相乘

列向量 $a_{m \times 1}$ 与行向量 $b_{1 \times p}$ 相乘，结果是一个矩阵 $C_{m \times p}$

<!-- #region-->
$$
\begin{aligned}
\begin{bmatrix}
 2\\
 3\\
 4
\end{bmatrix}
\begin{bmatrix}
  1&6
\end{bmatrix}
&=
\begin{bmatrix}
 2 &12\\
 3 & 18\\
 4 & 24
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

可以将这种相乘方式看作是维度为 $m \times 1$ 的矩阵与维度为 $1 \times p$ 的矩阵相乘。

可以知道结果矩阵的列维度是基于列向量 $a$，行维度是基于行向量 $b$ 的。因此结果矩阵的列空间 column space 是一条线（与列向量 $a$ 共线）；行空间 row space 也是一条线（与行向量 $b$ 共线）



## 矩阵与列向量相乘

矩阵以列形式来思考，向量作为系数，矩阵与之相乘，相当于**矩阵的每一列基于该系数（向量的各元素）进行线性组合**，得到的结果是一个列向量
<!-- region -->
$$
\begin{aligned}
\begin{bmatrix}
  2&-1 \\
  -1&2
\end{bmatrix}
\begin{bmatrix}
 1\\
 2
\end{bmatrix}
&=
1\begin{bmatrix}
 2\\1
\end{bmatrix}
+
2\begin{bmatrix}
 5\\3
\end{bmatrix}
&=
\begin{bmatrix}
 0\\3
\end{bmatrix}
\end{aligned}
$$
<!-- endregion -->



## 行向量与矩阵相乘

矩阵以行形式来思考，向量作为系数，与矩阵相乘，相当于**矩阵的每一行基于该系数（向量的各元素）进行线性组合**，得到的结果是一个行向量

<!-- #region-->
$$
\begin{aligned}
\begin{bmatrix}
  1&2
\end{bmatrix}
\begin{bmatrix}
  2&-1 \\
  -1&2
\end{bmatrix}
&=
1 \times \begin{bmatrix}
  2&-1
\end{bmatrix}
+
2 \times \begin{bmatrix}
  -1&2
\end{bmatrix}
&=
\begin{bmatrix}
  0&3
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->



## 矩阵相乘法则

矩阵相乘**==顺序不可变==**，但相乘次序（先后顺序）可变（可以通过添加括号实现）

* **满足结合律 associative law**：$ABC = A(BC)$
* **<span style="color:red">不</span>满足交换律 commutative law**：$AB \neq BA$
* **满足分配律 distributive law**：$AB+AC=A(B+C)$（:warning: 但相乘时，因子顺序不可变，即 $A(B+C)$ 只能拆分为 $AB$ 和 $AC$ 之和，不能拆分为 $BA$ 和 $CA$ 之和）



## 差异矩阵与求和矩阵

当矩阵 A 为 $\begin{bmatrix}  1&0  &0 \\  -1&1  &0 \\  0&-1  &1\end{bmatrix}$ 则有 $Ax=b$ 为

<!-- region -->
$$
\begin{aligned}
Ax & =
\begin{bmatrix}
  1 & 0 & 0 \\
  -1 & 1 & 0 \\
  0 & -1 & 1
\end{bmatrix}
\begin{bmatrix}
  x_{1} \\
  x_{2} \\
  x_{3}
\end{bmatrix}
& =
\begin{bmatrix}
 x_{1} \\
 x_{2} - x_{1} \\
 x_{3} - x_{2}
\end{bmatrix}
& = b
\end{aligned}
$$
<!-- endregion -->

得出的向量元素是由原向量的**元素相减产生**的，因此称这类型的矩阵 A 为**差异矩阵**，上述示例矩阵 $A$ 为一阶差矩阵 first difference matrix。

类似地，**求和矩阵**就是使得结果向量的元素是由原向量的**元素相加产生**的，记作 $S$

当矩阵 A 为 $\begin{bmatrix}  1&0  &0 \\  1&1  &0 \\  1&1  &1\end{bmatrix}$ 则有 $Ax=b$ 为

<!-- region -->
$$
\begin{aligned}
Ax &=
\begin{bmatrix}
  1&0  &0 \\
  1&1  &0 \\
  1&1  &1
\end{bmatrix}
\begin{bmatrix}
 x_{1} \\
 x_{2}\\
 x_{3}
\end{bmatrix}
&=
\begin{bmatrix}
 x_{1}\\
 x_{1} + x_{2}\\
 x_{1} + x_{2} + x_{3}
\end{bmatrix}
&=
b
\end{aligned}
$$
<!-- endregion -->



## 初等矩阵

初等矩阵 elimination matrix，也称为消元矩阵 elementary matrix，记作 E，由于该矩阵的作用是在使用消元法求解方程组时，**左乘目标矩阵，以行向量和矩阵相乘的角度来考虑，以对目标进行基本的变换（行之间进行加减组合，以依次在每一行实现消除一个元）**，实现将目标矩阵变换为上三角矩阵 U 的目的。

<!-- #region-->
$$
\begin{aligned}
E\times A
&=
\begin{bmatrix}
  1&0  &0 \\
  {\color{Red} -3}&{\color{Red} 1}  &{\color{Red} 0}  \\
  0&0  &1
\end{bmatrix}
\begin{bmatrix}
  1&2  &1 \\
  3&8  &1 \\
  0&4  &1
\end{bmatrix}
&=
\begin{bmatrix}
  1&2  &1 \\
  0&2  &-2 \\
  0&4  &1
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

示例的初等矩阵 E 对目标矩阵 A 第二行进行变换，以 ${\color{Red}第一行\times -3 + 第二行}$ 的结果作为目标矩阵 A 新的第二行。



## 置换矩阵

置换矩阵 Permutation matrix，记为 P，该矩阵与目标矩阵相乘，实现对矩阵两行互换的功能。

以**行向量与矩阵相乘的角度来考虑置换矩阵 x 目标矩阵**，并从单位矩阵的作为的作用（相当于单位 1，左乘目标矩阵，矩阵不变，当然右乘目标矩阵也不变）来类比，可以「解读」置换矩阵究竟对目标矩阵的哪两行进行置换。

<!-- #region-->
$$
\begin{aligned}
P \times A
&=
\begin{bmatrix}
  0& 1\\
  1& 0
\end{bmatrix}
\begin{bmatrix}
  a& b\\
  c& d
\end{bmatrix}
&=
\begin{bmatrix}
  c&d \\
  a&b
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

示例的置换矩阵 P 对目标矩阵 A 进行行置换。

:bulb: 置换矩阵 $P$ 可以看作是由单位矩阵 $I$ 调换相应的行而得到的，当该置换矩阵与相应的矩阵相乘时，作用就是调用目标矩阵相应的行。

:bulb: 所有置换矩阵都有逆矩阵（将行置换操作「还原」），置换矩阵的逆矩阵是其转置矩阵 $P^{-1}=P^{T}$，因此 $P^{T}P=P^{-1}P=I$

:bulb: 类似地，可以通过**右乘**（以矩阵与列向量的角度来考虑）实现**列置换**：

<!-- #region-->
$$
\begin{aligned}
A \times M
&=
\begin{bmatrix}
  a& b\\
  c& d
\end{bmatrix}
\begin{bmatrix}
  0& 1\\
  1& 0
\end{bmatrix}
&=
\begin{bmatrix}
  b&a \\
  d&c
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->



## 增广矩阵

增广矩阵 augmented matrix 是在求解方程组时间系数矩阵 A 与方程组等号右侧的结果向量 b **结合在一起构成的矩阵**，便于以矩阵的形式使用消元法求解方程组，:bulb: 虽然软件使用消元法进行求解方程组时，实际是将系数矩阵和结果向量分开变换的。

对于方程组 $\begin{aligned}\begin{cases}2x-y=0\\-x+2y=3\\\end{cases}\end{aligned}$

其系数矩阵为 $\begin{aligned}A&=\begin{bmatrix}2&-1 \\-1&2\end{bmatrix}\end{aligned}$，结果向量 $\begin{aligned}b&=\begin{bmatrix} 0\\3\end{bmatrix}\end{aligned}$

则其增广矩阵为

<!-- #region-->
$$
\begin{aligned}
\begin{bmatrix}
  2&-1&0 \\
  -1&2&3 \\
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

:bulb: 有时候会在[增广矩阵](https://en.wikipedia.org/wiki/Augmented_matrix)中使用一条竖线分隔系数部分 A 和结果部分 B，并将矩阵命名为 (A|B)。



## 三角矩阵

### 上三角矩阵
上三角矩阵 upper triangular matrix，记作 U，它是在使用消元法求解方程组过程中，通过置换和（或）基本变换得到的**对角线左下方全部为零的方阵**。

在使用消元法（如高斯消元法）求解方程组时，当系数矩阵 A 变换为 U 时，就可以从最底层一行求得对应的一个未知数，并通过从下到上依次**回代替换 backwards substitution** 的方法解出所有的未知数。

:bulb: 有时候为了统一（与下三角矩阵 $L$ 形式对应），**会将上三角矩阵 $U$ 对角线上的主元「提出」，作为对角矩阵 $D$，分解为 $U=DU$ 形式**，这样就可以使得上三角矩阵的对角线元素都为 1。

将 $U=\begin{bmatrix}
  2&1\\
  0&3
\end{bmatrix}$ 分解为 $DU$ 形式

<!-- #region-->
$$
\begin{aligned}
U=
\begin{bmatrix}
  2&1\\
  0&3
\end{bmatrix}=
\begin{bmatrix}
  2&0\\
  0&3
\end{bmatrix}
\begin{bmatrix}
  1&\frac{1}{2} \\
  0&1
\end{bmatrix}=
DU
\end{aligned}
$$
<!-- #endregion -->

### 下三角矩阵
下三角矩阵 lower triangular matrix，记作 L，它其实是在使用消元法求解方程组过程中产生的**各个消元矩阵的逆矩阵的（逆序）乘积**，可以将上三角矩阵 $U$ 「还原」为目标矩阵 $A$ 的一种矩阵，或可以理解为将矩阵分解为 $A=LU$ 形式。

下三角矩阵是对角线上的元素都是 1，且右上方全部为零的方阵。



## 阶梯形式

如果矩阵中有些列与其他列线性相关（非独立），则通过消元变换得到的矩阵 U 在对角线或上三角部分也可能存在 0，这种更一般形式被称为**阶梯形式 echelon form**，因为矩阵右上角的非零元素以一种类似阶梯的形式出现。

<!-- #region-->
$$
\begin{aligned}
A=
\begin{bmatrix}
  1 &2 &2 &2\\
  2 &4 &6 &8\\
  3 &6 &8 &10\\
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{Red}1} &2 &2 &2\\
  0 &0 &2 &4\\
  0 &0 &2 &4\\
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{Red}1} &2 &2 &2\\
  0 &0 &{\color{Red}2} &4\\
  0 &0 &0 &0\\
\end{bmatrix}
=U
\end{aligned}
$$
<!-- #endregion -->

:bulb: 消元得到矩阵 U 根据主元的位置可以将各列分为两种：

* 主列：主元所在的列，在求解方程组 $Ux=0$ 回代替换过程中，这些列所对应的未知数 $x_{i}$ 可以求出确定值，这些未知数称为**主变量**。
* 自由列：主元不存在的列，在求解方程组 $Ux=0$ 回代替换过程中，这些列所对应的位置数 $x_{i}$ 可以指定为任意值（由于无法通过等式确定它们的值，即它们取任意值也不响应方程组等式关系的成立），这些未知数称为**自由变量**。

### 秩
秩 Rank 是矩阵（在求解方程组时，通过消元法将矩阵变换为 echelon form 阶梯形式）**所含有的主元数量**，记作 r。

秩表示方程组 $Ux=0$ 中**可以==基于确定的等式关系==求出值的未知数的数量**（并非所有的未知数都可以求出确定值，这是由于方程组中部分等式是「非独立」的）。

:bulb: 在方程组 $A_{m \times n}x=0$，其中未知数（或变量）的维度就是 $n$，所以当秩为 $r$ 时，则自由变量的数量就为 $n-r$ 个。

:bulb: 矩阵 $A$ 的秩与其转置矩阵 $A^{T}$ 的秩相同（主元数量相同）。

### 简化行阶梯形式
简化行阶梯形式 Reduce Row Echelon Form 是使用消元法（方程组中各等式之间作差，或等式内初一系数进行化简）进一步将阶梯形式的矩阵 U 化简为**主元为 1，主元所在列上下元素都为 0 的形式**，记作 R

<!-- #region-->
$$
\begin{aligned}
U=
\begin{bmatrix}
  {\color{Red}1} &2 &2 &2\\
  0 &0 &{\color{Red}2} &4\\
  0 &0 &0 &0\\
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{Red}1} &2 &0 &-2\\
  0 &0 &{\color{Red}2} &4\\
  0 &0 &0 &0\\
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{Red}1} &2 &0 &-2\\
  0 &0 &{\color{Red}1} &2\\
  0 &0 &0 &0\\
\end{bmatrix}
=R
\end{aligned}
$$
<!-- #endregion -->

:bulb: 在求解方程组 $Ax=0$ 的零空间时，**该形式的矩阵 R 可以更方便**地在指定自由变量后，回代替换求出主变量，**得到特解**；或者可以直接根据矩阵 R 上自由列和主列写出零空间矩阵 $N=\begin{bmatrix}-F\\I\end{bmatrix}$



## 主元

主元 pivot 是指以矩阵形式使用消元法求解方程组时，通过矩阵变换得到的一种矩阵形式里的元素，在矩阵的一列中除了该元素以外，**其下方的元素都为 0 的形式**，则该元素就是主元，它主要是用于特定计算（求解主元所在列对应的未知数的值）。

消元法是为了便于回代替换，需要将矩阵变换为上三角矩阵 U，因此直观来说**各行的主元就是基于上一行主元往后「缩」一个位置**，即每一行第一个非零元素就是主元，而且基于这个规则主元所在列的下方元素都是零。



## 可逆矩阵/非奇异矩阵

可以通过几个角度理解可逆矩阵/非奇异矩阵 invertible/non-singular matrix
* **几何的角度**：矩阵各列（向量）都「独立」independent，具体是如果 $Ax=b$ 有解，则为 $x=A^{-1}b$，有且只有一个 $A^{-1}$ 使得等式成立；否则矩阵 A 的各列向量只是表示其所在维度的子空间 subspace。

* **消元法的角度**：**不可逆矩阵**就是矩阵通过置换和初等变换等方法，无法得到相应数量的主元。由于方程组中的**部分等式并不「独立」**，因此存在在消元法求解过程中会在**一个消元步骤会==同时消除多个元==的情况**。则==原系数矩阵 A 是**不可逆**的，方程组也**无法求得唯一解**==。

* **行列式的角度**：可逆矩阵的行列式不为 0



## 不可逆矩阵

对于矩阵 $A$，==若存在列向量 $x$，且 $x \neq 0$ 不为零向量，使得 $Ax=0$ 成立==，则 $A$ 为不可逆/奇异矩阵 no-inverse/singular matrix。

:bulb: 使用反证法证明：若矩阵 $A$，若存在列向量 $x$（且 $x \neq 0$ 不为零向量）使得 $Ax=0$ 成立，且 $A$ 为可逆矩阵，则存在 $A^{-1}Ax=Ix=0$，必得到 $x=0$，这与条件 $x \neq 0$ 矛盾。

以矩阵各列线性组合的角度考虑 $Ax$，当矩阵（至少存在两列）某些列并非「独立」（或对矩阵的空间维度无「贡献」），就**存在非零的 $x$**（线性组合系数）使得矩阵 $A$ 各列进行线性组合时，利用非「独立」的列相互抵消，**使得 $Ax=0$ 成立**。

例如对于矩阵 $A=\begin{bmatrix}1&3\\2&6\end{bmatrix}$ **假如存在逆矩阵**，则满足 $AA^{-1}=I$（或 $A^{-1}A=I$）。

以矩阵与列向量相乘的角度考虑 $AA^{-1}$ 两矩阵相乘，**结果矩阵各列都是由矩阵 $A$ 各列的线性组合得到的**，而 $A$ 的列 $\begin{bmatrix}1\\2\end{bmatrix}$ 和 $\begin{bmatrix}3\\6\end{bmatrix}$ 是同一向量，**其所有的线性组合依然在同一线上**，==即这两个列向量的线性组合无法得到 $\begin{bmatrix}1\\0\end{bmatrix}$ 或 $\begin{bmatrix}0\\1\end{bmatrix}$==，因此矩阵 $A=\begin{bmatrix}1&3\\2&6\end{bmatrix}$ 是不可逆的。



## 逆矩阵

若矩阵 $A$ 是可逆矩阵/非奇异矩阵 invertible/non-singular matrix，假设其左逆矩阵为 $A^{-1}$，则满足 $A^{-1}A=I$。

:bulb: 如果 $A$ 时**方阵**，则满足 $A^{-1}A=I$ 且 $AA^{-1}=I$，**即（可逆）方阵的左逆和右逆相同**。

### 相乘矩阵的逆矩阵
已知矩阵 $A$ 和矩阵 $B$ 具有逆矩阵 $A^{-1}$ 和 $B^{-1}$，则**相乘 $AB$ 得到的结果矩阵的逆矩阵是 $B^{-1}A^{-1}$**

由于 $(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AIA^{-1}=AA^{-1}=I$ 所以 $B^{-1}A^{-1}$ 是 $AB$ 结果矩阵的逆矩阵。另一侧 $(B^{-1}A^{-1})(AB)=I$ 也成立。

### 转置矩阵的逆矩阵
对于可逆矩阵 $A$，则其转置矩阵 $A^{T}$ 也是可逆的，**转置矩阵 $A^{T}$ 的逆矩阵是原矩阵的逆矩阵的转置 $(A^{-1})^{T}$**

由于已知 $AA^{-1}=I$，根据相乘矩阵的转置规则和单位矩阵的转置矩阵是其本身，可知 $(A^{-1})^{T}A^{T}=I$，因此 $(A^{-1})^{T}$ 是矩阵 $A^{T}$ 的逆矩阵。

:bulb: 对于单位矩阵 $I$，其转置矩阵是本身，且转置矩阵的逆矩阵也是其本身。

### 置换矩阵的逆矩阵
置换矩阵 $P$ 的逆矩阵是其转置矩阵 $P^{-1}=P^{T}$



## 转置矩阵

通过对调矩阵的所有元素的行和列位置就可以得到矩阵相应的转置矩阵，即矩阵 $A$ 中第 $i$ 行、第 $j$ 列元素 $a_{ij}$ 转置矩阵 $A^{T}$ 第 $j$ 行、第 $i$ 列元素 $a^{'}_{ji}$。

<!-- #region-->
$$
\begin{aligned}
(A^{T})_{ij}=A_{ji}
\end{aligned}
$$
<!-- #endregion -->

### 相乘矩阵的转置
矩阵相乘 $AB$ 得到的结果矩阵的转置矩阵是 $B^{T}A^{T}$

### 对称矩阵
对称矩阵 Symmetric matrices 置换后矩阵不变 $A=A^{T}$

可以通过矩阵与其置换矩阵相乘 $A^{T}A$ 或 $AA^{T}$ 构建对称矩阵



## 向量空间

向量空间 Vector Space 指由向量的**加法**和**数乘**两种运算求出的所有可能的向量集合，即通过**基向量**的**线性组合**得到的向量集合。即对于向量空间中任意两个向量 $\overrightarrow{v}$ 和 $\overrightarrow{w}$，当 $c$ 和 $d$ 是任意实数，都满足（线性组合）$c\overrightarrow{v}+d\overrightarrow{w}$ 仍在向量空间中。

根据定义向量空间是一群向量的集合，它们对线性组合**封闭**，即取向量空间中任意两个向量**相加**得到的结果仍在这个集合中，取向量空间中的任意向量进行**数乘**得到的结果仍在这个集合中。

:bulb: 由于向量空间对于向量的加法和数乘运算是封闭的，而数乘的因数可以取 $0$，因此**零向量是所有向量空间的元素**。

### 基
**基 base** 是张成一个向量空间所需的**最少**向量，通过它们所有可能的线性组合构成向量空间。

对于矩阵 A 的列空间 $C(A)$ 的基具有以下 2 个特性：

* 它们线性无关

* 它们可以张成列空间

基（向量组）的数量与其所在向量空间的**维度 dimension** 相同。

:bulb: 基是相对于向量空间而言的，而不是矩阵而言的

### 子空间
子空间 Subspace 是指在一个向量空间中取出部分向量，这些向量构成的子集对于**加法**和**数乘**也是封闭的，如只由零向量组成的矩阵子空间，其几何形式为原点。

假设向量空间存在两个子空间 $S$ 和 $T$，则它们的交集 $S \cap T$ 得到的向量集合仍构成子空间。

### 列空间
列空间 Column Space 是基于矩阵各列的所有可能的线性组合得到的向量集合，记作 $C(A)$。

:bulb: **但是矩阵各列组成的向量组并不一定构成列空间的基**。因为当矩阵中「独立」（线性无关的）列向量数量少于矩阵列维度（即矩阵是一个不可逆矩阵时），则矩阵的列空间就是一个真子空间（列空间维度低于矩阵原来可以表示的最大维度空间）：

**矩阵列空间 $C(A)$ 的维度 = 矩阵的秩 rank(A)**

即矩阵的主列的数量才是该矩阵的列空间 $C(A)$ 的基的数量，因此这些主列构成的向量组也是其中一种基。

### 零空间
零空间 Null Space 是指使得方程组 $Ax=0$ 成立的所有 $x$ 构成的向量集合，记作 $N(A)$。

:bulb: 其中零向量是必然使等式 $Ax=0$ 成立，因此**所有零空间都含有零向量**（其实对于向量空间也成立）

**矩阵零空间 $N(A)$ 的维度 = $n-r$（其中 $n$ 是矩阵 $A_{m \times n}$ 的列维度，$r$ 是矩阵 $A$ 的秩）**

即矩阵阶梯形式的自由变量的数量 free value number 是矩阵零空间的维度，根据维度可以知道基所需的向量组的数量，求出相应数量的特解，就可以得到其中一种基。

| | 列空间 $C(A)$ | 零空间 $N(A)$ |
| :---: | :---: | :---: |
| 区别 | 基于方程组 $Ax=b$ 的系数矩阵 $A$ 的列（向量）张成（所有可能的线性组合）的空间 | 基于方程组 $Ax=b$ 当结果向量为 $b=0$ 时，使得等式成立的所有解 $x$ 构成的空间 |
| 该空间的维度 | 秩 $r$ | $n-r$（自由变量的数量） |
| 该空间的向量的维度（对于 $A_{m \times n}x=b$） | $m$（即向量 $b$ 的维度，$b$ 在列空间中时，方程组有解）| $n$（即向量 $x$ 的维度，所有可能的解 $x$ 构成了零空间） |

## 线性相关性
**线性相关性是针对向量组（「一堆」向量）而言的**，例如对于两个向量，如果它们不在一条线上，则它们是线性无关的；而对于三个向量，如果它们不在一个平面上，则它们是线性无关的。

判定一个向量组 $\overrightarrow{v_{1}}$、$\overrightarrow{v_{2}}$……$\overrightarrow{v_{n}}$ 是否线性相关或线性独立，将这些向量组作为列，构成一个矩阵 $A$

根据矩阵 $A_{m \times n}$ 的零空间 $N(A)$ 的情况判定：

* **线性独立/线性无关 linearly independent**：零空间中只有零向量 $N(A)={0}$。此时对于方程组 $Ax=0$ 的系数矩阵的阶梯形式必然**没有**自由变量，即秩 $rank=n$

* **线性相关 linearly dependent**：零空间中存在一些**非零**向量。一般是由于方程组 $Ax=0$ 的系数矩阵的阶梯形式中的秩 $rank<n$，存在自由变量。

:bulb: 向量组的线性相关性可以考虑相应的矩阵的**零空间是否有非零向量**，可以从线性相关的定义来理解。向量组构成矩阵 $A$ 各列，$Ax$ 从矩阵与列向量相乘的角度思考（即矩阵各列根据向量 $x$ 进行线性组合），当存在非零解使得 $Ax=0$ 成立，即矩阵的其中一列可以被其他列的通过特点的线性组合得出，因此这些列向量组线性相关。

## 行列式

行列式是指矩阵主元 pivot 的乘积，:bulb: 对于三角矩阵的行列式就是其对角线上元素的乘积。