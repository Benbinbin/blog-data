---
collection: MIT 18.06SC Linear Algebra
collectionOrder: 6
tags:
  - linear-algebra
---

# L4-矩阵的A=LU分解
参考：
* Unit I: Ax = b and the Four Subspaces - [Factorization into A = LU](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/factorization-into-a-lu/) | [pdf](./attachments/MIT18_06SCF11_Ses1.4sum.pdf)
* 课本章节：Section *2.6* in the 4^th^ or 5^th^ edition

---
## A=LU 矩阵分解
以矩阵形式通过消元法求解方程组过程中，使用一系列初等矩阵 $E$ 将矩阵 $A_{m \times n}$ 变换为上三角矩阵 $U$，即 $A \Rightarrow E_{21}A \Rightarrow E_{31}E_{21}A \Rightarrow\dots\Rightarrow E_{m(n-1)}\dots E_{31}E_{21}A \Rightarrow U$。可以将消元矩阵整合为一个整体 $E$，即 $EA=U$

当消元矩阵与目标矩阵 $A$ 相乘时，实现消元，得到各行的主元形式；而对应的逆矩阵与上三角矩阵 $U$ 相乘时则是执行相反的操作，可以将上三角矩阵一步步「还原」为目标矩阵 $A$，即 $U \Rightarrow E^{-1}_{m(n-1)}U \Rightarrow \dots \Rightarrow E^{-1}_{21}E^{-1}_{31} \dots E^{-1}_{m(n-1)}U \Rightarrow A$。

如果将（逆序的）消元矩阵的逆矩阵的乘积整合为一个整体 $L$，即 $A=LU$

:bulb: 根据消元矩阵的作用和**可逆矩阵的作用（将变换「还原」），可以==直接根据消元矩阵 $E$ 一步写出其逆矩阵 $L$==**。

将矩阵 $A$ 分解为 $LU$ 形式，其中：

* $U$ 是上三角矩阵 upper triangular matrix
* $L$ 是（整合的）消元矩阵的逆矩阵 $E^{-1}$

已知目标矩阵 $A=\begin{bmatrix} 2 & 1 \\ 8 & 7 \end{bmatrix}$

则消元矩阵 $E_{21} = \begin{bmatrix} 1 & 0 \\ -4 & 1 \end{bmatrix}$ 与目标矩阵相乘得到上三角矩阵 $U$

<!-- #region-->
$$
\begin{aligned}
E_{21}A =
\begin{bmatrix}
  1 & 0 \\
  -4 & 1
\end{bmatrix}
\begin{bmatrix}
  2 & 1\\
  8 & 7
\end{bmatrix} =
\begin{bmatrix}
  2 & 1 \\
  0 & 3
\end{bmatrix} =
U
\end{aligned}
$$
<!-- #endregion -->

根据逆矩阵的「还原」作用，可以基于消元矩阵 $E_{21}=\begin{bmatrix}1&0\\-4&1\end{bmatrix}$ 直接写出其逆矩阵 $E^{-1}_{21}=\begin{bmatrix}1&0\\4&1\end{bmatrix}$

则逆矩阵 $E^{-1}_{21}$ 与上三角矩阵 $U$ 相乘可以还原回目标矩阵 $A$

<!-- #region-->
$$
\begin{aligned}
E^{-1}_{21} U =
\begin{bmatrix}
  1 & 0 \\
  4 & 1
\end{bmatrix}
\begin{bmatrix}
  2 & 1 \\
  0 & 3
\end{bmatrix}
& =
\begin{bmatrix}
  2 & 1 \\
  8 & 7
\end{bmatrix}
& = A
\end{aligned}
$$
<!-- #endregion -->

:bulb: 将一系列消元矩阵的逆矩阵（逆序）相乘整合的矩阵，==由于它的形式是**下三角矩阵 lower triangular matrix**，因此记作 $L$，它的**对角线上的元素都是 1**==

有时候为了统一（与下三角矩阵 $L$ 形式对应），**会将上三角矩阵 $U$ ==对角线上的主元「提出」，称作对角矩阵 $D$==，即分解为 $DU$ 形式**，这样就可以使得上三角矩阵 $U$ 的**对角线元素都为 1**。

对于示例 $U$ 分解为 $DU$ 形式

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
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

:bulb: **对角矩阵就像是一个「公因式」**，因为它对角线上的元素都是由原来上三角矩阵的各主元构成的，有点像「提取公因式」的存在，而其余元素都是 $0$

==因此**矩阵分解也可以写为 $A=LDU$**，其中 $L$ 是下三角矩阵，$D$ 是由主元构成的对角矩阵，$U$ 是上三角矩阵（对角线上的元素都为 1）。==

## EA=U vs A=LU
以矩阵形式通过消元法求解方程组过程中，可以得到一些列的初等矩阵，它们的整合（乘积）矩阵 $E$ 更复杂；而相反，消元矩阵的逆矩阵的整合（逆序乘积）**矩阵 $L$ 形式更简洁，可以由各个 $E^{-1}$ 直接写出**。

:bulb: <span style="color:red">假设消元过程中不存在换行/置换操作</span>

假设对于一个矩阵 $A_{3\times 3}$ 的消元矩阵分别如下

<!-- #region-->
$$
\begin{aligned}
E_{21} =
\begin{bmatrix}
  1 & 0 & 0 \\
  -2 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix},
E_{31} = I,
E_{32} =
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & -5 & 1
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

相应地，消元矩阵的逆矩阵分别如下

<!-- #region-->
$$
\begin{aligned}
E^{-1}_{21} =
\begin{bmatrix}
  1 & 0 & 0\\
  2 & 1 & 0\\
  0 & 0 & 1
\end{bmatrix},
E^{-1}_{31} = I,
E^{-1}_{32} =
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 5 & 1
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

整合得到

<!-- #region-->
$$
\begin{aligned}
E_{32} E_{31} E_{21} =
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & -5 &1
\end{bmatrix}
I
\begin{bmatrix}
  1 & 0 & 0 \\
  -2 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}
& =
\begin{bmatrix}
  1 & 0 & 0 \\
  -2 & 1 & 0 \\
  10 & -5 & 1
\end{bmatrix}
& = E
\end{aligned}
$$
<!-- #endregion -->

<!-- #region-->
$$
\begin{aligned}
E^{-1}_{21} E^{-1}_{31} E^{-1}_{32} =
\begin{bmatrix}
  1 & 0 & 0 \\
  2 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}
I
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 5 & 1
\end{bmatrix}
& =
\begin{bmatrix}
  1 & 0 & 0 \\
  2 & 1 & 0 \\
  0 & 5 & 1
\end{bmatrix}
& = L
\end{aligned}
$$
<!-- #endregion -->

比较 $E$ 和 $L$，可以看出整合的矩阵 $E$ 元素的值更复杂，特别是左下角的元素 10，而矩阵 $L$ 更简单，它的元素都是**直接将各消元矩阵（的逆矩阵）的元素写入而得到**的。

:bulb: 由于消元过程是从上往下（从第二行开始，到最后一行）进行的，在变换得到每一个主元时，越在目标矩阵下方的元素，需要消去的元的次数就越多（让元素的值为 0），进行的变换操作次数就越多，因此整合后的消元矩阵 $E$ 越往下的行的数值就越复杂，而第一行是最简单的 $\begin{bmatrix}1&  0&\dots  &0\end{bmatrix}$，由于第一行不需要消元即可得到第一个主元。

相反地，由于矩阵 $L$ 是消元矩阵的逆矩阵的**逆序相乘**：第一个逆矩阵的操作目的是从最后一行开始「还原」，最后将矩阵 $U$ 还原为目标矩阵 $A$。各消元矩阵的逆矩阵的逆序相乘整合得到的矩阵 $L$ 形式是相对更简单的，它是将各消元矩阵的逆矩阵各元素**直接写入**得到的，「不失真」地将消元步骤中各乘数/倍数整合在一起，**更直观地了解到各行如何进行变换**。

这就是为何需要将矩阵 $A$ 分解为 $LU$ 形式，==这种形式可以清晰地描述了从一个简单的矩阵 $U$，各行通过哪些变换 $L$ 而「还原」为目标矩阵 $A$==。

## 消元算法的时间复杂度
记以矩阵形式通过消元法求解方程组中，一次操作是指**乘法+减法**，即一行中的某个元素乘以一个倍数，然后与另一行相应元素做减法，这个过程算作「一次操作」。

则对于系数矩阵 $A_{n \times n}$ 变换为 $U$ 所需的步骤（假设原始的目标矩阵 $A$ 中每个元素都不为 0）：

1. 从原始的目标矩阵 $A$ 变换得到具有第一个主元的形式的矩阵，需要 $n \times n$ 次操作

   :bulb: 实际第一步需要 $100 \times 99$ 次操作，即 $n \times (n-1)$ 次操作，因为第一行的元素不需要进行操作

<!-- #region-->
$$
\begin{aligned}
A_{100 \times 100} \Rightarrow
\begin{bmatrix}
  a_{1,1} &a_{1,2} &\dots & a_{1,100}\\
  0 &a_{2,2} &\dots &a_{2,100}\\
  \vdots &\vdots &\vdots &\vdots\\
  0&a_{100,2} &\dots  &a_{100,100}
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->



2. 基于第一步的结果矩阵，再变换得到具有第二个主元的形式的矩阵，需要 $(n-1) \times (n-1)$ 次操作

   :bulb: 实际第一步需要 $99 \times 98$ 次操作，即 $(n-1) \times (n-2)$ 次操作，因为第一、二行元素和第一列的元素不需要进行操作

<!-- #region-->
$$
\begin{aligned}
A_{100 \times 100}\Rightarrow
\begin{bmatrix}
  a_{1,1} &a_{1,2} &\dots & a_{1,100}\\
  0 &a_{2,2} &\dots &a_{2,100}\\
  \vdots &\vdots &\vdots &\vdots\\
  0&a_{100,2} &\dots  &a_{100,100}
\end{bmatrix} \Rightarrow
\begin{bmatrix}
  a_{1,1} &a_{1,2} &a_{1,3} &\dots & a_{1,100}\\
  0 &a_{2,2} &a_{2,3} &\dots &a_{2,100}\\
  0 &0 &a_{3,3} &\dots &a_{2,100}\\
  \vdots &\vdots &\vdots &\vdots&\vdots\\
  0&0&a_{100,3} &\dots &a_{100,100}
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->



3. 依次类推，共需要的操作次数

<!-- #region-->
$$
\begin{aligned}
Step=n^{2}+(n-1)^{2}+ \dots +1^{2}=\sum_{i=1}^{n}i^{2}\approx \int_{0}^{n}x^{2}dx=\frac{1}{3}n^{3}
\end{aligned}
$$
<!-- #endregion -->

如果考虑增广矩阵 $\left [\begin{array}{c:c}\begin{matrix}A\end{matrix}&\begin{matrix}b\end{matrix}\end{array}\right ]$，结果向量 $b$ 需要操作次数是

:bulb: 加数依此表示矩阵从最后一行到第一行获得主元时，该行对应的结果向量的元素需要操作的（乘法+减法表示一次）次数

<!-- #region-->
$$
\begin{aligned}
step=n+(n-1)+\dots + 1=\frac{n(n-1)}{2}\approx n^{2}
\end{aligned}
$$
<!-- #endregion -->

由于 $n_{3}$ 比 $n^{2}$ 高阶，因此==消元算法的时间复杂度是 **O(n^3^)**==



## 置换矩阵

置换矩阵 permutaion matrix，记为 P，==该矩阵与目标矩阵相乘，实现对矩阵**两行互换**的功能==。

矩阵 $A_{3 \times 3}$ 的所有置换矩阵共有 6 种（包括单位矩阵 $I$），即 **$!3$ 阶乘**

* 单位矩阵 $I$ 不对行互换

<!-- #region-->
$$
\begin{aligned}
I=
\begin{bmatrix}
  1& 0& 0\\
  0& 1& 0\\
  0& 0& 1
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

* 进行一次行互换

    * $P_{1,2}$ 交换第一、第二行
    <!-- #region-->
    $$
    \begin{aligned}
    P_{1,2}=
    \begin{bmatrix}
        0&  1& 0\\
        1&  0& 0\\
        0&  0&1
    \end{bmatrix}
    \end{aligned}
    $$
    <!-- #endregion -->

    * $P_{1,3}$ 交换第一、第三行
    <!-- #region-->
    $$
    \begin{aligned}
    P_{1,3}=
    \begin{bmatrix}
        0&  0& 1\\
        0&  1& 0\\
        1&  0& 0
    \end{bmatrix}
    \end{aligned}
    $$
    <!-- #endregion -->

    * $P_{2,3}$ 交换第二、第三行
        <!-- #region-->
    $$
    \begin{aligned}
    P_{2,3}=
    \begin{bmatrix}
        1&  0& 0\\
        0&  0& 1\\
        0&  1& 0
    \end{bmatrix}
    \end{aligned}
    $$
    <!-- #endregion -->

    这些**置换矩阵的逆矩阵都是其自身**（根据逆矩阵的「还原」变换的作用来考虑，由于逆矩阵作用是「还原」变换，还原变换需要进行行交换，即另一种置换矩阵）

* 进行两次行交换

<!-- #region-->
$$
\begin{aligned}
P_{2,3,1}=
\begin{bmatrix}
    0&  1& 0\\
    0&  0& 1\\
    1&  0& 0
\end{bmatrix},
P_{3,1,2}=
\begin{bmatrix}
    0&  0& 1\\
    1&  0& 0\\
    0&  1& 0
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

由所有置换矩阵构成的矩阵群组具有的特点：

* 它们之间**相乘的结果矩阵依然在群组**中（由于置换矩阵的作用是换行，相乘后得到的依然是另一种置换矩阵）
* 它们的**逆矩阵依然在群组**中（由于逆矩阵作用是「还原」变换，还原变换需要进行行交换，即另一种置换矩阵），:bulb: 实际上，==置换矩阵的逆矩阵是其**转置** $P^{-1}=P^{T}$==

:bulb: 对于 $n \times n$ ==方阵共有 $A^{n}_{n}$ 种置换矩阵（包括单位矩阵 $I$），即 **$n!$ 阶乘**==。

