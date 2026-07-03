---
layout: posts
title: "Eclipse #04 First Level Out!"
date: 2026-07-03
image: /img/postimg/p_ec_260703.jpg
excerpt: I can proudly say that the first level of Eclipse is done and available to play on itch.io!
tags: [eclipse]
---

<img src="{{'/img/postimg/p_ec_260703.jpg' | relative_url}}" alt="">

Dear readers,

I can proudly say that the first level of Eclipse is done and available to play on [itch.io!](https://elysianstudio.itch.io/eclipse)

I'm writing this post later than I should have, but during the week of the 16th–21st I was glued to the computer from the moment I got out of bed until bedtime, just to finish this level before the deadline. The girls and I decided to implement only one level, since it was completely unfeasible to make two as we'd originally intended. Each level is supposed to have its own unique look, color palette, and tileset, which would have meant doing A LOT of pixel art from scratch... On top of that, we still needed to add some challenges to the first level, since our game had previously been an authentic walking simulator.

The submission was on the 21st, and the final presentation on the 22nd. It was the last assessment of the semester, and I've finally started my break, so I spent the previous week relaxing a bit. I've never felt as much stress as I did this school year.

Anyway, I've already had the chance to rest, and now I'm going to continue personal projects during the break, and I'll also be learning some new languages. My boyfriend is going to teach me PHP and MySQL, and I'm studying TypeScript on my own. I also intend to put together my portfolio — a page just to showcase all my projects — since this devblog works more as a behind-the-scenes look at what I do.

Anyway, back to Eclipse. I can barely list everything I did in the game, since a lot of it comes down to tweaking things in Unity and fixing code bugs, but one of the main things I did was rebuild the inventory system from scratch. I followed tutorials from the channel [Sunny Valley Studio](https://youtube.com/playlist?list=PLcRSafycjWFegXSGBBf4fqIKWkHDw_G8D&si=j5q_XVmuN2zr8ku2), since he also had an inventory with item descriptions like the one I wanted. The logic applied was MVC (Model-View-Controller), where the UI works separately from the items and the collection system itself, and a controller script passes instructions to the Model and the View about what to do (e.g., the Model holds the item information and the collection system; when the player picks up an item, the Controller tells the View to update the UI and display each item's information). I also learned about namespaces through that tutorial.

I followed the whole tutorial for the parts that interested me (I didn't want drag and drop for our inventory) and then made changes to better fit our game. For example, I made it so the item slots weren't always there, but only appeared once a new item was added to the player's inventory Scriptable Object.

I also ventured into adding an outline to collectible items when the player got close to them. I needed Claude's help for that — I was struggling with the shader that needed to be created for that outline to exist. Honestly, the Unity and C# knowledge we were given in class was simply scarce and insufficient. Most of what I and my classmates learned came from YouTube tutorials and AI assistance. Even so, I was happy that our project ended up among the best in the class.

I added a challenge where the player had to find a key to open a locker, and inside would be one of the photograph pieces. The script consisted of checking whether the key item's Scriptable Object was inside the player's inventory Scriptable Object. If it wasn't there, a dialogue box would pop up with the character thinking "It's locked, I need to find a key," and if it was, a feedback sound would play, a pop-up would appear telling the player to check their inventory, and another dialogue box would appear saying "There was a piece of a photograph here." It's pretty simple. The same logic was used to unlock another door on the map.

The key to that locker was on the other side of a memory puzzle where the floor collapses and the player is sent back to the start every time they fail. You had to memorize the path and use visual clues to walk the correct route. This falling-floor puzzle was made by my teammate Lara.

Besides these challenges, I also made a new bookshelf tileset to build a maze in the library, and a small challenge of putting the ball into the goal to get another piece of the photo. Every tester who tried the prototype tried to kick the ball, without success. They all said they wished they could kick the ball. So, I gave the people what the people wanted: I made the ball kickable and made that relevant to the game's progression.

Unrelated to the game's code or art, I'm very proud to say that both music tracks in the game were produced by me. I really like how they turned out, especially the one for the main menu — the game's theme song. In our reports we said the inspiration was vaporwave, and while that was true at the start, it didn't end up being the final inspiration at all. It has nothing to do with it now. I kept experimenting with sounds until I found something that conveyed suspense, mystery, eeriness, and after watching Kane Parsons' Backrooms film, I became obsessed with that aesthetic. Hello? The guy's a genius! I love that film's soundtrack with all my heart.

Anyway, I think this post will end here. Eclipse's development will continue, but the project is going to take a break for now. We're all exhausted from working. Either way, the first level is available for everyone to play. I don't know if anyone reads these posts — I don't think so at the moment — but if someone really is reading this, I hope you play it, and please feel free to send some feedback!