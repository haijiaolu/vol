---
name: "Seph Gentle-编程的3个部落"
title: "Seph Gentle-《编程的3个部落》（3 Tribes of Programming）"
author: "Seph Gentle"
titles:
  en: "3 Tribes of Programming"
  zh: "编程的3个部落"
date: "2007/05/03"
created: ""
updated: ""
draft: false
read: "1"
sources: "https://josephg.com/blog/3-tribes/"
tags: ["文章/科技"]
---


# Seph Gentle

## 3 Tribes of Programming / 编程的 3 个部落

### 正文

<!-- tabs:start -->

#### **English**

##### 3 tribes of programming

03 May 2017

There's an old joke that computer science is a lie, because its not really
about computers, and its not really a science.

Funny joke. Everyone laughs, then someone says "Yeah but it sort of is about
computers though, isn't it?". Feet shuffle awkwardly. Someone clears their throat
and before you know it you're talking about Category Theory and looking up the
history of the word algorithm.

Out in the wild, these arguments look like this:

> I think I agree, and am looking forward to hearing Joe's take on it
> `#deconstructconf pic.twitter.com/j7H2QWG0Tr`  
> — Andy Lindeman (@alindeman) [April 21, 2017](https://twitter.com/alindeman/status/855557506881396736)

> I'll happily renounce "programmer" in favor of "applied mathematician"
> or something, whatever it takes to avoid C
> https://t.co/DsIEo5x4uI  
> — Chris Martin 🐘🎺🍍 (@chris**martin) [April 21, 2017](https://twitter.com/chris**martin/status/855559372927381505)

The speaker was making the point that the whole modern stack in our computers
(Kernel,OS, browser,VM)is written in C +ASM. So you should know C and ASM.

Is that really important?Serious question, are programs foremost lists of
instructions, or expressions of logical ideas?

> `#deconstructconf pic.twitter.com/V2lGXwmaJM`  
> — Justin Falcone (@modernserf) April 21, 2017

Or maybe its neither, and programs are just things we make for other humans. A
message is fundamentally meaningless without an audience who reads it. Are
programs meaningless without reference to the outside world they interact in?

A friend bragged to me once about how he could prove that most programs were
correct and completely bug-free using Ada. I asked him if he could prove that
this function was correct:

```ada
fn sub(a, b) { return a + b }
```

He said "Of course, thats easy". So I asked how his prover would discover that
the function had the wrong name, and he got delightfully flustered.

###### Tribes

Programs, obviously, hold all of these properties. But I think there's
fundamentally 3 architypes of programmers, divided by which ideals we hold in
highest esteem:

- You are a poet and a mathematician. Programming is your poetry
- You are a hacker. You make hardware dance to your tune
- You are a maker. You build things for people to use

We self-select into communities of our peers based on these ideals. We use
coded language to express these ideals to our peers.

I think each group has its own conferences, and its own subreddits. Its own
programming languages, heroes and its own villains.

###### Programming as applied mathematics

The first camp views programming is fundamentally an expression of thought -a
kind of mathematical poetry which we can gift with life. The fact that we
execute them on von Neumann machines is an implementation detail.

With this mindset, these details are important:

- **Source code**: The source should read like poetry - dense, with very few lines of code needed to express an idea. Once understood, the terse program seems like a beautiful and obvious description of your program. It is more important that the source code is simple than the execution is simple or fast. High level languages are better than low level languages because they let you express your intent more clearly.
- **Execution**: How the program is executed by the computer is an implementation detail of the compiler. It is more important that the code is simple than the execution is fast.
- **Correctness**: A program is correct if it implements the spec exactly. The best programs use tools like Ada to formally prove correctness.
- **UI**: How the code interacts with humans is a separate consideration from its implementation. Beautiful code is more important than beautiful UI.

Examples:
[Rich Hickey](https://www.youtube.com/watch?v=f84n5oFoZBc),
[Brett Victor](https://vimeo.com/36579366)

These programmers are probably the least common, although that might be because
its hard to get a job working like this.
[Haskell](https://stackoverflow.blog/2017/02/07/what-programming-languages-weekends/?cb=1)
has the highest weekend/weekday usage ratio of all languages on stackoverflow.

Most (arguably all)of the modern advancements in programming languages come
from people in this camp. If you've used React to make a website, you should
know that the model of immutability and expressing your view as a pure
function from data to DOM came from functional programming. Actually, most
modern language features are invented by people who think of programming as
thought. Years (or decades)later, those features get copied into the more
popular languages and get treated as new ideas.

I have a friend who spent months loving J. He eventually wrote a little game in
J. He described his code as this perfect, beautiful crystal. Later he wanted to
make it multiplayer -but to do that he would have to deal with lag. And that
would require ripping apart some of the beautiful internal flow. He couldn't
stomach it, so instead he abandoned the project entirely.

That story is funny, but I'm a little jealous of my friend. I bet he learned a
heap and had a great time. Experiences like that make us better programmers.

I did a Haskell short course late last year and I challenged the main
instructor. I told him "this is all well and good, but I bet I can still make
useful software using my practical languages faster than you can". He said no
way -using Haskell he was convinced he could implement anything I could
implement, faster and better and with less code. We didn't test the claim -but I
still wonder -is he right?

**Favorite languages**:Haskell,Lisp,ML (Ocaml, etc),Closure,ADA

**Hangouts**:FP meetups,[Lambda the
ultimate](http://lambda-the-ultimate.org/),Strange Loop,
[Research](https://www.data61.csiro.au/).

And of course,[Steve Yegge making fun of this
tribe](http://steve-yegge.blogspot.com.au/2010/12/Haskell-researchers-announce-discovery.html)

###### Programming as hardware hacking

The second camp views programming as fundamentally tied to the machinery of
the computer. No program is run without a computer, therefore to program
effectively we must keep the computer in mind at all times -hardware and
software.

Elegance and beauty come not just from a simple code base, but by that codebase
using the hardware in an elegant and efficient manner.

Thus, elegance like this:

- **Source code**: The code should be clean, but clean code is less important than a clean execution. Low level languages are often better than high level languages because you can be more explicit about what the computer will do when it executes your code. (Thus you have more room to optimize).
- **Execution**: How the computer executes your code is paramount. Programming without thinking about execution is just begging for slow performance.
- **Correctness**: A program is correct if it runs the way you expect it to run, given normal parameters. Execution elegance is more important than correctness. And if a theoretical issue can't happen in practice due to how the machine works, its not a real bug. A program must be adequately fast to be considered correct.
- **UI**: How the code interacts with humans is a separate consideration from its implementation. Its ok to let the constraints of the hardware guide the user experience.

Example:
[Poul-Henning Kamp](http://queue.acm.org/detail.cfm?id=1814327),
[Michael Steil](http://www.pagetable.com/),
[The 8-Bit guy](https://www.youtube.com/watch?v=Tfh0ytz8S0k)

The key here is thinking about the entirety of the computer and your running
program, together. According to this community, the best (only?)way to write good
software is to think holistically about how it will run, and how our program
will interact with the rest of the hardware and software. Doing that well
achieves [mechanical
sympathy](https://groups.google.com/forum/#!forum/mechanical-sympathy)and
everything runs like a well oiled clock. The joy is like that of driving a
manual car that you can hear and understand.

Anything that obfuscates how the computer will execute your program is
dangerous for the implementor -because it adds more variables to consider.
Thus, people in this camp often deride garbage collectors, or the churn from JS
performance benchmark results changing how we should write our code. Undefined
behaviour in C compilers is an [ongoing point of
contention](https://github.com/sandstorm-io/capnproto/blob/master/security-advisories/2017-04-17-0-apple-clang-elides-bounds-check.md).

In modern app development our computers are fast enough that this kind of
thinking isn't really important any more. A few decades ago you needed a deep
understanding of how the computer works to write software. But now basically
any language you use is fast enough, so why bother learning C?Most web
developers I know don't know any C, and have no interest in learning about
pointers or manual memory management.

But this sort of work is still hugely valuable in lots of areas. The game
development community still writes most code in C++(though unity is slowly
changing that). Security engineers need a systematic understanding to find
vulnerabilities. Embedded systems engineers can't afford to waste cycles and
RAM, and once backend systems get big enough performance starts mattering
again.

And even when its not practical, but being forced to think about the machine
can be really fun!For example, the
[PICO-8](https://www.lexaloffle.com/pico-8.php)imposes arbitrary 'hardware'
limits to force you to be clever when designing your games.

To this community we owe almost all performance improvements in our computers,
above and beyond what is demanded by customers. Nobody else cares about
performance quite like people who think about the hardware all day. But if
you're thinking about your computer as a machine, what greater ugliness can you
inflict than pointless work?

I'm really curious if Rust will take off amongst this community. Rust is
essentially a language designed by language nerds in the first camp above, for
people who care about runtime efficiency. Will they take to it?Will future game
engines be ported to rust?

Conflicts with the first group:

- Mutability (memory is fundamentally mutable / but it makes our programs harder to understand)
- GC (it makes your program slow and janky / but less buggy!)
- Abstraction (you're making your program harder / easier to reason about)

**Fav languages**:C,C++,Assembly.

**Hangouts**:Hackerspaces,Game dev shops, database companies,CCC,Defcon.

And here's Brett Victor [making fun of this
tribe](https://vimeo.com/71278954).

###### Programming as a tool to make things

The final group see programming as a means to a beautiful end, not something
made beautiful through its construction. The way people in this camp describe
themselves is fundamentally pragmatic. They write software because software is
useful to other people.

- **Source code**: The code should be clean, but only because cleaner code is easier to iterate on. Code cleanliness is less important than most other considerations.
- **Execution**: The program only has to be fast enough for the users. If you make it even faster, you're taking time away from adding features that people care about more.
- **Correctness**: Bugs are bad only in proportion to their impact. The program should act the way the users expect it to act.
- **UI**: The UI is more important than anything else. Every other part of the program only exists in service to the user interface.

I think most professional software engineers are in this tribe -which makes
sense, because this is the place where it is easiest to make money writing
software.

In my experience people in this camp are better at community. They seem to be
much more positive and encouraging of new members, and willing to help. I guess
its because you can tell if you're doing a good job in the other two camps by
simply taking a look yourself. If you make software for other humans,
satisfaction comes from making the people around you happy.

I can't help but feel that this place is a touch soulless. Taken to the
extreme, this world view doesn't value the beauty in the engineering itself.
Although you could probably make the opposite criticism against the other
groups -they don't value how their software can impact the world.

There's a lot of tension between this camp and the other two camps I've talked
about. And it can get a bit mean. I know many product people who feel self
conscious about their lack of knowledge of traditional data structures and
algorithms. They feel judged by "real"programmers because they can't implement
obscure algorithms and binary framing protocols. The way people in this tribe
see it, other people have already implemented all that stuff anyway. So who
cares?

Thats fair, but its also true that lots of issues are caused by the lack of
technical skill amongst frontend engineers. This is mostly self correcting -if
your program is too slow, you know about it and can fix it. But security
engineering is a real danger. If you don't know how to secure the software you
write against hackers,[its probably not
secure](https://www.troyhunt.com/reckon-youve-seen-some-stupid-security-things-here-hold-my-beer/?utm_source=hackernewsletter&utm_medium=email&utm_term=fav).
And you might not know its a problem even if you get hacked.

Here's an example of this conflict playing out on twitter:

> @jdan Well, then you're not a very good programmer.
> Sorry but that's how it is.  
> — Jonathan Blow (@Jonathan_Blow) [June 12, 2015](https://twitter.com/Jonathan_Blow/status/609156243370975232)

For context,Jonathan Blow (famous indie game developer)is saying that if you
can't reverse a binary tree you're not a good developer, even if you write
useful software every day.

Is he right?Well it depends on what 'good developer'means, and that depends on
which tribes you care about. I think Blow is in camp 2, so you're judged based
on how much you know.@jdan is in camp 3, so he's judged based on what he's
made. Jonathan Blow certainly writes useful software, but one of the reasons his
last game (The Witness)took so long to write was that he wrote his own engine
instead of using something off the shelf. When asked about it (emphasis mine):

> I don’t know very much about Unity. However, it’s clear that one could not
> build The Witness in Unity without rewriting a lot of Unity (or adding a lot
> of things that are not there, and declining to use most of what Unity
> provides). And we already had a simple graphics engine anyway. So **when
> building our own systems, we can ensure that they are really what the game
> needs to be its best.**

I suspect he's wrong about the first part. But I'm mostly in camp 2 myself, so I
understand wanting to write your own engine anyway. I probably would have done
the same thing.

**Fav languages**:Whatever gets the job done. JS,Ruby,Python,Swift,C#.

**Hangouts**:Twitter,SydJS,StackOverflow,A Company Near you!

And of course,Gary Bernhardt [making fun of this
camp](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript).

###### A quiet war

I think a lot of the conflicts and disagreements in our community can be
expressed in these terms. And a lot of the misunderstandings between
programmers.

For example, what should your programming language do when an integer
overflows?If you think of programming like mathematical poetry, above all else
it should give you the mathematically correct result.

Haskell (first camp):

```haskell
λ: 23^23
20880467999847912034355032910567 :: Num a => a
```

Vs C (second camp):

```c
printf("%llu\n", 1 << 100); // overflows. Prints 0.
```

And if you just want to ship a product, you don't care. In javascript (third
camp), there is no integer type at all. JS just uses floats for everything. And
if they overflow, tough luck.

Rust is trying to put one foot in each of the first two camps -be a language
made by programming language nerds but which compiles to efficient code. And
unsurprisingly, this problem generated a long argument in the rust community.
The final solution [was
this](http://huonw.github.io/blog/2016/04/myths-and-legends-about-integer-overflow-in-rust/),
where by default overflows cause panics to be thrown in debug mode, but
silently work in production mode.

Rob Pike (author of Go)was confused about which tribe his language is trying
to appeal to. He [wrote
this](http://commandcenter.blogspot.com.au/2012/06/less-is-exponentially-more.html)
a couple years after Go was released:

> I was asked a few weeks ago, "What was the biggest surprise you encountered
> rolling out Go?" I knew the answer instantly: Although we expected C++
> programmers to see Go as an alternative, instead most Go programmers come
> from languages like Python and Ruby. Very few come from C++.

Why?Well C++programmers are largely in camp 2 above. They want to know how
their code will run. But Go has a garbage collector, and a fast compiler. Really,
Go cares about getting out of your way so you can just make stuff. Its a
language for people in the last camp, who want to build products. What languages
do people who care about that currently use?Python,Ruby and Javascript. So of
course they're who Go is converting.

###### Closing

Next time you see an argument about whether Javascript is a cancer or a boon
to our industry, or you see someone like me getting angry about modern apps
being crap, ask yourself which camp is speaking. Are they championing beautiful
code?Performance and a "deep understanding"?Or do they just want to get work
done and ship product?

Ultimately code is code. Even though we have different reasons for writing
software, what we write is (usually)compatible. And even when its not (looking
at you,Haskell)-there's always a lot of ideas we can learn from and steal.

We all owe each other a lot, after all. Without language wonks we would still be
writing assembly. Without systems programmers we wouldn't have operating
systems, and Haskell and javascript would be unusably slow. And without product
engineers, everyone else would be forced to write CSS. And trust me, nobody wants
that.

Rear Admiral Grace Hopper managed to bridge machine understanding and product
thinking, and in doing so invented the idea of a machine-independant computer
language. Without being able to think both about what the computer can do and
what we want the computer to do, that wouldn't have been possible.

But personally I think we should aspire to be like Alan Kay and do all three.
Him and his team regularly crosses multiple tribal lines. As an example, he
invented object-oriented programming from watching children learn Squeak and
Logo. He thinks there's ways we can have our cake and eat it too -using modern
techniques to engineer much simpler systems that are faster, more elegant and
more useful for humans. If you haven't done it already, you should watch every
talk he's ever given. Do it slowly.

Thats certainly what I aim for. And hopefully I'll still be blowing people's
minds past the age of 70.

---

#### **中文翻译（机器翻译）**

##### 编程的 3 个部落

有一个老笑话说计算机科学是一个谎言，因为它并不是真正关于计算机的，也不是真正的科学。

有趣的笑话。每个人都笑了，然后有人说“是的，但这有点与计算机有关，不是吗？”。脚笨拙地拖着。
有人清了清嗓子，在您意识到之前，您正在谈论类别理论并查找算法一词的历史。

在野外，这些论点看起来像这样：

> 我想我同意，并且期待听到乔的看法
> `#deconstructconf pic.twitter.com/j7H2QWG0Tr.  
> — 安迪·林德曼 (@alindeman) 2017 年 4 月 21 日

演讲者指出，我们计算机中的整个现代堆栈（内核、操作系统、浏览器、VM）都是用C +ASM编写的。所
以你应该了解C和ASM。

这真的很重要吗？严重的问题是，程序首先是指令列表，还是逻辑思想的表达？

或者也许两者都不是，程序只是我们为其他人类制作的东西。如果没有受众阅读，一条消息从根本上来
说毫无意义。如果不参考它们交互的外部世界，程序就毫无意义吗？

有一次，一位朋友向我吹嘘他如何使用Ada证明大多数程序都是正确的并且完全没有错误。我问他能否证
明这个函数是正确的：

```ada
fn sub(a, b) { return a + b }
```

他说：“当然，那很容易”。所以我问他的证明者如何发现该函数的名称错误，他非常慌乱。

###### 部落

显然，程序拥有所有这些属性。但我认为程序员基本上有3种类型，按我们最推崇的理想来划分：

- 你是一位诗人和数学家。编程就是你的诗。
- 你是一名黑客。您可以让硬件按照您的节奏跳舞。
- 你是一个创造者。你建造东西供人们使用。

我们根据这些理想自我选择加入我们的同伴社区。我们使用编码语言向我们的同行表达这些理想。

我认为每个小组都有自己的会议和自己的Reddit子版块。它有自己的编程语言、英雄和恶棍。

###### 作为应用数学的编程

第一个阵营认为编程从根本上来说是一种思想的表达——一种我们可以赋予生命的数学诗歌。我们在冯
·诺依曼机器上执行它们的事实是一个实现细节。

有了这种心态，这些细节就很重要：

- **源代码**：源代码读起来应该像诗歌一样——密集，只需要很少的代码行就能表达一个想法。一旦理解了，简洁的程序看起来就像是对程序的美丽而明显的描述。源代码简单比执行简单或快速更重要。高级语言比低级语言更好，因为它们可以让你更清楚地表达你的意图。
- **执行**：计算机如何执行程序是编译器的实现细节。代码简单比执行速度快更重要。
- **正确性**：如果程序准确地实现了规范，那么它就是正确的。最好的程序使用 Ada 等工具来正式证明正确性。
- **UI**：代码如何与人类交互是与其实现分开考虑的。漂亮的代码比漂亮的 UI 更重要。

示例：Rich Hickey、Brett Victor

这些程序员可能是最不常见的，尽管这可能是因为很难找到这样的工作。在stackoverflow上，
Haskell的周末/工作日使用率是所有语言中最高的。

编程语言的大多数（可以说是全部）现代进步都来自这个阵营的人。如果您使用过React制作过网站，
您应该知道不变性模型以及将视图表达为从数据到DOM的纯函数都来自函数式编程。事实上，大多数现代
语言功能都是由那些将编程视为思想的人发明的。几年（或几十年）后，这些功能被复制到更流行的语
言中，并被视为新想法。

我有一个朋友花了几个月的时间爱J。他最终用J编写了一个小游戏。他将自己的代码描述为完美、美丽的
水晶。后来他想让它成为多人游戏-但要做到这一点，他就必须处理延迟问题。这需要破坏一些美丽的内
部流程。他无法忍受，所以完全放弃了这个项目。

那个故事很有趣，但我有点嫉妒我的朋友。我敢打赌他学到了很多并且玩得很开心。这样的经历使我们
成为更好的程序员。

去年年底我参加了Haskell短期课程，并向主教练提出了挑战。我告诉他“这一切都很好，但我打赌我
仍然可以用我的实用语言比你更快地制作有用的软件”。他说没办法——使用Haskell，他确信他可以实
现我能实现的任何东西，更快更好，并且用更少的代码。我们没有测试这个说法——但我仍然想知道——
他是对的吗？

**最喜欢的语言**：Haskell、Lisp、ML（Ocaml等）、Closure、ADA

**Hangouts**：FP聚会、终极Lambda、Strange Loop、研究。

当然，史蒂夫·耶吉（Steve Yegge）取笑这个部落

###### 编程就像硬件黑客一样

第二个阵营认为编程从根本上与计算机机制相关。没有计算机就无法运行任何程序，因此为了有效地编
程，我们必须始终牢记计算机-硬件和软件。

优雅和美丽不仅仅来自于简单的代码库，还来自于该代码库以优雅且高效的方式使用硬件。

因此，优雅是这样的：

- **源代码**：代码应该是干净的，但干净的代码不如干净的执行重要。低级语言通常比高级语言更好，因为您可以更明确地了解计算机在执行代码时将做什么。（因此您有更多的优化空间）。
- **执行**：计算机如何执行代码至关重要。不考虑执行的编程只会导致性能下降。
- **正确性**：如果程序在给定正常参数的情况下按照您期望的方式运行，则该程序是正确的。执行的优雅比正确性更重要。如果理论上的问题由于机器的工作原理而在实践中不会发生，那么它就不是真正的错误。程序必须足够快才能被认为是正确的。
- **UI**：代码如何与人类交互是与其实现分开考虑的。让硬件的限制来引导用户体验是可以的。

示例：Poul-Henning Kamp、Michael Steil、8位家伙

这里的关键是将整个计算机和您正在运行的程序一起考虑。根据该社区的说法，编写优秀软件的最佳（
唯一？）方法是全面思考它将如何运行，以及我们的程序如何与其余硬件和软件交互。如果做得好，就
会产生机械同情心，一切都会像上好油的时钟一样运转。这种乐趣就像驾驶手动挡汽车一样，您可以听
到并理解。

任何混淆计算机如何执行程序的事情对于实现者来说都是危险的-因为它增加了更多需要考虑的变量。因
此，这个阵营的人经常嘲笑垃圾收集器，或者JS性能基准测试结果的变化改变了我们应该如何编写代码。
C编译器中的未定义行为是一个持续争论的焦点。

在现代应用程序开发中，我们的计算机速度足够快，这种思维已经不再重要。几十年前，您需要深入了
解计算机如何工作才能编写软件。但现在基本上你使用的任何语言都足够快了，那为什么还要学习C呢？
我认识的大多数Web开发人员都不懂C，也没有兴趣学习指针或手动内存管理。

但这类工作在许多领域仍然具有巨大的价值。游戏开发社区仍然用C++编写大部分代码（尽管Unity正在
慢慢改变这一点）。安全工程师需要系统的了解才能发现漏洞。嵌入式系统工程师不能浪费周期和RAM，
一旦后端系统变得足够大，性能就开始再次变得重要。

即使它不实用，但被迫思考机器真的很有趣！例如，PICO-8强加任意“硬件”限制，迫使您在设计游戏
时变得聪明。

我们计算机的几乎所有性能改进都归功于这个社区，超出了客户的要求。没有人像整天考虑硬件的人那
样关心性能。但是，如果您将计算机视为一台机器，那么还有什么比无意义的工作更丑陋的呢？

我真的很好奇Rust是否会在这个社区中流行起来。Rust本质上是由上述第一阵营的语言迷设计的语言，
为关心运行时效率的人们设计。他们会接受吗？未来的游戏引擎会移植到Rust吗？

与第一组的冲突：

- 可变性（内存本质上是可变的/但它使我们的程序更难理解）
- GC（它使你的程序变得缓慢且卡顿/但错误更少！）
- 抽象（你让你的程序变得更难/更容易推理）

**最喜欢的语言**：C、C++、汇编。

**Hangouts**：Hackerspaces、游戏开发商店、数据库公司、CCC、Defcon。

布雷特·维克多(Brett Victor)正在取笑这个部落。

###### 编程作为创造事物的工具

最后一组将编程视为实现美好目标的一种手段，而不是通过其构建而变得美丽的东西。这个阵营的人描
述自己的方式基本上是务实的。他们编写软件是因为软件对其他人有用。

- **源代码**：代码应该是干净的，但这只是因为干净的代码更容易迭代。与大多数其他考虑因素相比，代码整洁性并不那么重要。
- **执行**：程序只需对用户来说足够快即可。如果你让它变得更快，你就会浪费时间来添加人们更关心的功能。
- **正确性**：错误的严重性与其影响程度成正比。程序应该按照用户期望的方式运行。
- **UI**：UI 比其他任何东西都重要。程序的所有其他部分仅为用户界面服务。

我认为大多数专业软件工程师都属于这个部落——这是有道理的，因为这是编写软件最容易赚钱的地方。

根据我的经验，这个营地的人更擅长社区。他们似乎对新成员更加积极和鼓励，并且愿意提供帮助。我
想这是因为你只需看看自己就可以知道你在其他两个阵营中是否做得很好。如果你为其他人开发软件，
那么满足感来自于让你周围的人快乐。

我不禁觉得这个地方有点没有灵魂。极端地说，这种世界观并不重视工程本身的美感。尽管您可能会对
其他群体提出相反的批评-他们并不重视他们的软件如何影响世界。

这个阵营和我谈到的其他两个阵营之间存在着很大的紧张关系。这可能会变得有点刻薄。我认识许多产
品人员，他们对自己缺乏传统数据结构和算法知识感到不自在。他们感觉受到了“真正的”程序员的评
判，因为他们无法实现晦涩的算法和二进制框架协议。在这个部落的人们看来，其他人已经实施了所有
这些东西。那么谁在乎呢？

这是公平的，但确实有很多问题是由于前端工程师缺乏技术技能造成的。这主要是自我纠正-如果你的程
序太慢，你知道它并可以修复它。但安全工程确实存在危险。如果您不知道如何保护您编写的软件免受
黑客攻击，那么它可能不安全。即使您被黑客攻击，您也可能不知道这是一个问题。

以下是推特上发生的冲突的一个例子：

> @jdan 好吧，那么你不是一个很好的程序员。抱歉，事情就是这样。  
> — 乔纳森·布洛 (@Jonathan_Blow) 2015 年 6 月 12 日

就上下文而言，乔纳森·布洛（著名独立游戏开发人员）表示，如果您不能反转二叉树，那么您就不是
一个优秀的开发人员，即使您每天都编写有用的软件。

他说得对吗？好吧，这取决于“优秀开发人员”的含义，而这取决于您关心哪些部落。我认为布洛属于
第二阵营，所以你的评判是根据你知道的程度。@jdan在第3营，所以他是根据他的作品来评判的。乔纳
森·布洛（Jonathan Blow）确实编写了有用的软件，但他的上一款游戏（《证人》）花了这么长时间
编写的原因之一是他编写了自己的引擎，而不是使用现成的引擎。当被问到时（强调我的）：

> 我对 Unity 不太了解。然而，很明显，如果不重写大量 Unity（或添加大量不存在的东西，并拒绝使用 Unity 提供的大部分内容），就无法在 Unity 中构建 The Witness。无论如何，我们已经有了一个简单的图形引擎。因此，在构建我们自己的系统时，我们可以确保它们确实是游戏所需的最佳系统。

我怀疑他对第一部分的理解是错误的。但我自己主要属于第二阵营，所以我理解无论如何都想编写自己
的引擎。我可能也会做同样的事情。

**最喜欢的语言**：无论什么语言都能完成工作。JS、Ruby、Python、Swift、C#。

**Hangouts**：Twitter、SydJS、StackOverflow、您附近的公司！

当然，加里·伯恩哈特还取笑这个营地。

###### 一场安静的战争

我认为我们社区中的很多冲突和分歧都可以用这些术语来表达。还有很多程序员之间的误解。

例如，当整数溢出时，您的编程语言应该做什么？如果您将编程视为数学诗歌，那么最重要的是它应该
为您提供数学上正确的结果。

Haskell（第一阵营）：

```haskell
λ: 23^23
20880467999847912034355032910567 :: Num a => a
```

对比C（第二阵营）：

```c
printf("%llu\n", 1 << 100); // overflows. Prints 0.
```

如果你只是想运送产品，那你就不在乎。在JavaScript（第三阵营）中，根本没有整数类型。JS只使用
浮动来处理所有事情。如果它们溢出了，那就倒霉了。

Rust正试图涉足前两个阵营——成为一种由编程语言书呆子创建的语言，但它可以编译成高效的代码。
不出所料，这个问题在Rust社区中引发了长期争论。最终的解决方案是这样的，默认情况下，溢出会导
致在调试模式下引发恐慌，但在生产模式下默默地工作。

Rob Pike（Go的作者）对于他的语言试图吸引哪个部落感到困惑。Go发布几年后，他写了这样的文章：

几周前我被问到，“你在推出Go时遇到的最大惊喜是什么？”我立刻就知道了答案：虽然我们希望C++
程序员将Go视为替代方案，但大多数Go程序员来自Python和Ruby等语言。很少有人来自C++。

为什么？C++程序员主要属于上面的第二阵营。他们想知道他们的代码将如何运行。但Go有一个垃圾收
集器和一个快速编译器。确实，Go关心的是不妨碍你，这样你就可以直接制作东西。它是为最后一个阵
营中想要构建产品的人提供的语言。关心这个问题的人目前使用什么语言？Python、Ruby和
JavaScript。所以他们当然是Go正在转变的对象。

###### 结束语

下次当你看到关于JavaScript是我们行业的癌症还是福音的争论时，或者你看到像我这样的人对现代
应用程序的垃圾感到愤怒时，问问自己哪个阵营在说话。他们拥护美丽的代码吗？表现和“深刻理解”？
或者他们只是想完成工作并交付产品？

最终代码就是代码。尽管我们编写软件的原因不同，但我们编写的内容（通常）是兼容的。即使它不是
（说的就是你，Haskell）-总是有很多想法我们可以学习和窃取。

毕竟，我们都亏欠彼此很多。如果没有语言专家，我们仍然会编写汇编语言。没有系统程序员，我们就
不会有操作系统，Haskell和JavaScript也会慢得无法使用。如果没有产品工程师，其他人都将被迫
编写CSS。相信我，没有人想要这样。

海军少将格蕾丝·霍珀成功地将机器理解和产品思维联系起来，并由此发明了独立于机器的计算机语言
的想法。如果不能同时考虑计算机可以做什么以及我们希望计算机做什么，这是不可能的。

但我个人认为我们应该立志像艾伦·凯一样，做到这三点。他和他的团队经常跨越多个部落界限。举个
例子，他通过观察孩子们学习Squeak和Logo发明了面向对象编程。他认为我们有办法鱼与熊掌兼得——
利用现代技术来设计更简单的系统，这些系统更快、更优雅、对人类更有用。如果您还没有这样做，您
应该观看他所做的每一次演讲。慢慢做。

这当然就是我的目标。希望我在70岁以后仍然能让人们大吃一惊。

<!-- tabs:end -->
