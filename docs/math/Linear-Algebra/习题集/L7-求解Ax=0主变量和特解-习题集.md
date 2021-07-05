---
collection: MIT 18.06SC Linear Algebra Exercise
collectionOrder: 8
tags:
  - linear-algebra
---

# L7-求解Ax=0主变量和特解-习题集
参考：

* Unit I: Ax = b and the Four Subspaces - Solving Ax = 0: Pivot Variables, Special Solutions - [Check Yourself](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/solving-ax-0-pivot-variables-special-solutions/)
* 题源：[Problem: Exercises on solving Ax = 0: pivot variables, special solutions](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/solving-ax-0-pivot-variables-special-solutions/MIT18_06SCF11_Ses1.7prob.pdf) | [pdf](./attachments/MIT18_06SCF11_Ses1.7prob.pdf)
* 参考答案：[Solutions: Exercises on solving Ax = 0: pivot variables, special solutions](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/solving-ax-0-pivot-variables-special-solutions/MIT18_06SCF11_Ses1.7sol.pdf) | [pdf](./attachments/MIT18_06SCF11_Ses1.7sol.pdf)

## 问题7.1
1. 求以下矩阵的简化行阶梯矩阵形式 Row Reduce Form

<!-- #region-->
$$
\begin{aligned}
A=
\begin{bmatrix}
  1&  5&  7& 9\\
  0&  4&  1& 7\\
  2&  -2&  11&-3
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

2. 矩阵 $A$ 的秩 Rank

3. 求方程组 $Ax-0$ 的特解，可以张成零空间

---

1. 解释
矩阵 $A$ 的简化行阶梯矩阵形式 Row Reduce Form
<!-- #region-->
$$
\begin{aligned}
A=
\begin{bmatrix}
  1&  5&  7& 9\\
  0&  4&  1& 7\\
  2&  -2&  11&-3
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  1&  5&  7& 9\\
  0&  4&  1& 7\\
  0&  -12&  -3&-21
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  1&  5&  7& 9\\
  0&  4&  1& 7\\
  0&  0&  0& 0
\end{bmatrix}\\
\xrightarrow
{E}
\begin{bmatrix}
  1&  5&  7& 9\\
  0&  1&  \frac{1}{4} & \frac{7}{4} \\
  0&  0&  0& 0
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{Red}1 } &  0&  \frac{23}{4}& \frac{1}{4}\\
  0&  {\color{Red}1 }&  \frac{1}{4} & \frac{7}{4} \\
  0&  0&  0& 0
\end{bmatrix}
=R
\end{aligned}
$$
<!-- #endregion -->

:bulb: <span style="color: red">红色</span>标记是主元

2. 解释
矩阵 $A$ 的秩为 $r=2$

3. 解释
根据零空间矩阵为 $N=\begin{bmatrix}-F\\I\\\end{bmatrix}$ 可得

<!-- #region-->
$$
\begin{aligned}
N=
\begin{bmatrix}
  -\frac{23}{4} & -\frac{1}{4} \\
  -\frac{1}{4}& -\frac{7}{4} \\
  1&0 \\
  0&1
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

所以 $Ax=0$ 的特解是

<!-- #region-->
$$
\begin{aligned}
\begin{bmatrix}
  -\frac{23}{4} \\
  -\frac{1}{4}\\
  1\\
  0
\end{bmatrix}和
\begin{bmatrix}
  -\frac{1}{4} \\
  -\frac{7}{4} \\
  0 \\
  1
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

## 问题7.2
求矩阵 $A_{1}$ 和 $A_{2}$ 使得当矩阵 $B=\begin{bmatrix}1&1\\1&1\end{bmatrix}$ 时，$rank(A_{1}B)=1$ 和 $rank(A_{2}B)=0$

---

以矩阵与向量相乘的角度考虑，由于矩阵 $B$ 各元素都是 1，所以 $AB$ 得到的结果矩阵**各列都相同**：

<!-- #region-->
$$
\begin{aligned}
AB=
\begin{bmatrix}
  \vdots & \vdots \\
  col1 & col2 \\
  \vdots & \vdots \\
\end{bmatrix}
\begin{bmatrix}
  1 & 1 \\
  1 & 1
\end{bmatrix}=
\begin{bmatrix}
  \vdots & \vdots \\
  col1+col2 & col1+col2 \\
  \vdots & \vdots \\
\end{bmatrix}=
\begin{bmatrix}
  c_{1} & c_{1} \\
  c_{2} & c_{2} \\
  \vdots & \vdots \\
  c_{n} & c_{n}
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

当 $rank(A_{1}B)=1$ 时，表示主元只有一个（红色标注），**因此只要矩阵 $A$ 中各行都是（与第一行）线性相关**，这样（除了第一行）各行的元素在消元过程中都可以变换为 $\begin{bmatrix}0 & 0\end{bmatrix}$

<!-- #region-->
$$
\begin{aligned}
\begin{bmatrix}
  {\color{RED}c_{1}} & c_{1} \\
  \alpha c_{1} & \alpha c_{1} \\
  \vdots & \vdots \\
  \mu c_{1} & \mu c_{1}
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{RED}c_{1}} & c_{1} \\
  0 & 0 \\
  \vdots & \vdots \\
  0 & 0
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

<!-- #region-->
$$
\begin{aligned}
A_{1}=
\begin{bmatrix}
  a_{11} & a_{12} \\
  \alpha a_{1} & \alpha a_{1} \\
  \vdots & \vdots \\
  \mu a_{1} & \mu a_{1}
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

当 $rank(A_{2}B)=0$ 时，表示没有主元，即 $AB$ 的结果矩阵时零向量，因此需要矩阵 $A$ 中两列的对应元素是**互为相反数**

<!-- #region-->
$$
\begin{aligned}
A_{2}=
\begin{bmatrix}
  a_{1} & -a_{1} \\
  a_{2} & -a_{2} \\
  \vdots & \vdots \\
  a_{n} & -a_{n}
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

<!-- #region-->
$$
\begin{aligned}
A_{2}B=
\begin{bmatrix}
  a_{1} & -a_{1} \\
  a_{2} & -a_{2} \\
  \vdots & \vdots \\
  a_{n} & -a_{n}
\end{bmatrix}
\begin{bmatrix}
  1 & 1 \\
  1 & 1
\end{bmatrix}=
\begin{bmatrix}
  0 & 0 \\
  0 & 0 \\
  \vdots & \vdots \\
  0 & 0
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->