---
layout: posts
title: "My devblog #10 Implementing JS"
date: 2026-02-04
image: /img/postimg/p_md_05082.jpg
excerpt: Fortunately, my blog isn't a very large site, so I've already managed...
tags: [devblog]
---

Fortunately, my blog isn't a very large site, so I've already managed to make everything responsive. It didn't take much work overall; I'd say my biggest challenge was finding a solution for the top part of the "about me" section, where my photo, the title, and the first two paragraphs are. I quickly realized that it didn't work on screens smaller than a laptop and larger than a phone, so I had to rethink how to do it.

Initially, I was using display: flex to position the image next to the text and the title, and when it went to mobile, I would switch to flex-direction: column and used a "workaround" that had two images—one outside the text div and another inside—toggling their display between block and none depending on the media query. When it reached 900px in width, the paragraph would extend beyond the image and looked strange, and I preferred not to use two images just to hide and show one. That’s when I remembered a concept I had seen while I was putting together "Alquimista": CSS Grids.

I watched some videos to understand how it worked and started testing it out. Initially, it wasn't going well, but after restarting from scratch a few times, I managed to figure out what I was doing wrong and was able to apply it the way I wanted using grid-area. The result: it is perfectly responsive, and I'd say the only flaw is that the image gets a bit too small just before switching to mobile, but I should be able to solve that eventually. I also added the part where I show my technological skills, which I might transform into a grid display as well, but for now, it works with flexbox, so I'll leave it like that.

I've also already started implementing some JS. The select menu on the home page that appears on mobile to toggle between viewing the latest projects and the latest entries is already working, and I discovered a new function with the chat: .matchMedia(), which was essential to make that select work. Initially, it would show and hide the desired column based on the value chosen with addEventListener(), but when leaving the mobile viewport, it continued to hide a column when it was supposed to show two. With .matchMedia(), I can make the function work only from 576px downwards, and that is truly useful. I love learning about new ways to do things; expanding my possibilities is a very invigorating feeling.

Now all that’s missing is getting the filters and the search input on the page with all entries to work, but I think I'll do that after I have the posts with Jekyll since I need the names and tags. I’ve already started studying how it works and it seems simple, but I still haven’t understood if I absolutely must have Ruby and the bundle with Jekyll installed on my PC or if I can make it work solely through GitHub. I need to look for some better tutorials and test it manually.

Regarding the project pages, I think I'm really going to make personalized pages. Right now I only have two projects I did for uni and there will be a third one in the upcoming semester; since it's not many, I think it would be cool to customize the pages.

Tomorrow my boyfriend is coming to spend the day with me, so I’ll have Friday, Saturday, and Sunday to make this blog functional before classes start again. I know I can do it.
