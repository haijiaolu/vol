---
name: "艾兹赫尔·戴克斯特拉-为什么应该从0开始计数"
title: "Why numbering should start at zero"
author: "Edsger Wybe Dijkstra"
titles:
  zh: "为什么应该从0开始计数"
authors:
  zh: "艾兹赫尔·戴克斯特拉"
date: "1982/08/11"
created: "2019-02-12 06:51:51"
updated: ""
draft: false
read: "1"
sources: "http://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html"
translates: ""
tags: "文章/科技"
---

[[toc]]

# Edsger Wybe Dijkstra

## Why numbering should start at zero

《为什么应该从0开始计数》

作者：艾兹赫尔·戴克斯特拉（或译迪杰斯特拉，Edsger Wybe Dijkstra,1930–2002）

文章来源：

- 原文：[EWD831](http://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html)
- 翻译：[知乎 - 黄兢成, 回答“为什么有些编程语言的数组要从零开始算？”](https://www.zhihu.com/question/24289367/answer/30932357)

### 正文

<!-- tabs:start -->

#### **English**

##### Why numbering should start at zero

To denote the subsequence of natural numbers 2,3,...,12 without the pernicious
three dots,four conventions are open to us

```
a)		2 ≤i <13
b)		1 <i ≤12
c)		2 ≤i ≤12
d)		1 <i <13
```

Are there reasons to prefer one convention to the other?Yes,there are.The
observation that conventions `a)`and `b)`have the advantage that the
difference between the bounds as mentioned equals the length of the
subsequence is valid.So is the observation that,as a consequence,in either
convention two subsequences are adjacent means that the upper bound of the one
equals the lower bound of the other.Valid as these observations are,they don't
enable us to choose between `a)`and `b)`;so let us start afresh.

There is a smallest natural number.Exclusion of the lower bound—as in `b)`and
`d)`—forces for a subsequence starting at the smallest natural number the
lower bound as mentioned into the realm of the unnatural numbers.That is ugly,
so for the lower bound we prefer the ≤as in `a)`and `c)`.Consider now the
subsequences starting at the smallest natural number:inclusion of the upper
bound would then force the latter to be unnatural by the time the sequence has
shrunk to the empty one.That is ugly,so for the upper bound we prefer < as in
`a)`and `d)`.We conclude that convention `a)`is to be preferred.

**Remark**

The programming language Mesa,developed at Xerox PARC,has special notations
for intervals of integers in all four conventions.Extensive experience with
Mesa has shown that the use of the other three conventions has been a constant
source of clumsiness and mistakes,and on account of that experience Mesa
programmers are now strongly advised not to use the latter three available
features.I mention this experimental evidence—for what it is worth—because
some people feel uncomfortable with conclusions that have not been confirmed
in practice.

**(End of Remark.)**

`***`

When dealing with a sequence of length N,the elements of which we wish to
distinguish by subscript,the next vexing question is what subscript value to
assign to its starting element.Adhering to convention `a)`yields,when starting
with subscript `1`,the subscript range `1 ≤i <N+1`;starting with `0`,however,
gives the nicer range `0 ≤i <N`.So let us let our ordinals start at zero:an
element's ordinal (subscript)equals the number of elements preceding it in the
sequence.And the moral of the story is that we had better regard—after all
those centuries!—zero as a most natural number.

**Remark**

Many programming languages have been designed without due attention to this
detail.In FORTRAN subscripts always start at 1;in ALGOL 60 and in PASCAL,
convention c)has been adopted;the more recent SASL has fallen back on the
FORTRAN convention:a sequence in SASL is at the same time a function on the
positive integers.Pity!

**(End of Remark.)**

`***`

The above has been triggered by a recent incident,when,in an emotional
outburst,one of my mathematical colleagues at the University—not a computing
scientist—accused a number of younger computing scientists of "pedantry"
because—as they do by habit—they started numbering at zero.He took
consciously adopting the most sensible convention as a provocation.(Also the
"End of ..."convention is viewed of as provocative;but the convention is
useful:I know of a student who almost failed at an examination by the tacit
assumption that the questions ended at the bottom of the first page.)I think
Antony Jay is right when he states:"In corporate religions as in others,the
heretic must be cast out not because of the probability that he is wrong but
because of the possibility that he is right."

|                                                      |     |                                                                            |
| ---------------------------------------------------- | --- | -------------------------------------------------------------------------- |
| Plataanstraat 5<br>5671 AL NUENEN<br>The Netherlands |     | 11 August 1982<br>prof.dr. Edsger W. Dijkstra<br>Burroughs Research Fellow |

`***`

Transcriber:Kevin Hely.
Last revised on Fri,2 May 2008.

#### **中文翻译**

##### 为什么应该从 0 开始计数

为什么应该从0开始计数为了表示出自然数的子序列，2,3,...,12，不使用省略记号那三个点号，我们可
以选择4种约定方式：

```
a)		2 ≤i <13
b)		1 <i ≤12
c)		2 ≤i ≤12
d)		1 <i <13
```

是否有什么理由，使选择其中一种约定比其它约定要好呢？是的，确实有理由。可以观察到，`a)`和
`b)`有个优点，上下边界的相减得到的差，正好等于子序列的长度。另外，作为推论，下面观察也成立：
在`a)`，`b)`中，假如两个子序列相邻的话，其中一个序列的上界，就等于另一个序列的下界。但上面
观察，并不能让我们从`a)`,`b)`两者中选出更好的一个。让我们重新开始分析。

一定存在最小的自然数。假如像`b)`和`d)`那样，子序列并不包括下界，那么当子序列从最小的自然数
开始算起的时候，会使得下界进入非自然数的区域。这就比较丑陋了。所以对于下界来说，我们更应该
采用≤，正如`a)`或`c)`那样。现在考虑，假如子序列包括上界，那么当子序列从最小的自然数开始算起，
并且序列为空的时候，上界也会进入非自然数的区域。这也是丑陋的。所以，对于上界，我们更应该采
用`<`,正如`a)`或`b)`那样。因此我们得出结论，约定`a)`是更好的选择。

**讨论：**
Mesa是由Xerox PARC(施乐帕克研究中心)开发出的编程语言，以上4种表示整数区间的方式，在Mesa中，
全部都有专门的记号。使用Mesa的大量经验指出，采用另外三种表示方式，会不断引出拙劣和错误的代
码。因此，现今有经验的Mesa程序员强烈建议，不要去使用后面三种特性，尽管它们也可以使用。不管
是真是假，我也提出这个实践证据，有些人在结论还没有被实践验证时，会感觉有所不安。
**（讨论结束）**

`***`

当处理长度为N的序列时，我们希望通过下标去区分它的元素，下一个值得分析的问题是，最开始的元素
应该给予什么样的下标值。我们依然采用`a)`的约定，当下标从`1`开始时，下标区间是`1 ≤i <N +
1`；而当从`0`开始时，可以得到一个更漂亮的区间`0 ≤i <N`。所以，让我们的序数从`0`开始：一个元
素的序数（下标），等于序列中，在它前面的元素个数。这个故事提醒我们，在经过这么多个世纪之后，
最好将`0`当成最自然的数字。

**讨论：**
很多编程语言对于计数的细节并没有足够的重视。在FORTRAN语言中，下标总是从1开始；而在PASCAL语
言中，采用了约定`c)`；距今更近的语言SASL,倒退到FORTRAN的方式：在SAL中，序列也是在正整数上
进行操作。
**（讨论结束）**

`***`

最近的一次意外事件，促使我作出以上分析。当时，我所在大学的一个数学同事，并非计算机学家，情
绪激动地指责一个年轻的计算机学家“迂腐”，因为计算机学家出于习惯而从0开始计数。我的数学同事
将一些出于理性考虑后而自觉采用的合理约定，视为挑衅。(就连“...结束”这种约定，也视为挑衅。“
...结束”这种约定是有用的：我就知道有个学生，他想当然地认为问题在第一页试卷中结束，而差点没
有通过考试。)我认为Antony Jay陈述得对：“在众人共同组成的宗教中，异教徒必须被驱逐出去，并
非因为他们可能是错的，而是因为他们可能是对的。”

<!-- tabs:end -->
