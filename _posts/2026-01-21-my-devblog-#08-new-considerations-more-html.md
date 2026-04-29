---
layout: posts
title: "My devblog #08 New considerations"
date: 2026-01-21
image: /img/postimg/p_md_05082.jpg
excerpt: after a day spent doing a tedious media sociology assignment for university...
tags: [devblog]
---

Dear readers, after a day spent doing a tedious media sociology assignment for university, I set aside some time to dedicate to my blog again. The page where my projects will be displayed is already built, and I was just about to start the page to show all entries when a thought crossed my mind.

I need to save information about my projects and entries (such as the title, date, a short paragraph talking about it, etc.) so that I can fetch them with JavaScript later and generate the components on the home page and on the projects and entries pages, so I don’t have to keep adding them manually to the HTML.

I don’t know anything about databases yet and I won’t have that subject next semester, since I chose to go into 2D games. It’s true that I’m going to ask my boyfriend to give me the materials to study on my own since he will be taking it, but I’m not going to wait until next semester to finish this blog. I want it to be ready by the time classes start—at least all the HTML and CSS—as I can develop the JavaScript over the coming months.

Furthermore, GitHub Pages does not support a backend, so I’m going to have to use Jekyll to generate the entry and project pages. But I don’t know if I can read the posts and projects with Jekyll and then generate their components on the homepage and dedicated pages; I still have to study that.

It occurred to me, however, to use .JSON files. I have a very superficial understanding of how they work, but I believe it’s nothing I can’t learn and implement in a week. My concern was whether GitHub Pages could read .JSON files, but apparently, it is indeed possible and it won't be a problem. I believe this will be my solution then: create a .JSON file with objects for each of the posts and entries, and then fetch those objects in JavaScript and generate the components using the keys.

I'm going back to building the HTML and CSS then; when I finish the entries page, I will write the rest of the text for the "about me" page. I haven't decided on its final design yet, but for now, it will stay as it is.
