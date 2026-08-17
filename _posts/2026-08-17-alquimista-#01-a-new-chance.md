---
layout: posts
title: "O Alquimista #01 A New Chance!"
date: 2026-08-17
image: /img/postimg/p_al_260817.jpg
excerpt: After 1 year, the creators of O Alquimista decided to give life and shape to this project...
tags: [alquimista]
---

<img src="{{'/img/postimg/p_al_260817.jpg' | relative_url}}" alt="">

After 1 year, the creators of O Alquimista (me and my colleagues Gabriel and Nicole) decided to take advantage of summer break to give life and shape to this project we like so much. We decided to do things the way they should be done: go through the entire user research and usability testing process to improve what needed improving, and then put the site live, fully functional. The whole research and testing process is in this [document](https://docs.google.com/document/d/1tIfTPwqvCC-wycJBdtX1iviQAv1f5bJ9EGuu9YT5vWc/edit?usp=sharing), in case you're interested in seeing it.

We've already done all the necessary redesign (which thankfully wasn't much) and now we're in the implementation phase. While Nicole is more in charge of the communication and branding part, Gabriel and I are handling the programming part (the one we like most). We decided to use O Alquimista to include our new front and back-end knowledge, so the stack we're going to use is: HTML/CSS, Tailwind, TypeScript, PHP, MySQL and a bit of Node.

We've already planned the database, but we're still on the frontend. Gabriel has already used Tailwind to build his portfolio, but this is my first time working with it. I know it's a pretty relevant framework in the current market, so I decided to learn it, and there's no better way than to just dive in and get my hands dirty. Thankfully, Tailwind is much more flexible to use than Bootstrap, since I can customize the themes I want to use and the framework itself has an immense amount of different classes. I'm having a lot of fun learning to use it, although I still like traditional CSS more, since the HTML ends up looking really ugly...

It took me a bit to get used to the classes, but in two afternoons I managed to get the homepage 90% done and fully responsive. It's the hardest page out of the ones I was assigned, mainly because of the design. When I made this page previously for the Multimedia Lab 2 course, my biggest difficulty was the waves in the initial section and in the middle of the page. I had no idea how I was going to make them. For the initial section, I ended up doing a workaround and exported the image from the Figma mobile and desktop versions, and just made them appear and disappear according to the breakpoint so it would match. Meanwhile, for the waves in the middle of the page, I used a very useful site called [shape dividers](https://www.shapedivider.app/), without it we wouldn't have delivered the assignment matching the design.

It was going back to that site now to redo the homepage that I noticed something. The SVGs they generate come out as an HTML tag that can easily be changed and styled the way I want. So I decided to research more about it and started reading the MDN documentation on it, determined to learn how to manipulate them directly through HTML. Luckily, without meaning to, I clicked inside PhpStorm on an SVG I had saved in the project's images folder, and that opened a tab with an SVG tag. At that moment a lightbulb went off in my head and I decided to test something out...

I went to Figma, fixed the shape of the wave present in the Top Recipes section that sits on top of an image and exported it as .svg. I went back to PhpStorm and opened the file, copying the code and pasting it into my HTML where I wanted it to go. The section containing the SVG ended up with a height of 100svh and the SVG itself contains only a fraction of that height, determined by Tailwind classes and with padding at the top. I just deleted the width and height from the svg, put in the Tailwind classes to determine that instead, and set preserveAspectRatio to "none" and voilà! I have exactly the shape I wanted, on top of a section with the background image, which takes up the entire viewport of the device *and* adapts according to the width of the screen! That genuinely made me emotional.

I'm glad to see how much I've evolved since the first time I did a project in HTML. It was a great decision to redo this project from 0 and with new stacks, I've been learning a ton. For now I'm only on the front-end and if I keep up this pace I should finish it by the middle of the week, and then we'll start implementing TypeScript and the back-end. I believe I'll learn even more once I get to that next phase.