---
title: "Where COBOL Will Die"
date: 2020-12-01 00:00:00
slug: code/where-cobol-will-die
description: "Where COBOL Will Die"
tags:
  - Code
---

I was increasingly intrigued as I read this deep dive, ["COBOL Controls Your Money"][article] into the use of COBOL in major banks and government mainframes. At one bank, they estimate that there is over 75 million lines of COBOL code in active use.

Notably, COBOL was among the first of the new (now normal) style of programming languages that looked more like English than assembly code. The new language paradigm ushered in by COBOL made programming more accessible and broadened who attempted to become a computer programmer. COBOL was used to build the first banking and government computer systems as a broader COBOL talent pool emerged.

And these banks and government systems were built... and built... and built. Through the 1970s and 1980s overnight reconciliation and scheduling jobs run on legacy mainframes became the backbone of banking, government, and retail sectors even as mainframes soon fell out of favour as the modern PCs and servers (and newer languages) emerged that solved the initial pitfalls of COBOL.

Notably, COBOL introduced the `GOTO` statement which allowed a program to jump in execution to an arbitrary line of code. `GOTO` stuck around in C and was notorious for enabling spaghetti like code execution that was very difficult to reason about, maintain, or extend. More modern languages like Java and Python have largely gone away with `GOTO` statements entirely.

Operating COBOL systems, originally written when code was entered into punch cards and then fed into mainframes, has increasingly required the continued employment of aging programmers who now in their 70s and 80s are still being called by banks to maintain code they wrote more than 30 or 40 years ago.

Migrating away from COBOL is a daunting task given the scale of existing code bases and importance of maintaining feature and execution parity with existing systems. One Australian bank ended up spending over \$1 Billion to migrate part of their COBOL backend to Java. The New York Times migrated one of their COBOL systems used to handle newspaper delivery to Java also at high expense and risk.

Most banks and governments have settled to cover their eyes and hope for the best, with no plans to migrate off of these expansive COBOL legacy architectures. Many banks dangle carrots of full life employment for younger programmers to learn and become proficient at COBOL. The shrinking talent pool and continued reliance on retired COBOL programmers leads to reduced confidence in the ability to maintain the systems that run the worlds finances, retail, and governments.

Even issues as seemingly trivial as the Y2K scare where COBOL systems stored the year as 2 digits instead of 4, will reoccur and potentially bring these systems to a halt.

> “We spent two-and-a-half years prepping for Y2K,” Thomas chuckles. “That's one of the reasons that a lot of the programing guys like me know our systems so well. Because we had to go through every program.”

> Even so, at Thomas’s bank they didn’t have time to truly fix the problem. In some cases, banks and firms didn’t actually change the code to use a full four-digit date like “2016”. Instead, they used a hack: a “sliding rule.” They’d pick a year far enough in the future, like 2045, and make it the new breakpoint. So if the COBOL sees a two-digit date that’s greater than 45, it assumes it’s in the 1900s — so, ”87“ means 1987. And if it sees a number lower than 45, it assumes it’s 2000s — so, “33“ means 2033.

> This means, as Thomas notes, that the Y2K problem isn’t, for them, entirely fixed. They just kicked the can down the road. Come 2045, they may well be in a panic again. Which means that still more COBOL will need to be fixed by COBOL experts.

COBOL won't be gone anytime soon. But if it ever dies, the place of death will be the banks and government mainframes which have stuck with a legacy architecture long after anyone could competently code against it.

Read more at [Wealthsimple Magazine][article].

[article]: https://www.wealthsimple.com/en-ca/magazine/cobol-controls-your-money
