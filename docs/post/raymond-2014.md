---
name: "Eric Raymond-提问的智慧"
title: "How To Ask Questions The Smart Way"
author: "Eric Steven Raymond, Rick Moen"
titles:
  zh: "提问的智慧"
authors:
  zh: "埃里克·斯蒂芬·雷蒙德，瑞克·摩恩"
date: "2014"
created: ""
updated: ""
draft: false
read: "1"
sources: "http://www.catb.org/~esr/faqs/smart-questions.html"
translates:
  - "https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md"
  - "https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"
  - "https://github.com/tvvocold/How-To-Ask-Questions-The-Smart-Way"
tags: "文章/科技"
---

[[toc]]

# Eric Steven Raymond, Rick Moen / 埃里克·斯蒂芬·雷蒙德，瑞克·摩恩

## How To Ask Questions The Smart Way / 提问的智慧

### 正文

<!-- tabs:start -->

#### **原文**

**How To Ask Questions The Smart Way**

Eric Steven Raymond  
Rick Moen  
Copyright © 2001,2006,2014 Eric S. Raymond, Rick Moen

- Translations
- Disclaimer
- Introduction
- Before You Ask
- When You Ask
  - Choose your forum carefully
  - Stack Overflow
  - Web and IRC forums
  - As a second step, use project mailing lists
  - Use meaningful, specific subject headers
  - Make it easy to reply
  - Write in clear, grammatical, correctly-spelled language
  - Send questions in accessible, standard formats
  - Be precise and informative about your problem
  - Volume is not precision
  - Don't rush to claim that you have found a bug
  - Grovelling is not a substitute for doing your homework
  - Describe the problem's symptoms, not your guesses
  - Describe your problem's symptoms in chronological order
  - Describe the goal, not the step
  - Don't ask people to reply by private e-mail
  - Be explicit about your question
  - When asking about code
  - Don't post homework questions
  - Prune pointless queries
  - Don't flag your question as “Urgent”, even if it is for you
  - Courtesy never hurts, and sometimes helps
  - Follow up with a brief note on the solution
- How To Interpret Answers
  - RTFM and STFW: How To Tell You've Seriously Screwed Up
  - If you don't understand...
  - Dealing with rudeness
- On Not Reacting Like A Loser
- Questions Not To Ask
- Good and Bad Questions
- If You Can't Get An Answer
- How To Answer Questions in a Helpful Way
- Related Resources
- Acknowledgements

##### Translations

Translations:

- Brazilo-Portuguese
- Chinese (Traditional)
- Czech
- Dutch
- Estonian
- French
- Georgian
- German
- Greek
- Hindi
- Hungarian
- Indonesion
- Japanese
- Lithuanian
- Polish
- Portuguese
- Russian
- Spanish
- Ukrainian
- Uzbek

If you want to copy, mirror, translate, or excerpt this document, please see my copying policy.

##### Disclaimer

Many project websites link to this document in their sections on how to get help. That's fine, it's the use we intended — but if you are a webmaster creating such a link for your project page, please display prominently near the link notice that _we are not a help desk for your project_!

We have learned the hard way that without such a notice, we will repeatedly be pestered by idiots who think having published this document makes it our job to solve all the world's technical problems.

If you're reading this document because you need help, and you walk away with the impression you can get it directly from the authors of this document, you are one of the idiots we are talking about. Don't ask us questions. We'll just ignore you. We are here to show you how to get help from people who actually know about the software or hardware you're dealing with, but 99.9% of the time that will not be us. Unless you know for certain that one of the authors is an expert on what you're dealing with, leave us alone and everybody will be happier.

##### Introduction

In the world of hackers, the kind of answers you get to your technical questions depends as much on the way you ask the questions as on the difficulty of developing the answer. This guide will teach you how to ask questions in a way more likely to get you a satisfactory answer.

Now that use of open source has become widespread, you can often get as good answers from other, more experienced users as from hackers. This is a Good Thing; users tend to be just a little bit more tolerant of the kind of failures newbies often have. Still, treating experienced users like hackers in the ways we recommend here will generally be the most effective way to get useful answers out of them, too.

The first thing to understand is that hackers actually like hard problems and good, thought-provoking questions about them. If we didn't, we wouldn't be here. If you give us an interesting question to chew on we'll be grateful to you; good questions are a stimulus and a gift. Good questions help us develop our understanding, and often reveal problems we might not have noticed or thought about otherwise. Among hackers, “Good question!” is a strong and sincere compliment.

Despite this, hackers have a reputation for meeting simple questions with what looks like hostility or arrogance. It sometimes looks like we're reflexively rude to newbies and the ignorant. But this isn't really true.

What we are, unapologetically, is hostile to people who seem to be unwilling to think or to do their own homework before asking questions. People like that are time sinks — they take without giving back, and they waste time we could have spent on another question more interesting and another person more worthy of an answer. We call people like this “losers” (and for historical reasons we sometimes spell it “lusers”).

We realize that there are many people who just want to use the software we write, and who have no interest in learning technical details. For most people, a computer is merely a tool, a means to an end; they have more important things to do and lives to live. We acknowledge that, and don't expect everyone to take an interest in the technical matters that fascinate us. Nevertheless, our style of answering questions is tuned for people who do take such an interest and are willing to be active participants in problem-solving. That's not going to change. Nor should it; if it did, we would become less effective at the things we do best.

We're (largely) volunteers. We take time out of busy lives to answer questions, and at times we're overwhelmed with them. So we filter ruthlessly. In particular, we throw away questions from people who appear to be losers in order to spend our question-answering time more efficiently, on winners.

If you find this attitude obnoxious, condescending, or arrogant, check your assumptions. We're not asking you to genuflect to us — in fact, most of us would love nothing more than to deal with you as an equal and welcome you into our culture, if you put in the effort required to make that possible. But it's simply not efficient for us to try to help people who are not willing to help themselves. It's OK to be ignorant; it's not OK to play stupid.

So, while it isn't necessary to already be technically competent to get attention from us, it is necessary to demonstrate the kind of attitude that leads to competence — alert, thoughtful, observant, willing to be an active partner in developing a solution. If you can't live with this sort of discrimination, we suggest you pay somebody for a commercial support contract instead of asking hackers to personally donate help to you.

If you decide to come to us for help, you don't want to be one of the losers. You don't want to seem like one, either. The best way to get a rapid and responsive answer is to ask it like a person with smarts, confidence, and clues who just happens to need help on one particular problem.

(Improvements to this guide are welcome. You can mail suggestions to esr@thyrsus.com or respond-auto@linuxmafia.com. Note however that this document is not intended to be a general guide to netiquette, and we will generally reject suggestions that are not specifically related to eliciting useful answers in a technical forum.)

##### Before You Ask

Before asking a technical question by e-mail, or in a newsgroup, or on a website chat board, do the following:

1. Try to find an answer by searching the archives of the forum or mailing list you plan to post to.
2. Try to find an answer by searching the Web.
3. Try to find an answer by reading the manual.
4. Try to find an answer by reading a FAQ.
5. Try to find an answer by inspection or experimentation.
6. Try to find an answer by asking a skilled friend.
7. If you're a programmer, try to find an answer by reading the source code.

When you ask your question, display the fact that you have done these things first; this will help establish that you're not being a lazy sponge and wasting people's time. Better yet, display what you have learned from doing these things. We like answering questions for people who have demonstrated they can learn from the answers.

Use tactics like doing a Google search on the text of whatever error message you get (searching Google groups as well as Web pages). This might well take you straight to fix documentation or a mailing list thread answering your question. Even if it doesn't, saying “I googled on the following phrase but didn't get anything that looked promising” is a good thing to do in e-mail or news postings requesting help, if only because it records what searches won't help. It will also help to direct other people with similar problems to your thread by linking the search terms to what will hopefully be your problem and resolution thread.

Take your time. Do not expect to be able to solve a complicated problem with a few seconds of Googling. Read and understand the FAQs, sit back, relax and give the problem some thought before approaching experts. Trust us, they will be able to tell from your questions how much reading and thinking you did, and will be more willing to help if you come prepared. Don't instantly fire your whole arsenal of questions just because your first search turned up no answers (or too many).

Prepare your question. Think it through. Hasty-sounding questions get hasty answers, or none at all. The more you do to demonstrate that having put thought and effort into solving your problem before seeking help, the more likely you are to actually get help.

Beware of asking the wrong question. If you ask one that is based on faulty assumptions, J. Random Hacker is quite likely to reply with a uselessly literal answer while thinking “Stupid question...”, and hoping the experience of getting what you asked for rather than what you needed will teach you a lesson.

Never assume you are entitled to an answer. You are not; you aren't, after all, paying for the service. You will earn an answer, if you earn it, by asking a substantial, interesting, and thought-provoking question — one that implicitly contributes to the experience of the community rather than merely passively demanding knowledge from others.

On the other hand, making it clear that you are able and willing to help in the process of developing the solution is a very good start. “Would someone provide a pointer?”, “What is my example missing?”, and “What site should I have checked?” are more likely to get answered than “Please post the exact procedure I should use.” because you're making it clear that you're truly willing to complete the process if someone can just point you in the right direction.

##### When You Ask

###### Choose your forum carefully

Be sensitive in choosing where you ask your question. You are likely to be ignored, or written off as a loser, if you:

- post your question to a forum where it's off topic
- post a very elementary question to a forum where advanced technical questions are expected, or vice-versa
- cross-post to too many different newsgroups
- post a personal e-mail to somebody who is neither an acquaintance of yours nor personally responsible for solving your problem

Hackers blow off questions that are inappropriately targeted in order to try to protect their communications channels from being drowned in irrelevance. You don't want this to happen to you.

The first step, therefore, is to find the right forum. Again, Google and other Web-searching methods are your friend. Use them to find the project webpage most closely associated with the hardware or software giving you difficulties. Usually it will have links to a FAQ (Frequently Asked Questions) list, and to project mailing lists and their archives. These mailing lists are the final places to go for help, if your own efforts (including reading those FAQs you found) do not find you a solution. The project page may also describe a bug-reporting procedure, or have a link to one; if so, follow it.

Shooting off an e-mail to a person or forum which you are not familiar with is risky at best. For example, do not assume that the author of an informative webpage wants to be your free consultant. Do not make optimistic guesses about whether your question will be welcome — if you're unsure, send it elsewhere, or refrain from sending it at all.

When selecting a Web forum, newsgroup or mailing list, don't trust the name by itself too far; look for a FAQ or charter to verify your question is on-topic. Read some of the back traffic before posting so you'll get a feel for how things are done there. In fact, it's a very good idea to do a keyword search for words relating to your problem on the newsgroup or mailing list archives before you post. It may find you an answer, and if not it will help you formulate a better question.

Don't shotgun-blast all the available help channels at once, that's like yelling and irritates people. Step through them softly.

Know what your topic is! One of the classic mistakes is asking questions about the Unix or Windows programming interface in a forum devoted to a language or library or tool portable across both. If you don't understand why this is a blunder, you'd be best off not asking any questions at all until you get it.

In general, questions to a well-selected public forum are more likely to get useful answers than equivalent questions to a private one. There are multiple reasons for this. One is simply the size of the pool of potential respondents. Another is the size of the audience; hackers would rather answer questions that educate many people than questions serving only a few.

Understandably, skilled hackers and authors of popular software are already receiving more than their fair share of mis-targeted messages. By adding to the flood, you could in extreme cases even be the straw that breaks the camel's back — quite a few times, contributors to popular projects have withdrawn their support because collateral damage in the form of useless e-mail traffic to their personal accounts became unbearable.

###### Stack Overflow

Search, _then_ ask on Stack Exchange

In recent years, the Stack Exchange community of sites has emerged as a major resource for answering technical and other questions and is even the preferred forum for many open-source projects.

Start with a Google search before looking at Stack Exchange; Google indexes it in real time. There's a very good chance someone has already asked a similar question, and the Stack Exchange sites are often near the top of the search results. If you didn't find anything through Google, search again on the specific site most relevant to your question (see below). Searching with tags can help narrow down the results.

If you still didn't find anything, post your question on the one site where it's most on-topic. Use the formatting tools, especially for code, and add tags that are related to the substance of your question (particularly the name of the programming language, operating system, or library you're having trouble with). If a commenter asks you for more information, edit your main post to include it. If any answer is helpful, click the up arrow to upvote it; if an answer gives a solution to your problem, click the check under the voting arrows to accept it as correct.

Stack Exchange has grown to over 100 sites, but here are the most likely candidates:

- Super User is for questions about general-purpose computing. If your question isn't about code or programs that you talk to only over a network connection, it probably goes here.
- Stack Overflow is for questions about programming.
- Server Fault is for questions about server and network administration.

Several projects have their own specific sites, including Android, Ubuntu, TeX/LaTeX, and SharePoint. Check the Stack Exchange site for an up-to-date list.

###### Web and IRC forums

Your local user group, or your Linux distribution, may advertise a Web forum or IRC channel where newbies can get help. (In non-English-speaking countries newbie forums are still more likely to be mailing lists.) These are good first places to ask, especially if you think you may have tripped over a relatively simple or common problem. An advertised IRC channel is an open invitation to ask questions there and often get answers in real time.

In fact, if you got the program that is giving you problems from a Linux distribution (as is common today), it may be better to ask in the distro's forum/list before trying the program's project forum/list. The project's hackers may just say, “use our build”.

Before posting to any Web forum, check if it has a Search feature. If it does, try a couple of keyword searches for something like your problem; it just might help. If you did a general Web search before (as you should have), search the forum anyway; your Web-wide search engine might not have all of this forum indexed recently.

There is an increasing tendency for projects to do user support over a Web forum or IRC channel, with e-mail reserved more for development traffic. So look for those channels first when seeking project-specific help.

In IRC, it's probably best not to dump a long problem description on the channel first thing; some people interpret this as channel-flooding. Best to utter a one-line problem description in a way pitched to start a conversation on the channel.

###### As a second step, use project mailing lists

When a project has a development mailing list, write to the mailing list, not to individual developers, even if you believe you know who can best answer your question. Check the documentation of the project and its homepage for the address of a project mailing list, and use it. There are several good reasons for this policy:

- Any question good enough to be asked of one developer will also be of value to the whole group. Contrariwise, if you suspect your question is too dumb for a mailing list, it's not an excuse to harass individual developers.
- Asking questions on the list distributes load among developers. The individual developer (especially if he's the project leader) may be too busy to answer your questions.
- Most mailing lists are archived and the archives are indexed by search engines. If you ask your question on-list and it is answered, a future querent could find your question and the answer on the Web instead of asking it again.
- If certain questions are seen to be asked often, developers can use that information to improve the documentation or the software itself to be less confusing. But if those questions are asked in private, nobody has the complete picture of what questions are asked most often.

If a project has both a “user” and a “developer” (or “hacker”) mailing list or Web forum, and you are not hacking on the code, ask in the “user” list/forum. Do not assume that you will be welcome on the developer list, where they're likely to experience your question as noise disrupting their developer traffic.

However, if you are sure your question is non-trivial, and you get no answer in the “user” list/forum for several days, try the “developer” one. You would be well advised to lurk there for a few daysor at least review the last few days of archived messages, to learn the local folkways before posting (actually this is good advice on any private or semi-private list).

If you cannot find a project's mailing list address, but only see the address of the maintainer of the project, go ahead and write to the maintainer. But even in that case, don't assume that the mailing list doesn't exist. Mention in your e-mail that you tried and could not find the appropriate mailing list. Also mention that you don't object to having your message forwarded to other people. (Many people believe that private e-mail should remain private, even if there is nothing secret in it. By allowing your message to be forwarded you give your correspondent a choice about how to handle your e-mail.)

###### Use meaningful, specific subject headers

On mailing lists, newsgroups or Web forums, the subject header is your golden opportunity to attract qualified experts' attention in around 50 characters or fewer. Don't waste it on babble like “Please help me” (let alone “PLEASE HELP ME!!!!”; messages with subjects like that get discarded by reflex). Don't try to impress us with the depth of your anguish; use the space for a super-concise problem description instead.

One good convention for subject headers, used by many tech support organizations, is “object - deviation”. The “object” part specifies what thing or group of things is having a problem, and the “deviation” part describes the deviation from expected behavior.

> **Stupid:**  
> HELP! Video doesn't work properly on my laptop!

> **Smart:**  
> X.org 6.8.1 misshapen mouse cursor, Fooware MV1005 vid. chipset

> **Smarter:**  
> X.org 6.8.1 mouse cursor on Fooware MV1005 vid. chipset - is misshapen

The process of writing an “object-deviation” description will help you organize your thinking about the problem in more detail. What is affected? Just the mouse cursor or other graphics too? Is this specific to the X.org version of X? To version 6.8.1? Is this specific to Fooware video chipsets? To model MV1005? A hacker who sees the result can immediately understand what it is that you are having a problem with and the problem you are having, at a glance.

More generally, imagine looking at the index of an archive of questions, with just the subject lines showing. Make your subject line reflect your question well enough that the next person searching the archive with a question similar to yours will be able to follow the thread to an answer rather than posting the question again.

If you ask a question in a reply, be sure to change the subject line to indicate that you're asking a question. A Subject line that looks like “Re: test” or “Re: new bug” is less likely to attract useful amounts of attention. Also, pare quotation of previous messages to the minimum consistent with cluing in new readers.

Do not simply hit reply to a list message in order to start an entirely new thread. This will limit your audience. Some mail readers, like mutt, allow the user to sort by thread and then hide messages in a thread by folding the thread. Folks who do that will never see your message.

Changing the subject is not sufficient. Mutt, and probably other mail readers, looks at other information in the e-mail's headers to assign it to a thread, not the subject line. Instead start an entirely new e-mail.

On Web forums the rules of good practice are slightly different, because messages are usually much more tightly bound to specific discussion threads and often invisible outside those threads. Changing the subject when asking a question in reply is not essential. Not all forums even allow separate subject lines on replies, and nearly nobody reads them when they do. However, asking a question in a reply is a dubious practice in itself, because it will only be seen by those who are watching this thread. So, unless you are sure you want to ask only the people currently active in the thread, start a new one.

###### Make it easy to reply

Finishing your query with “Please send your reply to... ” makes it quite unlikely you will get an answer. If you can't be bothered to take even the few seconds required to set up a correct Reply-To header in your mail agent, we can't be bothered to take even a few seconds to think about your problem. If your mail program doesn't permit this, get a better mail program. If your operating system doesn't support any e-mail programs that permit this, get a better operating system.

In Web forums, asking for a reply by e-mail is outright rude, unless you believe the information may be sensitive (and somebody will, for some unknown reason, let you but not the whole forum know it). If you want an e-mail copy when somebody replies in the thread, request that the Web forum send it; this feature is supported almost everywhere under options like “watch this thread”, “send e-mail on answers”, etc.

###### Write in clear, grammatical, correctly-spelled language

We've found by experience that people who are careless and sloppy writers are usually also careless and sloppy at thinking and coding (often enough to bet on, anyway). Answering questions for careless and sloppy thinkers is not rewarding; we'd rather spend our time elsewhere.

So expressing your question clearly and well is important. If you can't be bothered to do that, we can't be bothered to pay attention. Spend the extra effort to polish your language. It doesn't have to be stiff or formal — in fact, hacker culture values informal, slangy and humorous language used with precision. But it has to be precise; there has to be some indication that you're thinking and paying attention.

Spell, punctuate, and capitalize correctly. Don't confuse “its” with “it's”, “loose” with “lose”, or “discrete” with “discreet”. Don't TYPE IN ALL CAPS; this is read as shouting and considered rude. (All-smalls is only slightly less annoying, as it's difficult to read. Alan Cox can get away with it, but you can't.)

More generally, if you write like a semi-literate boob you will very likely be ignored. So don't use instant-messaging shortcuts. Spelling "you" as "u" makes you look like a semi-literate boob to save two entire keystrokes. Worse: writing like a l33t script kiddie hax0r is the absolute kiss of death and guarantees you will receive nothing but stony silence (or, at best, a heaping helping of scorn and sarcasm) in return.

If you are asking questions in a forum that does not use your native language, you will get a limited amount of slack for spelling and grammar errors — but no extra slack at all for laziness (and yes, we can usually spot that difference). Also, unless you know what your respondent's languages are, write in English. Busy hackers tend to simply flush questions in languages they don't understand, and English is the working language of the Internet. By writing in English you minimize your chances that your question will be discarded unread.

If you are writing in English but it is a second language for you, it is good form to alert potential respondents to potential language difficulties and options for getting around them. Examples:

- English is not my native language; please excuse typing errors.
- If you speak $LANGUAGE, please email/PM me; I may need assistance translating my question.
- I am familiar with the technical terms, but some slang expressions and idioms are difficult for me.
- I've posted my question in $LANGUAGE and English. I'll be glad to translate responses, if you only use one or the other.

Send questions in accessible, standard formats

If you make your question artificially hard to read, it is more likely to be passed over in favor of one that isn't. So:

- Send plain text mail, not HTML. (It's not hard to turn off HTML.)
- MIME attachments are usually OK, but only if they are real content (such as an attached source file or patch), and not merely boilerplate generated by your mail client (such as another copy of your message).
- Don't send e-mail in which entire paragraphs are single multiply-wrapped lines. (This makes it too difficult to reply to just part of the message.) Assume that your respondents will be reading mail on 80-character-wide text displays and set your line wrap accordingly, to something less than 80.
- However, do not wrap data (such as log file dumps or session transcripts) at any fixed column width. Data should be included as-is, so respondents can have confidence that they are seeing what you saw.
- Don't send MIME Quoted-Printable encoding to an English-language forum. This encoding can be necessary when you're posting in a language ASCII doesn't cover, but many e-mail agents don't support it. When they break, all those =20 glyphs scattered through the text are ugly and distracting — or may actively sabotage the semantics of your text.
- Never, ever expect hackers to be able to read closed proprietary document formats like Microsoft Word or Excel. Most hackers react to these about as well as you would to having a pile of steaming pig manure dumped on your doorstep. Even when they can cope, they resent having to do so.
- If you're sending e-mail from a Windows machine, turn off Microsoft's problematic “Smart Quotes” feature (From Tools > AutoCorrect Options, clear the smart quotes checkbox under AutoFormat As You Type.). This is so you'll avoid sprinkling garbage characters through your mail.
- In Web forums, do not abuse “smiley” and “HTML” features (when they are present). A smiley or two is usually OK, but colored fancy text tends to make people think you are lame. Seriously overusing smileys and color and fonts will make you come off like a giggly teenage girl, which is not generally a good idea unless you are more interested in sex than answers.

If you're using a graphical-user-interface mail client such as Netscape Messenger, MS Outlook, or their ilk, beware that it may violate these rules when used with its default settings. Most such clients have a menu-based “View Source” command. Use this on something in your sent-mail folder, verifying sending of plain text without unnecessary attached crud.

###### Be precise and informative about your problem

- Describe the symptoms of your problem or bug carefully and clearly.
- Describe the environment in which it occurs (machine, OS, application, whatever). Provide your vendor's distribution and release level (e.g.: “Fedora Core 7”, “Slackware 9.1”, etc.).
- Describe the research you did to try and understand the problem before you asked the question.
- Describe the diagnostic steps you took to try and pin down the problem yourself before you asked the question.
- Describe any possibly relevant recent changes in your computer or software configuration.
- If at all possible, provide a way to reproduce the problem in a controlled environment.

Do the best you can to anticipate the questions a hacker will ask, and answer them in advance in your request for help.

Giving hackers the ability to reproduce the problem in a controlled environment is especially important if you are reporting something you think is a bug in code. When you do this, your odds of getting a useful answer and the speed with which you are likely to get that answer both improve tremendously.

Simon Tatham has written an excellent essay entitled How to Report Bugs Effectively. I strongly recommend that you read it.

###### Volume is not precision

You need to be precise and informative. This end is not served by simply dumping huge volumes of code or data into a help request. If you have a large, complicated test case that is breaking a program, try to trim it and make it as small as possible.

This is useful for at least three reasons. One: being seen to invest effort in simplifying the question makes it more likely you'll get an answer, Two: simplifying the question makes it more likely you'll get a useful answer. Three: In the process of refining your bug report, you may develop a fix or workaround yourself.

###### Don't rush to claim that you have found a bug

When you are having problems with a piece of software, don't claim you have found a bug unless you are very, very sure of your ground. Hint: unless you can provide a source-code patch that fixes the problem, or a regression test against a previous version that demonstrates incorrect behavior, you are probably not sure enough. This applies to webpages and documentation, too; if you have found a documentation “bug”, you should supply replacement text and which pages it should go on.

Remember, there are many other users that are not experiencing your problem. Otherwise you would have learned about it while reading the documentation and searching the Web (you did do that before complaining, didn't you?). This means that very probably it is you who are doing something wrong, not the software.

The people who wrote the software work very hard to make it work as well as possible. If you claim you have found a bug, you'll be impugning their competence, which may offend some of them even if you are correct. It's especially undiplomatic to yell “bug” in the Subject line.

When asking your question, it is best to write as though you assume you are doing something wrong, even if you are privately pretty sure you have found an actual bug. If there really is a bug, you will hear about it in the answer. Play it so the maintainers will want to apologize to you if the bug is real, rather than so that you will owe them an apology if you have messed up.

###### Grovelling is not a substitute for doing your homework

Some people who get that they shouldn't behave rudely or arrogantly, demanding an answer, retreat to the opposite extreme of grovelling. “I know I'm just a pathetic newbie loser, but...”. This is distracting and unhelpful. It's especially annoying when it's coupled with vagueness about the actual problem.

Don't waste your time, or ours, on crude primate politics. Instead, present the background facts and your question as clearly as you can. That is a better way to position yourself than by grovelling.

Sometimes Web forums have separate places for newbie questions. If you feel you do have a newbie question, just go there. But don't grovel there either.

###### Describe the problem's symptoms, not your guesses

It's not useful to tell hackers what you think is causing your problem. (If your diagnostic theories were such hot stuff, would you be consulting others for help?) So, make sure you're telling them the raw symptoms of what goes wrong, rather than your interpretations and theories. Let them do the interpretation and diagnosis. If you feel it's important to state your guess, clearly label it as such and describe why that answer isn't working for you.

> **Stupid:**  
> I'm getting back-to-back SIG11 errors on kernel compiles, and suspect a hairline crack on one of the motherboard traces. What's the best way to check for those?

> **Smart:**
> My home-built K6/233 on an FIC-PA2007 motherboard (VIA Apollo VP2 chipset) with 256MB Corsair PC133 SDRAM starts getting frequent SIG11 errors about 20 minutes after power-on during the course of kernel compiles, but never in the first 20 minutes. Rebooting doesn't restart the clock, but powering down overnight does. Swapping out all RAM didn't help. The relevant part of a typical compile session log follows.

Since the preceding point seems to be a tough one for many people to grasp, here's a phrase to remind you: "All diagnosticians are from Missouri." That US state's official motto is "Show me" (earned in 1899, when Congressman Willard D. Vandiver said "I come from a country that raises corn and cotton and cockleburs and Democrats, and frothy eloquence neither convinces nor satisfies me. I'm from Missouri. You've got to show me.") In diagnosticians' case, it's not a matter of skepticism, but rather a literal, functional need to see whatever is as close as possible to the same raw evidence that you see, rather than your surmises and summaries. Show us.

###### Describe your problem's symptoms in chronological order

The clues most useful in figuring out something that went wrong often lie in the events immediately prior. So, your account should describe precisely what you did, and what the machine and software did, leading up to the blowup. In the case of command-line processes, having a session log (e.g., using the script utility) and quoting the relevant twenty or so lines is very useful.

If the program that blew up on you has diagnostic options (such as -v for verbose), try to select options that will add useful debugging information to the transcript. Remember that more is not necessarily better; try to choose a debug level that will inform rather than drowning the reader in junk.

If your account ends up being long (more than about four paragraphs), it might be useful to succinctly state the problem up top, then follow with the chronological tale. That way, hackers will know what to watch for in reading your account.

###### Describe the goal, not the step

If you are trying to find out how to do something (as opposed to reporting a bug), begin by describing the goal. Only then describe the particular step towards it that you are blocked on.

Often, people who need technical help have a high-level goal in mind and get stuck on what they think is one particular path towards the goal. They come for help with the step, but don't realize that the path is wrong. It can take substantial effort to get past this.

> **Stupid:**  
> How do I get the color-picker on the FooDraw program to take a hexadecimal RGB value?

> **Smart:**  
> I'm trying to replace the color table on an image with values of my choosing. Right now the only way I can see to do this is by editing each table slot, but I can't get FooDraw's color picker to take a hexadecimal RGB value.

The second version of the question is smart. It allows an answer that suggests a tool better suited to the task.

###### Don't ask people to reply by private e-mail

Hackers believe solving problems should be a public, transparent process during which a first try at an answer can and should be corrected if someone more knowledgeable notices that it is incomplete or incorrect. Also, helpers get some of their reward for being respondents from being seen to be competent and knowledgeable by their peers.

When you ask for a private reply, you are disrupting both the process and the reward. Don't do this. It's the respondent's choice whether to reply privately — and if he or she does, it's usually because he or she thinks the question is too ill-formed or obvious to be interesting to others.

There is one limited exception to this rule. If you think the question is such that you are likely to get many answers that are all closely similar, then the magic words are “e-mail me and I'll summarize the answers for the group”. It is courteous to try and save the mailing list or newsgroup a flood of substantially identical postings — but you have to keep the promise to summarize.

###### Be explicit about your question

Open-ended questions tend to be perceived as open-ended time sinks. Those people most likely to be able to give you a useful answer are also the busiest people (if only because they take on the most work themselves). People like that are allergic to open-ended time sinks, thus they tend to be allergic to open-ended questions.

You are more likely to get a useful response if you are explicit about what you want respondents to do (provide pointers, send code, check your patch, whatever). This will focus their effort and implicitly put an upper bound on the time and energy a respondent must allocate to helping you. This is good.

To understand the world the experts live in, think of expertise as an abundant resource and time to respond as a scarce one. The less of a time commitment you implicitly ask for, the more likely you are to get an answer from someone really good and really busy.

So it is useful to frame your question to minimize the time commitment required for an expert to field it — but this is often not the same thing as simplifying the question. Thus, for example, “Would you give me a pointer to a good explanation of X?” is usually a smarter question than “Would you explain X, please?”. If you have some malfunctioning code, it is usually smarter to ask for someone to explain what's wrong with it than it is to ask someone to fix it.

###### When asking about code

Don't ask others to debug your broken code without giving a hint what sort of problem they should be searching for. Posting a few hundred lines of code, saying "it doesn't work", will get you ignored. Posting a dozen lines of code, saying "after line 7 I was expecting to see `<x>`, but `<y>` occurred instead" is much more likely to get you a response.

The most effective way to be precise about a code problem is to provide a minimal bug-demonstrating test case. What's a minimal test case? It's an illustration of the problem; just enough code to exhibit the undesirable behavior and no more. How do you make a minimal test case? If you know what line or section of code is producing the problematic behavior, make a copy of it and add just enough supporting code to produce a complete example (i.e. enough that the source is acceptable to the compiler/interpreter/whatever application processes it). If you can't narrow it down to a particular section, make a copy of the source and start removing chunks that don't affect the problematic behavior. The smaller your minimal test case is, the better (see the section called “Volume is not precision”).

Generating a really small minimal test case will not always be possible, but trying to is good discipline. It may help you learn what you need to solve the problem on your own — and even when it doesn't, hackers like to see that you have tried. It will make them more cooperative.

If you simply want a code review, say as much up front, and be sure to mention what areas you think might particularly need review and why.

###### Don't post homework questions

Hackers are good at spotting homework questions; most of us have done them ourselves. Those questions are for you to work out, so that you will learn from the experience. It is OK to ask for hints, but not for entire solutions.

If you suspect you have been passed a homework question, but can't solve it anyway, try asking in a user group forum or (as a last resort) in a “user” list/forum of a project. While the hackers will spot it, some of the advanced users may at least give you a hint.

###### Prune pointless queries

Resist the temptation to close your request for help with semantically-null questions like “Can anyone help me?” or “Is there an answer?” First: if you've written your problem description halfway competently, such tacked-on questions are at best superfluous. Second: because they are superfluous, hackers find them annoying — and are likely to return logically impeccable but dismissive answers like “Yes, you can be helped” and “No, there is no help for you.”

In general, asking yes-or-no questions is a good thing to avoid unless you want a yes-or-no answer.

###### Don't flag your question as “Urgent”, even if it is for you

That's your problem, not ours. Claiming urgency is very likely to be counter-productive: most hackers will simply delete such messages as rude and selfish attempts to elicit immediate and special attention. Furthermore, the word 'Urgent' (and other similar attempts to grab attention in the subject line) often triggers spam filters - your intended recipients might never see it at all!

There is one semi-exception. It can be worth mentioning if you're using the program in some high-profile place, one that the hackers will get excited about; in such a case, if you're under time pressure, and you say so politely, people may get interested enough to answer faster.

This is a very risky thing to do, however, because the hackers' metric for what is exciting probably differs from yours. Posting from the International Space Station would qualify, for example, but posting on behalf of a feel-good charitable or political cause would almost certainly not. In fact, posting “Urgent: Help me save the fuzzy baby seals!” will reliably get you shunned or flamed even by hackers who think fuzzy baby seals are important.

If you find this mysterious, re-read the rest of this how-to repeatedly until you understand it before posting anything at all.

###### Courtesy never hurts, and sometimes helps

Be courteous. Use “Please” and “Thanks for your attention” or “Thanks for your consideration”. Make it clear you appreciate the time people spend helping you for free.

To be honest, this isn't as important as (and cannot substitute for) being grammatical, clear, precise and descriptive, avoiding proprietary formats etc.; hackers in general would rather get somewhat brusque but technically sharp bug reports than polite vagueness. (If this puzzles you, remember that we value a question by what it teaches us.)

However, if you've got your technical ducks in a row, politeness does increase your chances of getting a useful answer.

(We must note that the only serious objection we've received from veteran hackers to this HOWTO is with respect to our previous recommendation to use “Thanks in advance”. Some hackers feel this connotes an intention not to thank anybody afterwards. Our recommendation is to either say “Thanks in advance” first and thank respondents afterwards, or express courtesy in a different way, such as by saying “Thanks for your attention” or “Thanks for your consideration”.)

###### Follow up with a brief note on the solution

Send a note after the problem has been solved to all who helped you; let them know how it came out and thank them again for their help. If the problem attracted general interest in a mailing list or newsgroup, it's appropriate to post the followup there.

Optimally, the reply should be to the thread started by the original question posting, and should have ‘FIXED’, ‘RESOLVED’ or an equally obvious tag in the subject line. On mailing lists with fast turnaround, a potential respondent who sees a thread about “Problem X” ending with “Problem X - FIXED” knows not to waste his/her time even reading the thread (unless (s)he personally finds Problem X interesting) and can therefore use that time solving a different problem.

Your followup doesn't have to be long and involved; a simple “Howdy — it was a failed network cable! Thanks, everyone. - Bill” would be better than nothing. In fact, a short and sweet summary is better than a long dissertation unless the solution has real technical depth. Say what action solved the problem, but you need not replay the whole troubleshooting sequence.

For problems with some depth, it is appropriate to post a summary of the troubleshooting history. Describe your final problem statement. Describe what worked as a solution, and indicate avoidable blind alleys after that. The blind alleys should come after the correct solution and other summary material, rather than turning the follow-up into a detective story. Name the names of people who helped you; you'll make friends that way.

Besides being courteous and informative, this sort of followup will help others searching the archive of the mailing-list/newsgroup/forum to know exactly which solution helped you and thus may also help them.

Last, and not least, this sort of followup helps everybody who assisted feel a satisfying sense of closure about the problem. If you are not a techie or hacker yourself, trust us that this feeling is very important to the gurus and experts you tapped for help. Problem narratives that trail off into unresolved nothingness are frustrating things; hackers itch to see them resolved. The goodwill that scratching that itch earns you will be very, very helpful to you next time you need to pose a question.

Consider how you might be able to prevent others from having the same problem in the future. Ask yourself if a documentation or FAQ patch would help, and if the answer is yes send that patch to the maintainer.

Among hackers, this sort of good followup behavior is actually more important than conventional politeness. It's how you get a reputation for playing well with others, which can be a very valuable asset.

##### How To Interpret Answers

###### RTFM and STFW: How To Tell You've Seriously Screwed Up

There is an ancient and hallowed tradition: if you get a reply that reads “RTFM”, the person who sent it thinks you should have Read The Fucking Manual. He or she is almost certainly right. Go read it.

RTFM has a younger relative. If you get a reply that reads “STFW”, the person who sent it thinks you should have Searched The Fucking Web. He or she is almost certainly right. Go search it. (The milder version of this is when you are told “Google is your friend!”)

In Web forums, you may also be told to search the forum archives. In fact, someone may even be so kind as to provide a pointer to the previous thread where this problem was solved. But do not rely on this consideration; do your archive-searching before asking.

Often, the person telling you to do a search has the manual or the web page with the information you need open, and is looking at it as he or she types. These replies mean that the responder thinks (a) the information you need is easy to find, and (b) you will learn more if you seek out the information than if you have it spoon-fed to you.

You shouldn't be offended by this; by hacker standards, your respondent is showing you a rough kind of respect simply by not ignoring you. You should instead be thankful for this grandmotherly kindness.

###### If you don't understand...

If you don't understand the answer, do not immediately bounce back a demand for clarification. Use the same tools that you used to try and answer your original question (manuals, FAQs, the Web, skilled friends) to understand the answer. Then, if you still need to ask for clarification, exhibit what you have learned.

For example, suppose I tell you: “It sounds like you've got a stuck zentry; you'll need to clear it.” Then: here's a bad followup question: “What's a zentry?” Here's a good followup question: “OK, I read the man page and zentries are only mentioned under the -z and -p switches. Neither of them says anything about clearing zentries. Is it one of these or am I missing something here?”

###### Dealing with rudeness

Much of what looks like rudeness in hacker circles is not intended to give offense. Rather, it's the product of the direct, cut-through-the-bullshit communications style that is natural to people who are more concerned about solving problems than making others feel warm and fuzzy.

When you perceive rudeness, try to react calmly. If someone is really acting out, it is very likely a senior person on the list or newsgroup or forum will call him or her on it. If that doesn't happen and you lose your temper, it is likely that the person you lose it at was behaving within the hacker community's norms and you will be considered at fault. This will hurt your chances of getting the information or help you want.

On the other hand, you will occasionally run across rudeness and posturing that is quite gratuitous. The flip-side of the above is that it is acceptable form to slam real offenders quite hard, dissecting their misbehavior with a sharp verbal scalpel. Be very, very sure of your ground before you try this, however. The line between correcting an incivility and starting a pointless flamewar is thin enough that hackers themselves not infrequently blunder across it; if you are a newbie or an outsider, your chances of avoiding such a blunder are low. If you're after information rather than entertainment, it's better to keep your fingers off the keyboard than to risk this.

(Some people assert that many hackers have a mild form of autism or Asperger's Syndrome, and are actually missing some of the brain circuitry that lubricates “normal” human social interaction. This may or may not be true. If you are not a hacker yourself, it may help you cope with our eccentricities if you think of us as being brain-damaged. Go right ahead. We won't care; we like being whatever it is we are, and generally have a healthy skepticism about clinical labels.)

Jeff Bigler's observations about tact filters are also relevant and worth reading.

In the next section, we'll talk about a different issue; the kind of “rudeness” you'll see when you misbehave.

##### On Not Reacting Like A Loser

Odds are you'll screw up a few times on hacker community forums — in ways detailed in this article, or similar. And you'll be told exactly how you screwed up, possibly with colourful asides. In public.

When this happens, the worst thing you can do is whine about the experience, claim to have been verbally assaulted, demand apologies, scream, hold your breath, threaten lawsuits, complain to people's employers, leave the toilet seat up, etc. Instead, here's what you do:

Get over it. It's normal. In fact, it's healthy and appropriate.

Community standards do not maintain themselves: They're maintained by people actively applying them, visibly, in public. Don't whine that all criticism should have been conveyed via private e-mail: That's not how it works. Nor is it useful to insist you've been personally insulted when someone comments that one of your claims was wrong, or that his views differ. Those are loser attitudes.

There have been hacker forums where, out of some misguided sense of hyper-courtesy, participants are banned from posting any fault-finding with another's posts, and told “Don't say anything if you're unwilling to help the user.” The resulting departure of clueful participants to elsewhere causes them to descend into meaningless babble and become useless as technical forums.

Exaggeratedly “friendly” (in that fashion) or useful: Pick one.

Remember: When that hacker tells you that you've screwed up, and (no matter how gruffly) tells you not to do it again, he's acting out of concern for (1) you and (2) his community. It would be much easier for him to ignore you and filter you out of his life. If you can't manage to be grateful, at least have a little dignity, don't whine, and don't expect to be treated like a fragile doll just because you're a newcomer with a theatrically hypersensitive soul and delusions of entitlement.

Sometimes people will attack you personally, flame without an apparent reason, etc., even if you don't screw up (or have only screwed up in their imagination). In this case, complaining is the way to really screw up.

These flamers are either lamers who don't have a clue but believe themselves to be experts, or would-be psychologists testing whether you'll screw up. The other readers either ignore them, or find ways to deal with them on their own. The flamers' behavior creates problems for themselves, which don't have to concern you.

Don't let yourself be drawn into a flamewar, either. Most flames are best ignored — after you've checked whether they are really flames, not pointers to the ways in which you have screwed up, and not cleverly ciphered answers to your real question (this happens as well).

##### Questions Not To Ask

Here are some classic stupid questions, and what hackers are thinking when they don't answer them.

- Q: Where can I find program or resource X?
- Q: How can I use X to do Y?
- Q: How can I configure my shell prompt?
- Q: Can I convert an AcmeCorp document into a TeX file using the Bass-o-matic file converter?
- Q: My {program, configuration, SQL statement} doesn't work
- Q: I'm having problems with my Windows machine. Can you help?
- Q: My program doesn't work. I think system facility X is broken.
- Q: I'm having problems installing Linux or X. Can you help?
- Q: How can I crack root/steal channel-ops privileges/read someone's e-mail?

**Q:** Where can I find program or resource X?

**A:** The same place I'd find it, fool — at the other end of a web search. Ghod, doesn't everybody know how to use Google yet?

**Q:** How can I use X to do Y?

**A:** If what you want is to do Y, you should ask that question without pre-supposing the use of a method that may not be appropriate. Questions of this form often indicate a person who is not merely ignorant about X, but confused about what problem Y they are solving and too fixated on the details of their particular situation. It is generally best to ignore such people until they define their problem better.

**Q:** How can I configure my shell prompt?

**A:** If you're smart enough to ask this question, you're smart enough to RTFM and find out yourself.

**Q:** Can I convert an AcmeCorp document into a TeX file using the Bass-o-matic file converter?

**A:** Try it and see. If you did that, you'd (a) learn the answer, and (b) stop wasting my time.

**Q:** My {program, configuration, SQL statement} doesn't work

**A:** This is not a question, and I'm not interested in playing Twenty Questions to pry your actual question out of you — I have better things to do. On seeing something like this, my reaction is normally of one of the following:

- do you have anything else to add to that?
- oh, that's too bad, I hope you get it fixed.
- and this has exactly what to do with me?

**Q:** I'm having problems with my Windows machine. Can you help?

**A:** Yes. Throw out that Microsoft trash and install an open-source operating system like Linux or BSD.

Note: you can ask questions related to Windows machines if they are about a program that does have an official Windows build, or interacts with Windows machines (i.e., Samba). Just don't be surprised by the reply that the problem is with Windows and not the program, because Windows is so broken in general that this is very often the case.

**Q:** My program doesn't work. I think system facility X is broken.

**A:** While it is possible that you are the first person to notice an obvious deficiency in system calls and libraries heavily used by hundreds or thousands of people, it is rather more likely that you are utterly clueless. Extraordinary claims require extraordinary evidence; when you make a claim like this one, you must back it up with clear and exhaustive documentation of the failure case.

**Q:** I'm having problems installing Linux or X. Can you help?

**A:** No. I'd need hands-on access to your machine to troubleshoot this. Go ask your local Linux user group for hands-on help. (You can find a list of user groups here.)

Note: questions about installing Linux may be appropriate if you're on a forum or mailing list about a particular distribution, and the problem is with that distro; or on local user groups forums. In this case, be sure to describe the exact details of the failure. But do careful searching first, with "linux" and all suspicious pieces of hardware.

**Q:** How can I crack root/steal channel-ops privileges/read someone's e-mail?

**A:** You're a lowlife for wanting to do such things and a moron for asking a hacker to help you.

##### Good and Bad Questions

Finally, I'm going to illustrate how to ask questions in a smart way by example; pairs of questions about the same problem, one asked in a stupid way and one in a smart way.

> **Stupid:** Where can I find out stuff about the Foonly Flurbamatic?

> > This question just begs for "STFW" as a reply.

> **Smart:** I used Google to try to find “Foonly Flurbamatic 2600” on the Web, but I got no useful hits. Can I get a pointer to programming information on this device?

> > This one has already STFWed, and sounds like there might be a real problem.

> **Stupid:** I can't get the code from project foo to compile. Why is it broken?

> > The querent assumes that somebody else screwed up. Arrogant git...

> **Smart:** The code from project foo doesn't compile under Nulix version 6.2. I've read the FAQ, but it doesn't have anything in it about Nulix-related problems. Here's a transcript of my compilation attempt; is it something I did?

> > The querent has specified the environment, read the FAQ, is showing the error, and is not assuming his problems are someone else's fault. This one might be worth some attention.

> **Stupid:** I'm having problems with my motherboard. Can anybody help?

> > J. Random Hacker's response to this is likely to be “Right. Do you need burping and diapering, too?” followed by a punch of the delete key.

> **Smart:** I tried X, Y, and Z on the S2464 motherboard. When that didn't work, I tried A, B, and C. Note the curious symptom when I tried C. Obviously the florbish is grommicking, but the results aren't what one might expect. What are the usual causes of grommicking on Athlon MP motherboards? Anybody got ideas for more tests I can run to pin down the problem?

> > This person, on the other hand, seems worthy of an answer. He/she has exhibited problem-solving intelligence rather than passively waiting for an answer to drop from on high.

In the last question, notice the subtle but important difference between demanding “Give me an answer” and “Please help me figure out what additional diagnostics I can run to achieve enlightenment.”

In fact, the form of that last question is closely based on a real incident that happened in August 2001 on the linux-kernel mailing list (lkml). I (Eric) was the one asking the question that time. I was seeing mysterious lockups on a Tyan S2462 motherboard. The list members supplied the critical information I needed to solve them.

By asking the question in the way I did, I gave people something to chew on; I made it easy and attractive for them to get involved. I demonstrated respect for my peers' ability and invited them to consult with me as a peer. I also demonstrated respect for the value of their time by telling them the blind alleys I had already run down.

Afterwards, when I thanked everyone and remarked how well the process had worked, an lkml member observed that he thought it had worked not because I'm a “name” on that list, but because I asked the question in the proper form.

Hackers are in some ways a very ruthless meritocracy; I'm certain he was right, and that if I had behaved like a sponge I would have been flamed or ignored no matter who I was. His suggestion that I write up the whole incident as instruction to others led directly to the composition of this guide.

##### If You Can't Get An Answer

If you can't get an answer, please don't take it personally that we don't feel we can help you. Sometimes the members of the asked group may simply not know the answer. No response is not the same as being ignored, though admittedly it's hard to spot the difference from outside.

In general, simply re-posting your question is a bad idea. This will be seen as pointlessly annoying. Have patience: the person with your answer may be in a different time-zone and asleep. Or it may be that your question wasn't well-formed to begin with.

There are other sources of help you can go to, often sources better adapted to a novice's needs.

There are many online and local user groups who are enthusiasts about the software, even though they may never have written any software themselves. These groups often form so that people can help each other and help new users.

There are also plenty of commercial companies you can contract with for help, both large and small. Don't be dismayed at the idea of having to pay for a bit of help! After all, if your car engine blows a head gasket, chances are you would take it to a repair shop and pay to get it fixed. Even if the software didn't cost you anything, you can't expect that support to always come for free.

For popular software like Linux, there are at least 10,000 users per developer. It's just not possible for one person to handle the support calls from over 10,000 users. Remember that even if you have to pay for support, you are still paying much less than if you had to buy the software as well (and support for closed-source software is usually more expensive and less competent than support for open-source software).

##### How To Answer Questions in a Helpful Way

Be gentle. Problem-related stress can make people seem rude or stupid even when they're not.

Reply to a first offender off-line. There is no need of public humiliation for someone who may have made an honest mistake. A real newbie may not know how to search archives or where the FAQ is stored or posted.

If you don't know for sure, say so! A wrong but authoritative-sounding answer is worse than none at all. Don't point anyone down a wrong path simply because it's fun to sound like an expert. Be humble and honest; set a good example for both the querent and your peers.

If you can't help, don't hinder. Don't make jokes about procedures that could trash the user's setup — the poor sap might interpret these as instructions.

Ask probing questions to elicit more details. If you're good at this, the querent will learn something — and so might you. Try to turn the bad question into a good one; remember we were all newbies once.

While muttering RTFM is sometimes justified when replying to someone who is just a lazy slob, a pointer to documentation (even if it's just a suggestion to google for a key phrase) is better.

If you're going to answer the question at all, give good value. Don't suggest kludgy workarounds when somebody is using the wrong tool or approach. Suggest good tools. Reframe the question.

Answer the actual question! If the querent has been so thorough as to do his or her research and has included in the query that X, Y, Z, A, B, and C have already been tried without good result, it is supremely unhelpful to respond with “Try A or B,” or with a link to something that only says, “Try X, Y, Z, A, B, or C.”.

Help your community learn from the question. When you field a good question, ask yourself “How would the relevant documentation or FAQ have to change so that nobody has to answer this again?” Then send a patch to the document maintainer.

If you did research to answer the question, demonstrate your skills rather than writing as though you pulled the answer out of your butt. Answering one good question is like feeding a hungry person one meal, but teaching them research skills by example is showing them how to grow food for a lifetime.

##### Related Resources

If you need instruction in the basics of how personal computers, Unix, and the Internet work, see The Unix and Internet Fundamentals HOWTO.

When you release software or write patches for software, try to follow the guidelines in the Software Release Practice HOWTO.

##### Acknowledgements

Evelyn Mitchell contributed some example stupid questions and inspired the “How To Give A Good Answer” section. Mikhail Ramendik contributed some particularly valuable suggestions for improvements.

---

#### **中文翻译**

**提问的智慧**

- 声明
- 简介
- 在提问之前
- 当你提问时
  - 慎选提问的论坛
  - Stack Overflow
  - 网站和 IRC 论坛
  - 第二步，使用项目邮件列表
  - 使用有意义且描述明确的标题
  - 使问题容易回复
  - 使用清晰、正确、精准且合乎语法的语句
  - 使用易于读取且标准的文件格式发送问题
  - 精确地描述问题并言之有物
  - 话不在多而在精
  - 别动辄声称找到 Bug
  - 低声下气不能代替你的功课
  - 描述问题症状而非你的猜测
  - 按发生时间先后列出问题症状
  - 描述目标而不是过程
  - 别要求使用私人电邮回复
  - 清楚明确的表达你的问题以及需求
  - 询问有关代码的问题时
  - 别把自己家庭作业的问题贴上来
  - 去掉无意义的提问句
  - 即使你很急也不要在标题写“紧急”
  - 礼多人不怪，而且有时还很有帮助
  - 问题解决后，加个简短的补充说明
- 如何解读答案
  - RTFM 和 STFW：如何知道你已完全搞砸了
  - 如果还是搞不懂
  - 处理无礼的回应
- 如何避免扮演失败者
- 不该问的问题
- 好问题与蠢问题
- 如果得不到回答
- 如何更好地回答问题
- 相关资源
- 鸣谢

##### 声明

许多项目在他们网站的帮助文档中链接了本指南。这很好，这正是我们想要的用途。但如果你是该项目管理员并试图创建指向本指南的超链接，请在超链接附近的显著位置注明：

**本指南不提供此项目的实际支持服务！**

我们已经深刻领教到缺少上述声明所带来的痛苦：我们将不停地被那些认为发布这本指南就意味着有责任解决世上所有技术问题的傻瓜苦苦纠缠。

如果你因寻求某些帮助而阅读本指南，并在离开时还觉得可以从本文作者这里得到直接帮助，那你就是我们之前说的那些傻瓜之一。别问我们问题，我们只会忽略你。我们在这本指南中想教你如何从那些真正懂得你所遇到的软件或硬件问题的人处取得协助，而 99% 的情况下那不会是我们。除非你确定本指南的作者之一刚好是你所遇到的问题领域的专家，否则请不要打扰我们，这样大家都会开心一点。

##### 简介

在`黑客`的世界里，当你拋出一个技术问题时，最终是否能得到有用的回答，往往取决于你所提问和追问的方式。本指南将教你如何正确地提问以获得你满意的答案。

现在开源（Open Source）软件已经相当盛行，您通常可以从其他更有经验的用户那里获得与黑客一样好的答案，这是件**好事**；和黑客相比，用户们往往对那些新手常遇到的问题更宽容一些。尽管如此，以我们在此推荐的方式对待这些有经验的用户通常也是从他们那里获得有用答案的最有效方式。

首先你应该明白，黑客们喜爱有挑战性的问题，或者能激发他们思维的好问题。如果我们并非如此，那我们也不会成为你想询问的对象。如果你给了我们一个值得反复咀嚼玩味的好问题，我们自会对你感激不尽。好问题是激励，是厚礼。好问题可以提高我们的理解力，而且通常会暴露我们以前从没意识到或者思考过的问题。对黑客而言，“好问题！”是诚挚的大力称赞。

尽管如此，黑客们有着蔑视或傲慢面对简单问题的坏名声，这有时让我们看起来对新手、无知者似乎较有敌意，但其实不是那样的。

我们不讳言我们对那些不愿思考、或者在发问前不做他们该做的事的人的蔑视。那些人是时间杀手 —— 他们只想索取，从不付出，消耗我们可用在更有趣的问题或更值得回答的人身上的时间。我们称这样的人为 `失败者（losers）`（由于历史原因，我们有时把它拼作 `lusers`）。

我们意识到许多人只是想使用我们写的软件，他们对学习技术细节没有兴趣。对大多数人而言，电脑只是种工具，是种达到目的的手段而已。他们有自己的生活并且有更要紧的事要做。我们认可这点，也从不指望每个人都对这些让我们着迷的技术问题感兴趣。尽管如此，我们只为那些真正有兴趣并愿意积极参与问题解决的人调整回答问题的风格。这点不会变，也不该变：否则，我们就是在最擅长的事情上降低效率。

我们（在很大程度上）是自愿的，从繁忙的生活中抽出时间来解答疑惑，而且时常被提问淹没。所以我们无情地滤掉一些话题，特别是拋弃那些看起来像失败者的家伙，以便更高效地利用时间来回答`胜利者`的问题。

如果你厌恶我们的态度，高高在上，或过于傲慢，不妨也设身处地想想。我们并没有要求你向我们屈服 —— 事实上，我们大多数人非常乐意与你平等地交流，只要你付出小小努力来满足基本要求，我们就会欢迎你加入我们的文化。但让我们帮助那些不愿意帮助自己的人是没有效率的。无知没有关系，但装白痴就是不行。

所以，你不必在技术上很在行才能吸引我们的注意，但你必须表现出能引导你变得在行的特质 —— 机敏、有想法、善于观察、乐于主动参与解决问题。如果你做不到这些使你与众不同的事情，我们建议你花点钱找家商业公司签个技术支持服务合同，而不是要求黑客个人无偿地帮助你。

如果你决定向我们求助，当然你也不希望被视为失败者，更不愿成为失败者中的一员。能立刻得到快速并有效答案的最好方法，就是像胜利者那样提问 —— 聪明、自信、有解决问题的思路，只是偶尔在特定的问题上需要获得一点帮助。

（欢迎对本指南提出改进意见。你可以把你的建议发送至 `esr@thyrsus.com` 或 `respond-auto@linuxmafia.com`。然而请注意，本文并非`网络礼节`的通用指南，而我们通常会拒绝无助于在技术论坛得到有用答案的建议）。

##### 在提问之前

在你准备要通过电子邮件、新闻群组或者聊天室提出技术问题前，请先做到以下事情：

1. 尝试在你准备提问的论坛的旧文章中搜索答案。
2. 尝试上网搜索以找到答案。
3. 尝试阅读手册以找到答案。
4. 尝试阅读常见问题文件（FAQ）以找到答案。
5. 尝试自己检查或试验以找到答案。
6. 向你身边的强者朋友打听以找到答案。
7. 如果你是程序开发者，请尝试阅读源代码以找到答案。

当你提出问题的时候，请先表明你已经做了上述的努力；这将有助于树立你并不是一个不劳而获且浪费别人的时间的提问者。如果你能一并表达在做了上述努力的过程中所**学到**的东西会更好，因为我们更乐于回答那些表现出能从答案中学习的人的问题。

运用某些策略，比如先用 Google 搜索你所遇到的各种错误信息（搜索`Google 论坛`和网页），这样很可能直接就找到了能解决问题的文件或邮件列表线索。即使没有结果，在邮件列表或新闻组寻求帮助时加上一句 `我在 Google 中搜过下列句子但没有找到什么有用的东西` 也是件好事，即使它只是表明了搜索引擎不能提供哪些帮助。这么做（加上搜索过的字串）也让遇到相似问题的其他人能被搜索引擎引导到你的提问来。

别着急，不要指望几秒钟的 Google 搜索就能解决一个复杂的问题。在向专家求助之前，再阅读一下常见问题文件（FAQ）、放轻松、坐得舒服一些，再花点时间思考一下这个问题。相信我们，他们能从你的提问看出你做了多少阅读与思考，如果你是有备而来，将更有可能得到解答。不要将所有问题一股脑拋出，只因你的第一次搜索没有找到答案（或者找到太多答案）。

准备好你的问题，再将问题仔细地思考过一遍，因为草率的发问只能得到草率的回答，或者根本得不到任何答案。越是能表现出在寻求帮助前你为解决问题所付出的努力，你越有可能得到实质性的帮助。

小心别问错了问题。如果你的问题基于错误的假设，某个普通黑客（J. Random Hacker）多半会一边在心里想着`蠢问题…`，一边用无意义的字面解释来答复你，希望着你会从问题的回答（而非你想得到的答案）中汲取教训。

绝不要自以为**够格**得到答案，你没有；你并没有。毕竟你没有为这种服务支付任何报酬。你将会是自己去**挣到**一个答案，靠提出有内涵的、有趣的、有思维激励作用的问题 —— 一个有潜力能贡献社区经验的问题，而不仅仅是被动地从他人处索取知识。

另一方面，表明你愿意在找答案的过程中做点什么是一个非常好的开端。`谁能给点提示？`、`我的这个例子里缺了什么？`以及`我应该检查什么地方`比`请把我需要的确切的过程贴出来`更容易得到答复。因为你表现出只要有人能指个正确方向，你就有完成它的能力和决心。

##### 当你提问时

###### 慎选提问的论坛

小心选择你要提问的场合。如果你做了下述的事情，你很可能被忽略掉或者被看作失败者：

- 在与主题不合的论坛上贴出你的问题。
- 在探讨进阶技术问题的论坛张贴非常初级的问题；反之亦然。
- 在太多的不同新闻群组上重复转贴同样的问题（cross-post）。
- 向既非熟人也没有义务解决你问题的人发送私人电邮。

黑客会剔除掉那些搞错场合的问题，以保护他们沟通的渠道不被无关的东西淹没。你不会想让这种事发生在自己身上的。

因此，第一步是找到对的论坛。再说一次，Google 和其它搜索引擎还是你的朋友，用它们来找到与你遭遇到困难的软硬件问题最相关的网站。通常那儿都有常见问题（FAQ）、邮件列表及相关说明文件的链接。如果你的努力（包括**阅读** FAQ）都没有结果，网站上也许还有报告 Bug（Bug-reporting）的流程或链接，如果是这样，链过去看看。

向陌生的人或论坛发送邮件最可能是风险最大的事情。举例来说，别假设一个提供丰富内容的网页的作者会想充当你的免费顾问。不要对你的问题是否会受到欢迎做太乐观的估计 —— 如果你不确定，那就向别处发送，或者压根别发。

在选择论坛、新闻群组或邮件列表时，别太相信它的名字，先看看 FAQ 或者许可书以弄清楚你的问题是否切题。发文前先翻翻已有的话题，这样可以让你感受一下那里的文化。事实上，事先在新闻组或邮件列表的历史记录中搜索与你问题相关的关键词是个极好的主意，也许这样就找到答案了。即使没有，也能帮助你归纳出更好的问题。

别像机关枪似的一次“扫射”所有的帮助渠道，这就像大喊大叫一样会使人不快。要一个一个地来。

搞清楚你的主题！最典型的错误之一是在某种致力于跨平台可移植的语言、套件或工具的论坛中提关于 Unix 或 Windows 操作系统程序界面的问题。如果你不明白为什么这是大错，最好在搞清楚这之间差异之前什么也别问。

一般来说，在仔细挑选的公共论坛中提问，会比在私有论坛中提同样的问题更容易得到有用的回答。有几个理由可以支持这点，一是看潜在的回复者有多少，二是看观众有多少。黑客较愿意回答那些能帮助到许多人的问题。

可以理解的是，老练的黑客和一些热门软件的作者正在接受过多的错发信息。就像那根最后压垮骆驼背的稻草一样，你的加入也有可能使情况走向极端 —— 已经好几次了，一些热门软件的作者由于涌入其私人邮箱的大量不堪忍受的无用邮件而不再提供支持。

###### Stack Overflow (Stack Exchange)

搜索，*然后*在 Stack Exchange 问。

近年来，Stack Exchange 社区已经成为回答技术及其他问题的主要渠道，尤其是那些开放源码的项目。

因为 Google 索引是即时的，在看 Stack Exchange 之前先在 Google 搜索。有很高的几率某人已经问了一个类似的问题，而且 Stack Exchange 网站们往往会是搜索结果中最前面几个。如果你在 Google 上没有找到任何答案，你再到特定相关主题的网站去找。用标签（Tag）搜索能让你更缩小你的搜索结果。

如果你还是找不到任何对你的问题有用的内容，请把你的问题发在与它最相关的网站上。提问的时候请善用格式化工具，尤其注意为代码添加格式，并且添加相关的标签（特别是编程语言、操作系统或库/包的名称）。当有人要求你提供更多相关信息时，请编辑你的贴子来补充它们（译注：而不是发一个回帖或回答）。如果你觉得一个答案对你有帮助，点击向上的箭头来为它投票；如果一个答案提供了问题的正确解决方案，点击投票按钮下方的对勾来将它标记为正解。

Stack Exchange 已经成长到超过一百个网站，以下是最常用的几个站：

- Super User 是问一些通用的电脑问题，如果你的问题跟代码或是写程序无关，只是一些网络连线之类的，请到这里。
- Stack Overflow 是问写程序有关的问题。
- Server Fault 是问服务器和网管相关的问题。

###### 网站和 IRC 论坛

本地的用户群组（user group），或者你所用的 Linux 发行版本也许正在宣传他们的网页论坛或 IRC 频道，并提供新手帮助（在一些非英语国家，新手论坛很可能还是邮件列表），这些都是开始提问的好地方，特别是当你觉得遇到的也许只是相对简单或者很普通的问题时。有广告赞助的 IRC 频道是公开欢迎提问的地方，通常可以即时得到回应。

事实上，如果程序出的问题只发生在特定 Linux 发行版提供的版本（这很常见），最好先去该发行版的论坛或邮件列表中提问，再到程序本身的论坛或邮件列表提问。（否则）该项目的黑客可能仅仅回复“使用**我们的**版本”。

在任何论坛发文以前，先确认一下有没有搜索功能。如果有，就试着搜索一下问题的几个关键词，也许这会有帮助。如果在此之前你已做过通用的网页搜索（你也该这样做），还是再搜索一下论坛，搜索引擎有可能没来得及索引此论坛的全部内容。

通过论坛或 IRC 频道来提供用户支持服务有增长的趋势，电子邮件则大多为项目开发者间的交流而保留。所以最好先在论坛或 IRC 中寻求与该项目相关的协助。

在使用 IRC 的时候，首先最好不要发布很长的问题描述，有些人称之为频道洪水。最好通过一句话的问题描述来开始聊天。

###### 第二步，使用项目邮件列表

当某个项目提供开发者邮件列表时，要向列表而不是其中的个别成员提问，即使你确信他能最好地回答你的问题。查一查项目的文件和首页，找到项目的邮件列表并使用它。有几个很好的理由支持我们采用这种办法：

- 任何好到需要向个别开发者提出的问题，也将对整个项目群组有益。反之，如果你认为自己的问题对整个项目群组来说太愚蠢，那这也不能成为骚扰个别开发者的理由。
- 向列表提问可以分散开发者的负担，个别开发者（尤其是项目领导人）也许太忙以至于没法回答你的问题。
- 大多数邮件列表都会被存档，那些被存档的内容将被搜索引擎索引。如果你向列表提问并得到解答，将来其他人可以通过网页搜索找到你的问题和答案，也就不用再次发问了。
- 如果某些问题经常被问到，开发者可以利用此信息来改进说明文件或软件本身，以使其更清楚。如果只是私下提问，就没有人能看到最常见问题的完整场景。

如果一个项目既有“用户”也有“开发者”（或“黑客”）邮件列表或论坛，而你又不会动到那些源代码，那么就向“用户”列表或论坛提问。不要假设自己会在开发者列表中受到欢迎，那些人多半会将你的提问视为干扰他们开发的噪音。

然而，如果你**确信**你的问题很特别，而且在“用户”列表或论坛中几天都没有回复，可以试试前往“开发者”列表或论坛发问。建议你在张贴前最好先暗地里观察几天以了解那里的行事方式（事实上这是参与任何私有或半私有列表的好主意）

如果你找不到一个项目的邮件列表，而只能查到项目维护者的电子邮件地址，尽管向他发信。即使是在这种情况下，也别假设（项目）邮件列表不存在。在你的电子邮件中，请陈述你已经试过但没有找到合适的邮件列表，也提及你不反对将自己的邮件转发给他人（许多人认为，即使没什么秘密，私人电子邮件也不应该被公开。通过允许将你的电子邮件转发他人，你给了相应人员处置你邮件的选择）。

###### 使用有意义且描述明确的标题

在邮件列表、新闻群组或论坛中，大约 50 字以内的标题是抓住资深专家注意力的好机会。别用喋喋不休的`帮帮忙`、`跪求`、`急`（更别说`救命啊！！！！`这样让人反感的话，用这种标题会被条件反射式地忽略）来浪费这个机会。不要妄想用你的痛苦程度来打动我们，而应该是在这点空间中使用极简单扼要的描述方式来提出问题。

一个好标题范例是`目标 —— 差异`式的描述，许多技术支持组织就是这样做的。在`目标`部分指出是哪一个或哪一组东西有问题，在`差异`部分则描述与期望的行为不一致的地方。

> 蠢问题：救命啊！我的笔记本电脑不能正常显示了！

> 聪明问题：X.org 6.8.1 的鼠标指针会变形，某牌显卡 MV1005 芯片组。

> 更聪明问题：X.org 6.8.1 的鼠标指针，在某牌显卡 MV1005 芯片组环境下 - 会变形。

编写`目标 —— 差异` 式描述的过程有助于你组织对问题的细致思考。是什么被影响了？ 仅仅是鼠标指针或者还有其它图形？只在 X.org 的 X 版中出现？或只是出现在 6.8.1 版中？ 是针对某牌显卡芯片组？或者只是其中的 MV1005 型号？ 一个黑客只需瞄一眼就能够立即明白你的环境**和**你遇到的问题。

总而言之，请想像一下你正在一个只显示标题的存档讨论串（Thread）索引中查寻。让你的标题更好地反映问题，可使下一个搜索类似问题的人能够关注这个讨论串，而不用再次提问相同的问题。

如果你想在回复中提出问题，记得要修改内容标题，以表明你是在问一个问题， 一个看起来像 `Re: 测试` 或者 `Re: 新 bug` 的标题很难引起足够重视。另外，在不影响连贯性之下，适当引用并删减前文的内容，能给新来的读者留下线索。

对于讨论串，不要直接点击回复来开始一个全新的讨论串，这将限制你的观众。因为有些邮件阅读程序，比如 mutt ，允许用户按讨论串排序并通过折叠讨论串来隐藏消息，这样做的人永远看不到你发的消息。

仅仅改变标题还不够。mutt 和其它一些邮件阅读程序还会检查邮件标题以外的其它信息，以便为其指定讨论串。所以宁可发一个全新的邮件。

在网页论坛上，好的提问方式稍有不同，因为讨论串与特定的信息紧密结合，并且通常在讨论串外就看不到里面的内容，故通过回复提问，而非改变标题是可接受的。不是所有论坛都允许在回复中出现分离的标题，而且这样做了基本上没有人会去看。不过，通过回复提问，这本身就是暧昧的做法，因为它们只会被正在查看该标题的人读到。所以，除非你**只想**在该讨论串当前活跃的人群中提问，不然还是另起炉灶比较好。

###### 使问题容易回复

以`请将你的回复发送到……`来结束你的问题多半会使你得不到回答。如果你觉得花几秒钟在邮件客户端设置一下回复地址都麻烦，我们也觉得花几秒钟思考你的问题更麻烦。如果你的邮件程序不支持这样做，换个好点的；如果是操作系统不支持这种邮件程序，也换个好点的。

在论坛，要求通过电子邮件回复是非常无礼的，除非你认为回复的信息可能比较敏感（有人会为了某些未知的原因，只让你而不是整个论坛知道答案）。如果你只是想在有人回复讨论串时得到电子邮件提醒，可以要求网页论坛发送给你。几乎所有论坛都支持诸如`追踪此讨论串`、`有回复时发送邮件提醒`等功能。

###### 使用清晰、正确、精准且合乎语法的语句

我们从经验中发现，粗心的提问者通常也会粗心地写程序与思考（我敢打包票）。回答粗心大意者的问题很不值得，我们宁愿把时间耗在别处。

正确的拼写、标点符号和大小写是很重要的。一般来说，如果你觉得这样做很麻烦，不想在乎这些，那我们也觉得麻烦，不想在乎你的提问。花点额外的精力斟酌一下字句，用不着太僵硬与正式 —— 事实上，黑客文化很看重能准确地使用非正式、俚语和幽默的语句。但它**必须很**准确，而且有迹象表明你是在思考和关注问题。

正确地拼写、使用标点和大小写，不要将`its`混淆为`it's`，`loose`搞成`lose`或者将`discrete`弄成`discreet`。不要**全部用大写**，这会被视为无礼的大声嚷嚷（全部小写也好不到哪去，因为不易阅读。Alan Cox（译注：Linux 二号开发者） 也许可以这样做，但你不行）。

更白话的说，如果你写得像是个半文盲（小白），那多半得不到理睬。也不要使用即时通信中的简写，如将`you`简化为`u`会使你看起来像一个为了少打几个键而省字的小白。更糟的是，如果像个小孩似地鬼画符那绝对是在找死，可以肯定没人会理你（或者最多是给你一大堆指责与挖苦）。

如果在使用非母语的论坛提问，你可以犯点拼写和语法上的小错，但决不能在思考上马虎（没错，我们通常能弄清两者的分别）。同时，除非你知道回复者使用的语言，否则请使用英语书写。繁忙的黑客一般会直接删除用他们看不懂的语言写的消息。在网络上英语是通用语言，用英语书写可以将你的问题在尚未被阅读就被直接删除的可能性降到最低。

如果英文是你的外语（Second language），提示潜在回复者你有潜在的语言困难是很好的：
（译注：以下附上原文以供使用）

> - English is not my native language; please excuse typing errors.
> - If you speak $LANGUAGE, please email/PM me;
> - I may need assistance translating my question.
> - I am familiar with the technical terms,
> - but some slang expressions and idioms are difficult for me.
> - I've posted my question in $LANGUAGE and English.
> - I'll be glad to translate responses, if you only use one or the other.

- 英文不是我的母语，请原谅我的错字或语法。
- 如果你说某语言，请向我发电邮/私信；
- 我需要有人协助我翻译我的问题。
- 我对技术名词很熟悉，但对于俗语或是特别用法不甚了解。
- 我把我的问题用某语言和英文写出来。
- 如果你只用其中的一种语言回答，我会乐意将回复翻译成为你使用的语言。

###### 使用易于读取且标准的文件格式发送问题

如果你人为地将问题搞得难以阅读，它多半会被忽略，人们更愿读易懂的问题，所以：

- 使用纯文字而不是 HTML（`关闭HTML`并不难）。
- 使用 MIME 附件通常是可以的，前提是真正有内容（譬如附带的源代码或 patch），而不仅仅是邮件程序生成的模板（譬如只是信件内容的拷贝）。
- 不要发送一段文字只是一行句子但自动换行后会变成多行的邮件（这使得回复部分内容非常困难）。设想你的读者是在 80 个字符宽的终端机上阅读邮件，最好设置你的换行分割点小于 80 字。
- 但是，对一些特殊的文件**不要**设置固定宽度（譬如日志文件拷贝或会话记录）。数据应该原样包含，让回复者有信心他们看到的是和你看到的一样的东西。
- 在英语论坛中，不要使用`Quoted-Printable` MIME 编码发送消息。这种编码对于张贴非 ASCII 语言可能是必须的，但很多邮件程序并不支持这种编码。当它们处理换行时，那些文本中四处散布的`=20`符号既难看也分散注意力，甚至有可能破坏内容的语意。
- 绝对，**永远**不要指望黑客们阅读使用封闭格式编写的文档，像微软公司的 Word 或 Excel 文件等。大多数黑客对此的反应就像有人将还在冒热气的猪粪倒在你家门口时你的反应一样。即便他们能够处理，他们也很厌恶这么做。
- 如果你从使用 Windows 的电脑发送电子邮件，关闭微软愚蠢的`智能引号`功能 （从【选项】 > 【校订】 > 【自动校正选项】，勾选掉`智能引号`单选框），以免在你的邮件中到处散布垃圾字符。
- 在论坛，勿滥用`表情符号`和`HTML`功能（当它们提供时）。一两个表情符号通常没有问题，但花哨的彩色文本倾向于使人认为你是个无能之辈。~~过滥地使用表情符号、色彩和字体会使你看来像个傻笑的小姑娘。这通常不是个好主意，除非你只是对性而不是对答案感兴趣~~。

如果你使用图形用户界面的邮件程序（如微软公司的 Outlook 或者其它类似的），注意它们的默认设置不一定满足这些要求。大多数这类程序有基于选单的`查看源代码`命令，用它来检查发送文件夹中的邮件，以确保发送的是纯文本文件同时没有一些奇怪的字符。

###### 精确地描述问题并言之有物

- 仔细、清楚地描述你的问题或 Bug 的症状。
- 描述问题发生的环境（机器配置、操作系统、应用程序、以及相关的信息），提供经销商的发行版和版本号（如：`Fedora Core 4`、`Slackware 9.1`等）。
- 描述在提问前你是怎样去研究和理解这个问题的。
- 描述在提问前为确定问题而采取的诊断步骤。
- 描述最近做过什么可能相关的硬件或软件变更。
- 尽可能地提供一个可以`重现这个问题的可控环境`的方法。

尽量去揣测一个黑客会怎样反问你，在你提问之前预先将黑客们可能提出的问题回答一遍。

以上几点中，当你报告的是你认为可能在代码中的问题时，给黑客一个可以重现你的问题的环境尤其重要。当你这么做时，你得到有效的回答的机会和速度都会大大的提升。

Simon Tatham 写过一篇名为`《如何有效的报告 Bug》`的出色文章。强力推荐你也读一读。

###### 话不在多而在精

你需要提供精确有内容的信息。这并不是要求你简单的把成堆的出错代码或者资料完全转录到你的提问中。如果你有庞大而复杂的测试样例能重现程序挂掉的情境，尽量将它剪裁得越小越好。

这样做的用处至少有三点。
第一，表现出你为简化问题付出了努力，这可以使你得到回答的机会增加；
第二，简化问题使你更有可能得到**有用**的答案；
第三，在精炼你的 bug 报告的过程中，你很可能就自己找到了解决方法或权宜之计。

###### 别动辄声称找到 Bug

当你在使用软件中遇到问题，除非你非常、**非常**的有根据，不要动辄声称找到了 Bug。提示：除非你能提供解决问题的源代码补丁，或者提供回归测试来表明前一版本中行为不正确，否则你都多半不够完全确信。这同样适用在网页和文件，如果你（声称）发现了文件的`Bug`，你应该能提供相应位置的修正或替代文件。

请记得，还有其他许多用户没遇到你发现的问题，否则你在阅读文件或搜索网页时就应该发现了（你在抱怨前**已经做了这些，是吧**？）。这也意味着很有可能是你弄错了而不是软件本身有问题。

编写软件的人总是非常辛苦地使它尽可能完美。如果你声称找到了 Bug，也就是在质疑他们的能力，即使你是对的，也有可能会冒犯到其中某部分人。当你在标题中嚷嚷着有`Bug`时，这尤其严重。

提问时，即使你私下非常确信已经发现一个真正的 Bug，最好写得像是**你**做错了什么。如果真的有 Bug，你会在回复中看到这点。这样做的话，如果真有 Bug，维护者就会向你道歉，这总比你惹恼别人然后欠别人一个道歉要好一点。

###### 低声下气不能代替你的功课

有些人明白他们不该粗鲁或傲慢的提问并要求得到答复，但他们选择另一个极端 —— 低声下气：`我知道我只是个可悲的新手，一个失败者，但...`。这既使人困扰，也没有用，尤其是伴随着与实际问题含糊不清的描述时更令人反感。

别用原始灵长类动物的把戏来浪费你我的时间。取而代之的是，尽可能清楚地描述背景条件和你的问题情况。这比低声下气更好地定位了你的位置。

有时网页论坛会设有专为新手提问的版面，如果你真的认为遇到了初学者的问题，到那去就是了，但一样别那么低声下气。

###### 描述问题症状而非你的猜测

告诉黑客们你认为问题是怎样造成的并没什么帮助。（如果你的推断如此有效，还用向别人求助吗？），因此要确信你原原本本告诉了他们问题的症状，而不是你的解释和理论；让黑客们来推测和诊断。如果你认为陈述自己的猜测很重要，清楚地说明这只是你的猜测，并描述为什么它们不起作用。

**蠢问题**

> 我在编译内核时接连遇到 SIG11 错误，
> 我怀疑某条飞线搭在主板的走线上了，这种情况应该怎样检查最好？

**聪明问题**

> 我的组装电脑是 FIC-PA2007 主机板搭载 AMD K6/233 CPU（威盛 Apollo VP2 芯片组），
> 256MB Corsair PC133 SDRAM 内存，在编译内核时，从开机 20 分钟以后就频频产生 SIG11 错误，
> 但是在头 20 分钟内从没发生过相同的问题。重新启动也没有用，但是关机一晚上就又能工作 20 分钟。
> 所有内存都换过了，没有效果。相关部分的标准编译记录如下…

由于以上这点似乎让许多人觉得难以配合，这里有句话可以提醒你：`所有的诊断专家都来自密苏里州。` 美国国务院的官方座右铭则是：`让我看看`（出自国会议员 Willard D. Vandiver 在 1899 年时的讲话：`我来自一个出产玉米，棉花，牛蒡和民主党人的国家，滔滔雄辩既不能说服我，也不会让我满意。我来自密苏里州，你必须让我看看。`） 针对诊断者而言，这并不是一种怀疑，而只是一种真实而有用的需求，以便让他们看到的是与你看到的原始证据尽可能一致的东西，而不是你的猜测与归纳的结论。所以，大方地展示给我们看吧！

###### 按发生时间先后列出问题症状

问题发生前的一系列操作，往往就是对找出问题最有帮助的线索。因此，你的说明里应该包含你的操作步骤，以及机器和软件的反应，直到问题发生。在命令行处理的情况下，提供一段操作记录（例如运行脚本工具所生成的），并引用相关的若干行（如 20 行）记录会非常有帮助。

如果挂掉的程序有诊断选项（如 -v 的详述开关），试着选择这些能在记录中增加调试信息的选项。记住，`多`不等于`好`。试着选取适当的调试级别以便提供有用的信息而不是让读者淹没在垃圾中。

如果你的说明很长（如超过四个段落），在开头简述问题，接下来再按时间顺序详述会有所帮助。这样黑客们在读你的记录时就知道该注意哪些内容了。

###### 描述目标而不是过程

如果你想弄清楚如何做某事（而不是报告一个 Bug），在开头就描述你的目标，然后才陈述重现你所卡住的特定步骤。

经常寻求技术帮助的人在心中有个更高层次的目标，而他们在自以为能达到目标的特定道路上被卡住了，然后跑来问该怎么走，但没有意识到这条路本身就有问题。结果要费很大的劲才能搞定。

**蠢问题**

> 我怎样才能从某绘图程序的颜色选择器中取得十六进制的 RGB 值？

**聪明问题**

> 我正试着用替换一幅图片的色码（color table）成自己选定的色码，我现在知道的唯一方法是编辑每个色码区块（table slot）， 但却无法从某绘图程序的颜色选择器取得十六进制的 RGB 值。

第二种提问法比较聪明，你可能得到像是`建议采用另一个更合适的工具`的回复。

###### 别要求使用私人电邮回复

黑客们认为问题的解决过程应该公开、透明，此过程中如果更有经验的人注意到不完整或者不当之处，最初的回复才能够、也应该被纠正。同时，作为提供帮助者可以得到一些奖励，奖励就是他的能力和学识被其他同行看到。

当你要求私下回复时，这个过程和奖励都被中止。别这样做，让**回复者**来决定是否私下回答 —— 如果他真这么做了，通常是因为他认为问题编写太差或者太肤浅，以至于不可能使其他人产生兴趣。

这条规则存在一条有限的例外，如果你确信提问可能会引来大量雷同的回复时，那么这个神奇的提问句会是`向我发电邮，我将为论坛归纳这些回复`。试着将邮件列表或新闻群组从洪水般的雷同回复中解救出来是非常有礼貌的 —— 但你必须信守诺言。

###### 清楚明确地表达你的问题以及需求

漫无边际的提问是近乎无休无止的时间黑洞。最有可能给你有用答案的人通常也正是最忙的人（他们忙是因为要亲自完成大部分工作）。这样的人对无节制的时间黑洞相当厌恶，所以他们也倾向于厌恶那些漫无边际的提问。

如果你明确表述需要回答者做什么（如提供指点、发送一段代码、检查你的补丁、或是其他等等），就最有可能得到有用的答案。因为这会定出一个时间和精力的上限，便于回答者能集中精力来帮你。这么做很棒。

要理解专家们所处的世界，请把专业技能想像为充裕的资源，而回复的时间则是稀缺的资源。你要求他们奉献的时间越少，你越有可能从真正专业而且很忙的专家那里得到解答。

所以，界定一下你的问题，使专家花在辨识你的问题和回答所需要付出的时间减到最少，这技巧对你获得有用的答案相当有帮助 —— 但这技巧通常和简化问题有所区别。因此，问`我想更好地理解 X，可否指点一下哪有好一点说明？`通常比问`你能解释一下 X 吗？`更好。如果你的代码不能运作，通常请别人看看哪里有问题，比要求别人替你改正要明智得多。

###### 询问有关代码的问题时

如果没有提示别人应该从何入手，别要求他人帮你调试有问题的代码。张贴几百行的代码，然后说一声：`它不能工作`会让你完全被忽略。只贴几十行代码，然后说一句：`在第七行以后，我期待它显示 <x>，但实际出现的是 <y>`比较有可能让你得到回应。

最有效描述程序问题的方法是提供最精简的 Bug 展示测试用例（bug-demonstrating test case）。什么是最精简的测试用例？那是问题的缩影；一小个程序片段能**刚好**展示出程序的异常行为，而不包含其他令人分散注意力的内容。怎么制作最精简的测试用例？如果你知道哪一行或哪一段代码会造成异常的行为，复制下来并加入足够重现这个状况的代码（例如，足以让这段代码能被编译/直译/被应用程序处理）。如果你无法将问题缩减到一个特定区块，就复制一份代码并移除不影响产生问题行为的部分。总之，测试用例越小越好（查看**话不在多而在精**一节）。

一般而言，要得到一段相当精简的测试用例并不太容易，但永远先尝试这样做是一个好习惯。这种方式可以帮助你了解如何自行解决这个问题 —— 而且即使你的尝试不成功，黑客们也会看到你在尝试取得答案的过程中付出了努力，这可以让他们更愿意与你合作。

如果你只是想让别人帮忙审查（Review）一下代码，在信的开头就要说出来，并且一定要提到你认为哪一部分特别需要关注以及为什么。

###### 别把自己家庭作业的问题贴上来

黑客们很擅长分辨哪些问题是家庭作业式的问题；因为我们中的大多数都曾自己解决这类问题。同样，这些问题得由**你**来搞定，你会从中学到东西。你可以要求给点提示，但别要求得到完整的解决方案。

如果你怀疑自己碰到了一个家庭作业式的问题，但仍然无法解决，试试在用户群组，论坛或（最后一招）在项目的**用户**邮件列表或论坛中提问。尽管黑客们**会**看出来，但一些有经验的用户也许仍会给你一些提示。

###### 去掉无意义的提问句

避免用无意义的话结束提问，例如`有人能帮我吗？`或者`这有答案吗？`。

首先：如果你对问题的描述不是很好，这样问更是画蛇添足。

其次：由于这样问是画蛇添足，黑客们会很厌烦你 —— 而且通常会用逻辑上正确，但毫无意义的回答来表示他们的蔑视， 例如：`没错，有人能帮你`或者`不，没答案`。

一般来说，避免用 `是或否`、`对或错`、`有或没有`类型的问句，除非你想得到是或否类型的回答。

###### 即使你很急也不要在标题写“紧急”

这是你的问题，不是我们的。宣称`紧急`极有可能事与愿违：大多数黑客会直接删除无礼和自私地企图即时引起关注的问题。更严重的是，`紧急`这个字（或是其他企图引起关注的标题）通常会被垃圾信过滤器过滤掉 —— 你希望能看到你问题的人可能永远也看不到。

有半个例外的情况是，如果你是在一些很高调，会使黑客们兴奋的地方，也许值得这样去做。在这种情况下，如果你有时间压力，也很有礼貌地提到这点，人们也许会有兴趣回答快一点。

当然，这风险很大，因为黑客们兴奋的点多半与你的不同。譬如从 NASA 国际空间站（International Space Station）发这样的标题没有问题，但用自我感觉良好的慈善行为或政治原因发肯定不行。事实上，张贴诸如`紧急：帮我救救这个毛茸茸的小海豹！`肯定让你被黑客忽略或惹恼他们，即使他们认为毛茸茸的小海豹很重要。

如果你觉得这点很不可思议，最好再把这份指南剩下的内容多读几遍，直到你弄懂了再发文。

###### 礼多人不怪，而且有时还很有帮助

彬彬有礼，多用`请`和`谢谢您的关注`，或`谢谢你的关照`。让大家都知道你对他们花时间免费提供帮助心存感激。

坦白说，这一点并没有比使用清晰、正确、精准且合乎语法和避免使用专用格式重要（也不能取而代之）。黑客们一般宁可读有点唐突但技术上鲜明的 Bug 报告，而不是那种有礼但含糊的报告。（如果这点让你不解，记住我们是按问题能教给我们什么来评价问题的价值的）

然而，如果你有一串的问题待解决，客气一点肯定会增加你得到有用回应的机会。

（我们注意到，自从本指南发布后，从资深黑客那里得到的唯一严重缺陷反馈，就是对预先道谢这一条。一些黑客觉得`先谢了`意味着事后就不用再感谢任何人的暗示。我们的建议是要么先说`先谢了`，**然后**事后再对回复者表示感谢，或者换种方式表达感激，譬如用`谢谢你的关注`或`谢谢你的关照`。）

###### 问题解决后，加个简短的补充说明

问题解决后，向所有帮助过你的人发个说明，让他们知道问题是怎样解决的，并再一次向他们表示感谢。如果问题在新闻组或者邮件列表中引起了广泛关注，应该在那里贴一个说明比较恰当。

最理想的方式是向最初提问的话题回复此消息，并在标题中包含`已修正`，`已解决`或其它同等含义的明显标记。在人来人往的邮件列表里，一个看见讨论串`问题 X`和`问题 X - 已解决`的潜在回复者就明白不用再浪费时间了（除非他个人觉得`问题 X`有趣），因此可以利用此时间去解决其它问题。

补充说明不必很长或是很深入；简单的一句`你好，原来是网线出了问题！谢谢大家 – Bill`比什么也不说要来的好。事实上，除非结论真的很有技术含量，否则简短可爱的小结比长篇大论更好。说明问题是怎样解决的，但大可不必将解决问题的过程复述一遍。

对于有深度的问题，张贴调试记录的摘要是有帮助的。描述问题的最终状态，说明是什么解决了问题，在此**之后**才指明可以避免的盲点。避免盲点的部分应放在正确的解决方案和其它总结材料之后，而不要将此信息搞成侦探推理小说。列出那些帮助过你的名字，会让你交到更多朋友。

除了有礼貌和有内涵以外，这种类型的补充也有助于他人在邮件列表/新闻群组/论坛中搜索到真正解决你问题的方案，让他们也从中受益。

至少，这种补充有助于让每位参与协助的人因问题的解决而从中得到满足感。如果你自己不是技术专家或者黑客，那就相信我们，这种感觉对于那些你向他们求助的大师或者专家而言，是非常重要的。问题悬而未决会让人灰心；黑客们渴望看到问题被解决。好人有好报，满足他们的渴望，你会在下次提问时尝到甜头。

思考一下怎样才能避免他人将来也遇到类似的问题，自问写一份文件或加个常见问题（FAQ）会不会有帮助。如果是的话就将它们发给维护者。

在黑客中，这种良好的后继行动实际上比传统的礼节更为重要，也是你如何透过善待他人而赢得声誉的方式，这是非常有价值的资产。

##### 如何解读答案

###### RTFM 和 STFW：如何知道你已完全搞砸了

有一个古老而神圣的传统：如果你收到`RTFM（Read The Fucking Manual）`的回应，回答者认为你**应该去读他妈的手册**。当然，基本上他是对的，你应该去读一读。

RTFM 有一个年轻的亲戚。如果你收到`STFW（Search The Fucking Web）`的回应，回答者认为你**应该到他妈的网上搜索**。那人多半也是对的，去搜索一下吧。（更温和一点的说法是 Google 是你的朋友（Google is Your Friend，GIYF）！）

在论坛，你也可能被要求去爬爬论坛的旧文。事实上，有人甚至可能热心地为你提供以前解决此问题的讨论串。但不要依赖这种关照，提问前应该先搜索一下旧文。

通常，用这两句之一回答你的人会给你一份包含你需要内容的手册或者一个网址，而且他们打这些字的时候也正在读着。这些答复意味着回答者认为：

- **你需要的信息非常容易获得**；
- **你自己去搜索这些信息比灌给你，能让你学到更多**。

你不应该因此不爽；**依照黑客的标准，他已经表示了对你一定程度的关注，而没有对你的要求视而不见**。你应该对他祖母般的慈祥表示感谢。

###### 如果还是搞不懂

如果你看不懂回应，别立刻要求对方解释。像你以前试着自己解决问题时那样（利用手册，FAQ，网络，身边的高手），先试着去搞懂他的回应。如果你真的需要对方解释，记得表现出你已经从中学到了点什么。

比方说，如果我回答你：`看来似乎是 zentry 卡住了；你应该先清除它。`，然后，这是一个**很糟的**后续问题回应：`zentry 是什么？` **好**的问法应该是这样：`哦~~~我看过说明了但是只有 -z 和 -p 两个参数中提到了 zentries，而且还都没有清楚的解释如何清除它。你是指这两个中的哪一个吗？还是我看漏了什么？`

###### 处理无礼的回应

很多黑客圈子中看似无礼的行为并不是存心冒犯。相反，它是直截了当，一针见血式的交流风格，这种风格更注重解决问题，而不是使人感觉舒服而却模模糊糊。

如果你觉得被冒犯了，试着平静地反应。如果有人真的做了出格的事，邮件列表、新闻群组或论坛中的前辈多半会招呼他。如果这**没有**发生而你却发火了，那么你发火对象的言语可能在黑客社区中看起来是正常的，而**你**将被视为有错的一方，这将伤害到你获取信息或帮助的机会。

另一方面，你偶尔真的会碰到无礼和无聊的言行。与上述相反，对真正的冒犯者狠狠地打击，用犀利的语言将其驳得体无完肤都是可以接受的。然而，在行事之前一定要非常非常的有根据。纠正无礼的言论与开始一场毫无意义的口水战仅一线之隔，黑客们自己莽撞地越线的情况并不鲜见。如果你是新手或外人，避开这种莽撞的机会并不高。如果你想得到的是信息而不是消磨时光，这时最好不要把手放在键盘上以免冒险。

（有些人断言很多黑客都有轻度的自闭症或阿斯伯格综合征（即：社交困难、社恐），缺少用于润滑人类社会**正常**交往所需的神经。这既可能是真也可能是假的。如果你自己不是黑客，兴许你认为我们脑袋有问题还能帮助你应付我们的古怪行为。只管这么干好了，我们不在乎。我们**喜欢**我们现在这个样子，并且通常对病患标记都有站得住脚的怀疑。）

Jeff Bigler 的观察总结和这个相关也值得一读 (`谈吐过滤器`)。

在下一节，我们会谈到另一个问题，当**你**行为不当时所会受到的`冒犯`。

##### 如何避免扮演失败者

在黑客社区的论坛中，你以本指南所描述的或类似的方式，可能会有那么几次搞砸了。而你会在公开场合中被告知你是如何搞砸的，也许攻击的言语中还会带点夹七夹八的颜色。

这种事发生以后，你能做的最糟糕的事莫过于哀嚎你的遭遇、宣称被言语攻击、要求道歉、高声尖叫、憋闷气、威胁诉诸法律、向其雇主报怨、不去关马桶盖等等。相反地，你该这么做：

熬过去，这很正常。事实上，它是有益健康且合理的。

社区的标准不会自行维持，它们是通过参与者积极而**公开地**执行来维持的。不要哭嚎所有的批评都应该通过私下的邮件传送，它不是这样运作的。当有人评论你的一个说法有误或者提出不同看法时，坚持声称受到个人攻击也毫无益处，这些都是失败者的态度。

也有其它的黑客论坛，受过高礼节要求的误导，禁止参与者张贴任何对别人帖子挑毛病的消息，并声称`如果你不想帮助用户就闭嘴。` 结果造成有想法的参与者纷纷离开，这么做只会使它们沦为毫无意义的唠叨与无用的技术论坛。

夸张的讲法是：你要的是“友善”（以上述方式）还是有用？两个里面挑一个。

记着：当黑客说你搞砸了，并且（无论多么刺耳）告诉你别再这样做时，他正在为关心**你**和**他的社区**而行动。对他而言，不理你并将你从他的生活中滤掉更简单。如果你无法做到感谢，至少要表现得有点尊严，别大声哀嚎，也别因为自己是个有戏剧性超级敏感的灵魂和自以为有资格的新来者，就指望别人像对待脆弱的洋娃娃那样对你。

有时候，即使你没有搞砸（或者只是在他的想像中你搞砸了），有些人也会无缘无故地攻击你本人。在这种情况下，抱怨倒是**真的**会把问题搞砸。

这些来找麻烦的人要么是毫无办法但自以为是专家的不中用家伙，要么就是测试你是否真会搞砸的心理专家。其它读者要么不理睬，要么用自己的方式对付他们。这些来找麻烦的人在给他们自己找麻烦，这点你不用操心。

也别让自己卷入口水战，最好不要理睬大多数的口水战 —— 当然，这是在你检验它们只是口水战，并且未指出你有搞砸的地方，同时也没有巧妙地将问题真正的答案藏于其后（这也是有可能的）。

##### 不该问的问题

以下是几个经典蠢问题，以及黑客没回答时心中所想的：

- 问题：我能在哪找到 X 程序或 X 资源？
- 问题：我怎样用 X 做 Y？
- 问题：如何设定我的 shell 提示？
- 问题：我可以用 Bass-o-matic 文件转换工具将 AcmeCorp 文件转换为 TeX 格式吗？
- 问题：我的程序/设定/SQL 语句没有用
- 问题：我的 Windows 电脑有问题，你能帮我吗？
- 问题：我的程序不会动了，我认为系统工具 X 有问题
- 问题：我在安装 Linux（或者 X ）时有问题，你能帮我吗？
- 问题：我怎么才能破解 root 帐号/窃取 OP 特权/读别人的邮件呢？

> 问题：我能在哪找到 X 程序或 X 资源？

回答：就在我找到它的地方啊，白痴 —— 搜索引擎的那一头。天哪！难道还有人不会用`Google`吗？

> 问题：我怎样用 X 做 Y？

回答：如果你想解决的是 Y ，提问时别给出可能并不恰当的方法。这种问题说明提问者不但对 X 完全无知，也对 Y 要解决的问题糊涂，还被特定形势禁锢了思维。最好忽略这种人，等他们把问题搞清楚了再说。

> 问题：如何设定我的 shell 提示？？

回答：如果你有足够的智慧提这个问题，你也该有足够的智慧去**RTFM**，然后自己去找出来。

> 问题：我可以用 Bass-o-matic 文件转换工具将 AcmeCorp 文件转换为 TeX 格式吗？

回答：试试看就知道了。如果你试过，你就知道了答案，就不用浪费我的时间了。

> 问题：我的程序/设定/SQL 语句没有用

回答：这不算是问题吧，我对要我问你二十个问题才找得出你真正问题的问题没兴趣 —— 我有更有意思的事要做呢。在看到这类问题的时候，我的反应通常不外如下三种：

- 你还有什么要补充的吗？
- 真糟糕，希望你能搞定。
- 这关我屁事？

> 问题：我的 Windows 电脑有问题，你能帮我吗？

回答：能啊，扔掉微软的垃圾，换个像 Linux 或 BSD 的开源操作系统吧。

注意：如果程序有官方版 Windows 或者与 Windows 有互动（如 Samba），你**可以**问与 Windows 相关的问题，只是别对问题是由 Windows 操作系统而不是程序本身造成的回复感到惊讶， 因为 Windows 一般来说实在太烂，这种说法通常都是对的。

> 问题：我的程序不会动了，我认为系统工具 X 有问题

回答：你完全有可能是第一个注意到被成千上万用户反复使用的系统调用与函数库文件有明显缺陷的人，更有可能的是你完全没有根据。不同凡响的说法需要不同凡响的证据，当你这样声称时，你必须有清楚而详尽的缺陷说明文件作后盾。

> 问题：我在安装 Linux（或者 X ）时有问题，你能帮我吗？

回答：不能，我只有亲自在你的电脑上动手才能找到毛病。还是去找你当地的 Linux 使用群组者寻求实际的指导吧（你能找到`Linux用户群组的清单`）。

注意：如果安装问题与某 Linux 的发行版有关，在它的邮件列表、论坛或本地用户群组中提问也许是恰当的。此时，应描述问题的准确细节。在此之前，先用 `Linux` 和**所有**被怀疑的硬件作关键词仔细搜索。

> 问题：我怎么才能破解 root 帐号/窃取 OP 特权/读别人的邮件呢？

回答：想要这样做，说明了你是个卑鄙小人；想找个黑客帮你，说明你是个白痴！

##### 好问题与蠢问题

最后，我将透过举一些例子，来说明怎样聪明的提问；同一个问题的两种问法被放在一起，一种是愚蠢的，另一种才是明智的。

**蠢问题**：

> 我可以在哪儿找到关于 Foonly Flurbamatic 的资料？

这种问法无非想得到**STFW**这样的回答。

**聪明问题**：

> 我用 Google 搜索过 "Foonly Flurbamatic 2600"，但是没找到有用的结果。谁知道上哪儿去找对这种设备编程的资料？

这个问题已经 STFW 过了，看起来他真的遇到了麻烦。

**蠢问题**：

> 我从 foo 项目找来的源码没法编译。它怎么这么烂？

他觉得都是别人的错，这个傲慢自大的提问者。

**聪明问题**：

> foo 项目代码在 Nulix 6.2 版下无法编译通过。我读过了 FAQ，但里面没有提到跟 Nulix 有关的问题。这是我编译过程的记录，我有什么做的不对的地方吗？

提问者已经指明了环境，也读过了 FAQ，还列出了错误，并且他没有把问题的责任推到别人头上，他的问题值得被关注。

**蠢问题**：

> 我的主机板有问题了，谁来帮我？

某黑客对这类问题的回答通常是：`好的，还要帮你拍拍背和换尿布吗？`，然后按下删除键。

**聪明问题**：

> 我在 S2464 主机板上试过了 X 、 Y 和 Z ，但没什么作用，我又试了 A 、 B 和 C 。请注意当我尝试 C 时的奇怪现象。显然 florbish 正在 grommicking，但结果出人意料。通常在 Athlon MP 主机板上引起 grommicking 的原因是什么？有谁知道接下来我该做些什么测试才能找出问题？

这个家伙，从另一个角度来看，值得去回答他。他表现出了解决问题的能力，而不是坐等天上掉答案。

在最后一个问题中，注意`告诉我答案`和`给我启示，指出我还应该做什么诊断工作`之间微妙而又重要的区别。

事实上，后一个问题源自于 2001 年 8 月在 Linux 内核邮件列表（lkml）上的一个真实的提问。我（Eric）就是那个提出问题的人。我在 Tyan S2464 主板上观察到了这种无法解释的锁定现象，列表成员们提供了解决这一问题的重要信息。

通过我的提问方法，我给了别人可以咀嚼玩味的东西；我设法让人们很容易参与并且被吸引进来。我显示了自己具备和他们同等的能力，并邀请他们与我共同探讨。通过告诉他们我所走过的弯路，以避免他们再浪费时间，我也表明了对他们宝贵时间的尊重。

事后，当我向每个人表示感谢，并且赞赏这次良好的讨论经历的时候，一个 Linux 内核邮件列表的成员表示，他觉得我的问题得到解决并非由于我是这个列表中的**名**人，而是因为我用了正确的方式来提问。

黑客从某种角度来说是拥有丰富知识但缺乏人情味的家伙；我相信他是对的，如果我**像**个乞讨者那样提问，不论我是谁，一定会惹恼某些人或者被他们忽视。他建议我记下这件事，这直接导致了本指南的出现。

##### 如果得不到回答

如果仍得不到回答，请不要以为我们觉得无法帮助你。有时只是看到你问题的人不知道答案罢了。没有回应不代表你被忽视，虽然不可否认这种差别很难区分。

总的来说，简单地重复张贴问题是个很糟的点子。这将被视为无意义的喧闹。有点耐心，知道你问题答案的人可能生活在不同的时区，可能正在睡觉，也有可能你的问题一开始就没有组织好。

你可以通过其他渠道获得帮助，这些渠道通常更适合初学者的需要。

有许多网上的以及本地的用户群组，由热情的软件爱好者（即使他们可能从没亲自写过任何软件）组成。通常人们组建这样的团体来互相帮助并帮助新手。

另外，你可以向很多商业公司寻求帮助，不论公司大还是小。别为要付费才能获得帮助而感到沮丧！毕竟，假使你的汽车发动机汽缸密封圈爆掉了 —— 完全可能如此 —— 你还得把它送到修车铺，并且为维修付费。就算软件没花费你一分钱，你也不能强求技术支持总是免费的。

对像是 Linux 这种大众化的软件，每个开发者至少会对应到上万名用户。根本不可能由一个人来处理来自上万名用户的求助电话。要知道，即使你要为这些协助付费，和你所购买的同类软件相比，你所付出的也是微不足道的（通常封闭源代码软件的技术支持费用比开源软件的要高得多，且内容也没那么丰富）。

##### 如何更好地回答问题

**态度和善一点。** 问题带来的压力常使人显得无礼或愚蠢，其实并不是这样。

**对初犯者私下回复。** 对那些坦诚犯错之人没有必要当众羞辱，一个真正的新手也许连怎么搜索或在哪找常见问题都不知道。

**如果你不确定，一定要说出来！** 一个听起来权威的错误回复比没有还要糟，别因为听起来像个专家很好玩，就给别人乱指路。要谦虚和诚实，给提问者与同行都树个好榜样。

**如果帮不了忙，也别妨碍他。** 不要在实际步骤上开玩笑，那样也许会毁了提问者的设置 —— 有些可怜的呆瓜会把它当成真的指令。

**试探性的反问以引出更多的细节。** 如果你做得好，提问者可以学到点东西 —— 你也可以。试试将蠢问题转变成好问题，别忘了我们都曾是新手。

尽管对那些懒虫抱怨一声 RTFM 是正当的，但能给出文档的链接（即使只是建议个 Google 搜索关键词）会更好。

**如果你决定回答，就请给出好的答案。** 当别人正在用错误的工具或方法时别建议笨拙的权宜之计（workaround），应推荐更好的工具，重新界定问题。

**正面地回答问题！** 如果这个提问者已经很深入的研究而且也表明已经试过 X 、 Y 、 Z 、 A 、 B 、 C 但没得到结果，回答 `试试看 A 或是 B` 或者 `试试 X 、 Y 、 Z 、 A 、 B 、 C` 并附上一个链接一点用都没有。

**帮助你的社区从问题中学习。** 当回复一个好问题时，问问自己`如何修改相关文件或常见问题文件以免再次解答同样的问题？`，接着再向文件维护者发一份补丁。

如果你在研究一番后才作出了回答，**展现你的技巧而不是直接端出结果**。毕竟`授人以鱼不如授人以渔`。

##### 相关资源

如果你需要个人电脑、Unix 系统和网络如何运作的基础知识，参阅`Unix 系统和网络基本原理`。

当你发布软件或补丁时，试着按`软件发布实践`操作。

##### 鸣谢

Evelyn Mitchel 贡献了一些愚蠢问题例子并启发了编写`如何更好地回答问题`这一节， Mikhail Ramendik 贡献了一些特别有价值的建议和改进。

<!-- tabs:end -->

---

### 备注

文中提到的链接：
- 黑客;hackers: http://www.catb.org/~esr/faqs/hacker-howto.html
- 网络礼节,netiquette: http://www.ietf.org/rfc/rfc1855.txt
- Google 论坛;Google groups: http://groups.google.com/
- Stack Exchange网站清单;Stack Exchange has over 100 sites: http://stackexchange.com/sites
- 更好点的邮件程序;get a better mail program: http://linuxmafia.com/faq/Mail/muas.html
- 关闭 HTML;turn off HTML: http://www.birdhouse.org/etc/evilmail.html
- 如何有效的报告 Bug;Simon Tatham, How to Report Bugs Effectively: http://www.chiark.greenend.org.uk/~sgtatham/bugs.html
- 是或否类型的回答;yes-or-no answer: http://homepage.ntlworld.com./jonathan.deboynepollard/FGA/questions-with-yes-or-no-answers.html
- 谈吐过滤器;Jeff Bigler, tact filters: http://www.mit.edu/~jcb/tact.html
- Google: http://www.google.com/
- Linux 用户群组的清单;a list of user groups here: http://www.linux.org/groups/index.html
- Unix 系统和网络基本原理;The Unix and Internet Fundamentals HOWTO: http://en.tldp.org/HOWTO/Unix-and-Internet-Fundamentals-HOWTO/
- 软件发布实践;Software Release Practice HOWTO: http://en.tldp.org/HOWTO/Software-Release-Practice-HOWTO/index.html
