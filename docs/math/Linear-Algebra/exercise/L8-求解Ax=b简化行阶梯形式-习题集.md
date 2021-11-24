---
collection: MIT 18.06SC Linear Algebra Exercise
collectionOrder: 9
tags:
  - linear-algebra
---

# L8-求解Ax=b简化行阶梯形式-习题集
参考：

* Unit I: Ax = b and the Four Subspaces - Solving Ax = b: Row Reduced Form R - [Check Yourself](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/solving-ax-b-row-reduced-form-r/)
* 题源：[Problem: Exercises on solving Ax = b and row reduced form R](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/solving-ax-b-row-reduced-form-r/MIT18_06SCF11_Ses1.8prob.pdf) | [pdf](./attachments/MIT18_06SCF11_Ses1.8prob.pdf)
* 参考答案：[Solutions: Exercises on solving Ax = b and row reduced form R](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/solving-ax-b-row-reduced-form-r/MIT18_06SCF11_Ses1.8sol.pdf) | [pdf](./attachments/MIT18_06SCF11_Ses1.8sol.pdf)

## 问题8.1

解析以下命题的错误

1. 方程组 $Ax=b$ 的所有可能解的形式是 $x_{p}$ 和 $x_{n}$ 的线性组合
2. 方程组 $Ax=b$ 最多只有一个特解
3. 系数矩阵 $A$ 是可逆矩阵，在其组成的方程组 $Ax=0$ 的零空间中没有向量 $x_{n}$

---

1. 解释

   特解 $x_{p}$ 满足 $Ax_{p}=b$，其系数必须是 $1$。它和零空间的向量 $x_{n}$ 组成方程组的所有解的一般形式 $x_{p}+x_{n}$

2. 解释

   方程组有特解 $x_{p}$，结合零空间的向量 $x_{n}$ 所得的 $x_{p}+x_{n}$ 也是一个解

3. 解释

   对于方程组 $Ax=0$ 的零空间必存在 $x_{n}=0$



## 问题8.2

已知

<!-- #region-->
$$
\begin{aligned}
U =
\begin{bmatrix}
  1 & 2 & 3 \\
  0 & 0 & 4
\end{bmatrix},
c =
\begin{bmatrix}
  5 \\
  8
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

使用高斯-若尔当能 Gauss–Jordan 消元法将 $\begin{bmatrix} U & 0 \end{bmatrix}$  和 $\begin{bmatrix} U & c \end{bmatrix}$ 化简为 $\begin{bmatrix} R & 0 \end{bmatrix}$ 和 $\begin{bmatrix} R & c \end{bmatrix}$ 形式

并求解方程组 $Rx=0$ 和 $Rx=d$

最后通过将方程组的解回代到 $Ux=0$ 和 $Ux=c$ 进行验证

---
使用高斯-若尔当能 Gauss–Jordan 消元法求解方程组 $Ux=0$，其增广矩阵如下
<!-- #region-->
$$
\begin{aligned}
\begin{bmatrix}
  U & 0
\end{bmatrix}
& =
\begin{bmatrix}
  1 & 2 & 3 & 0 \\
  0 & 0 & 4 & 0
\end{bmatrix}
\xrightarrow{E}
\begin{bmatrix}
  {\color{Red}1 } & 2 & 0 & 0 \\
  0 & 0 & {\color{Red}1 } & 0
\end{bmatrix}
& =
\begin{bmatrix}
  R & 0
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

所以 $Rx=0$ 为

<!-- #region-->
$$
\begin{aligned}
\begin{bmatrix}
  {\color{Red}1 } & 2 & 0 \\
  0 & 0 & {\color{Red}1 }
\end{bmatrix}
\begin{bmatrix}
  x_{1} \\
  x_{2} \\
  x_{3}
\end{bmatrix}
& =
\begin{bmatrix}
  0 \\
  0
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

得到方程组

<!-- #region-->
$$
\begin{aligned}
\left\{\begin{matrix}
  x_{1} + 2x_{2} =0\\
  x_{3}=0
\end{matrix}\right.
\end{aligned}
$$
<!-- #endregion -->

自由变量 $x_{2}$ 取为 $1$

则方程组 $Rx=0$ 的其中一个特解为（零空间的维度是 1，只需要一个特解即可张成零空间）

<!-- #region-->
$$
\begin{aligned}
\left\{\begin{matrix}
  x_{1} = -2 \\
  x_{2} = 1 \\
  x_{3} = 0
\end{matrix}\right.
\end{aligned}
$$
<!-- #endregion -->

将该解带入原方程组 $Ux=0$ 进行验证

<!-- #region-->
$$
\begin{aligned}
Ux =
\begin{bmatrix}
  1 & 2 & 3 \\
  0 & 0 & 4
\end{bmatrix}
\begin{bmatrix}
  -2 \\
  1 \\
  0
\end{bmatrix}
& =
\begin{bmatrix}
  0 \\
  0
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

---

使用高斯-若尔当能 Gauss–Jordan 消元法求解方程组 $Ux=c$，其增广矩阵如下
<!-- #region-->
$$
\begin{aligned}
\begin{bmatrix}
  U & 0
\end{bmatrix}
& =
\begin{bmatrix}
  1 & 2 & 3 & 5 \\
  0 & 0 & 4 & 8
\end{bmatrix}
\xrightarrow{E}
\begin{bmatrix}
  {\color{Red}1 } & 2 & 3 & 5 \\
  0 & 0 & {\color{Red}1 } & 2
\end{bmatrix}
\xrightarrow{E}
\begin{bmatrix}
  {\color{Red}1 } & 2 & 0 & -1 \\
  0 & 0 & {\color{Red}1 } & 2
\end{bmatrix}
& =
\begin{bmatrix}
  R & d
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

所以 $Rx=d$ 为

<!-- #region-->
$$
\begin{aligned}
\begin{bmatrix}
  {\color{Red}1 } & 2 & 0 \\
  0 & 0 & {\color{Red}1 }
\end{bmatrix}
\begin{bmatrix}
  x_{1} \\
  x_{2} \\
  x_{3}
\end{bmatrix}
& =
\begin{bmatrix}
  -1 \\
  2
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

得到方程组

<!-- #region-->
$$
\begin{aligned}
\left\{\begin{matrix}
  x_{1} + 2x_{2} = -1\\
  x_{3} = 2
\end{matrix}\right.
\end{aligned}
$$
<!-- #endregion -->

自由变量 $x_{2}$ 取为 $0$

则方程组 $Rx=d$ 的一个特解为（零空间的维度是 1，只需要一个特解即可张成零空间）

<!-- #region-->
$$
\begin{aligned}
\left\{\begin{matrix}
  x_{1} = -1 \\
  x_{2} = 0 \\
  x_{3} = 2
\end{matrix}\right.
\end{aligned}
$$
<!-- #endregion -->

将该解带入原方程组 $Ux=c$ 进行验证

<!-- #region-->
$$
\begin{aligned}
Ux =
\begin{bmatrix}
  1 & 2 & 3 \\
  0 & 0 & 4
\end{bmatrix}
\begin{bmatrix}
  -1 \\
  0 \\
  2
\end{bmatrix}
& =
\begin{bmatrix}
  5 \\
  8
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->



## 问题8.3

假设 $Ax=b$ 和 $Cx=b$ 对于每一个 $b$，都有（完全）相同的解，那 $A=C$ 成立吗？

---

解析：

假设对于所有（维度满足相乘需求的）向量 $y$ 与矩阵 $A$ 相乘 $Ay$ 时，令此时的 $b$ 满足 $Ay=b$（即反过来 $b$ 随 $y$ 而变，而不是基于 $b$ 的变化求解 $y$），则该向量 $y$ 就是方程组 $Ax=b$ 的解。根据题目的假设，此时的向量 $y$ 也是方程组 $Cx=b$ 的解，所以 $Cy=b=Ay$，且对于所有 $y$（和相应的 $b$）都满足，因此 $C=A$