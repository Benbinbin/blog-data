---
collection: MIT 18.06SC Linear Algebra Exercise
collectionOrder: 5
tags:
  - linear-algebra
---

# L4-矩阵的A=LU分解-习题集
参考：

* Unit I: Ax = b and the Four Subspaces - Factorization into A = LU - [Check Yourself](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/factorization-into-a-lu/)
* 题源：[Problem: Exercises on factorization into A = LU](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/factorization-into-a-lu/MIT18_06SCF11_Ses1.4prob.pdf) | [pdf](./attachments/MIT18_06SCF11_Ses1.4prob.pdf)
* 参考答案：[Solutions: Exercises on factorization into A = LU](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/factorization-into-a-lu/MIT18_06SCF11_Ses1.4sol.pdf) | [pdf](./attachments/MIT18_06SCF11_Ses1.4sol.pdf)

## 问题4.1
已知矩阵 $A=\begin{bmatrix}1&  3& 0\\2&  4& 0\\2&  0&1\end{bmatrix}$ 求解 $E$ 使得 $EA=U$，求解 $L$，即 $E^{-1}$，使得 $A=LU$

---

使用矩阵消元法将矩阵 $A$ 转换为 $U$ 形式

<!-- #region-->
$$
\begin{aligned}
A=
\begin{bmatrix}
  1&  3& 0\\
  2&  4& 0\\
  2&  0&1
\end{bmatrix}
\xrightarrow
[\begin{bmatrix}
  1&  0& 0\\
  -2&  1& 0\\
  0&  0&1
\end{bmatrix}]
{E_{21}}
\begin{bmatrix}
  1&  3& 0\\
  0&  -2& 0\\
  2&  0&1
\end{bmatrix}
\xrightarrow
[\begin{bmatrix}
  1&  0& 0\\
  0&  1& 0\\
  -2&  0&1
\end{bmatrix}]
{E_{31}}\\
\begin{bmatrix}
  1&  3& 0\\
  0&  -2& 0\\
  0&  -6&1
\end{bmatrix}
\xrightarrow
[\begin{bmatrix}
  1&  0& 0\\
  0&  1& 0\\
  0& -3&1
\end{bmatrix}]
{E_{32}}
\begin{bmatrix}
  1&  3& 0\\
  0&  -2& 0\\
  0&  0& 1
\end{bmatrix}=
U
\end{aligned}
$$
<!-- #endregion -->

依次整合各个消元矩阵可得

<!-- #region-->
$$
\begin{aligned}
E&=E_{32}E_{31}E_{21}\\
&=\begin{bmatrix}
  1&  0& 0\\
  0&  1& 0\\
  0& -3&1
\end{bmatrix}
\begin{bmatrix}
  1&  0& 0\\
  0&  1& 0\\
  -2&  0&1
\end{bmatrix}
\begin{bmatrix}
  1&  0& 0\\
  -2&  1& 0\\
  0&  0&1
\end{bmatrix}\\
&=
\begin{bmatrix}
  1&  0& 0\\
  0&  1& 0\\
  -2&  -3&1
\end{bmatrix}
\begin{bmatrix}
  1&  0& 0\\
  -2&  1& 0\\
  0&  0&1
\end{bmatrix}\\
&=
\begin{bmatrix}
  1&  0& 0\\
  -2&  1& 0\\
  4&  -3&1
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

可以从矩阵 $E$ 基于 $EL=I$ 求出矩阵 $L$（使用高斯-若尔当能消元法 Gauss–Jordan 求解逆矩阵），也可以分别写出各个消元矩阵的逆矩阵，并将它们逆序相乘求出 $L$

<!-- #region-->
$$
\begin{aligned}
L&=E^{-1}_{21}E^{-1}_{31}E^{-1}_{32}\\
&=
\begin{bmatrix}
  1&  0& 0\\
  2&  1& 0\\
  0&  0&1
\end{bmatrix}
\begin{bmatrix}
  1&  0& 0\\
  0&  1& 0\\
  2&  0&1
\end{bmatrix}
\begin{bmatrix}
  1&  0& 0\\
  0&  1& 0\\
  0&  3&1
\end{bmatrix}\\
&=
\begin{bmatrix}
  1&  0& 0\\
  2&  1& 0\\
  2&  3&1
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

:bulb: 也可以直接将各消元矩阵的**倍数**（不带正负号）写入 $3 \times 3$ 矩阵的相应的位置得到矩阵 $L$。

## 问题4.2
将对称矩阵 $A=\begin{bmatrix}a&  a&  a& a \\a&  b&  b& b\\a&  b&  c& c\\a&  b&  c& d\end{bmatrix}$ 分解为 $A=LU$ 形式，求出其中 $L$ 和 $U$；并求出针对 $a$、$b$、$c$、$d$ 的 4 个条件，使得分解的矩阵（上三角矩阵 $U$）中具有四个主元。

---

<!-- #region-->
$$
\begin{aligned}
A=
\begin{bmatrix}
  a&  a&  a& a \\
  a&  b&  b& b\\
  a&  b&  c& c\\
  a&  b&  c& d
\end{bmatrix}
\xrightarrow
[\begin{bmatrix}
  1&  0&  0& 0\\
  -1&  1&  0& 0\\
  -1&  0&  1& 0\\
  -1&  0&  0& 1
\end{bmatrix}]
{E_{第一个主元}}
\begin{bmatrix}
  {\color{Red}a}&  a&  a& a \\
  0&  b-a&  b-a& b-a\\
  0&  b-a&  c-a& c-a\\
  0&  b-a&  c-a& d-a
\end{bmatrix}
\xrightarrow
[\begin{bmatrix}
  1&  0&  0& 0\\
  0&  1&  0& 0\\
  0&  -1&  1& 0\\
  0&  -1&  0& 1
\end{bmatrix}]
{E_{第二个主元}}\\
\begin{bmatrix}
  a&  a&  a& a \\
  0&  {\color{Red}b-a}&  b-a& b-a\\
  0&  0&  c-b& c-b\\
  0&  0&  c-b& d-b
\end{bmatrix}
\xrightarrow
[\begin{bmatrix}
  1&  0&  0& 0\\
  0&  1&  0& 0\\
  0&  0&  1& 0\\
  0&  0&  -1& 1
\end{bmatrix}]
{E_{第三个主元}}
\begin{bmatrix}
  a&  a&  a& a \\
  0&  b-a&  b-a& b-a\\
  0&  0&  {\color{Red}c-b}& c-b\\
  0&  0&  0& d-c
\end{bmatrix}=
U
\end{aligned}
$$
<!-- #endregion -->

将各消元矩阵的**倍数**写入 $4 \times 4$ 矩阵的相应位置得到矩阵 $L$

<!-- #region-->
$$
\begin{aligned}
L=
\begin{bmatrix}
  1&  0&  0& 0\\
  1&  1&  0& 0\\
  1&  1&  1& 0\\
  1&  1&  1&1
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

如果要上三角矩阵具有四个主元，需要让主元位置上的元素（红色标注）的值都为非零

<!-- #region-->
$$
\begin{aligned}
U=
\begin{bmatrix}
  {\color{Red}a}&  a&  a& a \\
  0&  {\color{Red}b-a}&  b-a& b-a\\
  0&  0&  {\color{Red}c-b}& c-b\\
  0&  0&  0& {\color{Red}d-c}
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

得到不等式组

<!-- #region-->
$$
\begin{aligned}
\left\{\begin{matrix}
  a \neq 0\\
  b-a \neq 0\\
  c-b \neq 0\\
  d-c \neq 0\\
\end{matrix}\right.
\end{aligned}
$$
<!-- #endregion -->

即

<!-- #region-->
$$
\begin{aligned}
\left\{\begin{matrix}
  a \neq 0\\
  b \neq a\\
  c \neq b\\
  d \neq c\\
\end{matrix}\right.
\end{aligned}
$$
<!-- #endregion -->