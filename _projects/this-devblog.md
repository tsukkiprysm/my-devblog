---
layout: project
title: "My devblog!"
subtitle: "My place to share my projects"
image: /img/project_devblog.jpg
header_img: /img/devblog_header.jpg
excerpt: This is my place to share the process of the projects I make! From academic to personal projects, here you'll find all the insights and details of the websites, games and apps designed and developed by yours truly.
order: 1
title_font: "'Courier Prime', monospace"
title_weight: "bold"
---
## What is this devblog?

This is a space where I document my projects and their development process. In many ways, it functions as a detailed portfolio, allowing anyone interested to gain insight into how I build websites, apps, and games. It also started as a small summer project (that turned into a long-term one) aimed at strengthening my front-end skills, helping me practice what I learned during the semester and giving me the freedom to experiment beyond the constraints of academic projects.

    <hr class="divider">

## Color palette
    <div id="cp_div">
    
        <img src="{{'/img/cp_devblog.svg' | relative_url}}">
    
        <div>
            <p>This palette was heavily inspired by the plant GIF currently on the homepage, which is just a placeholder. To match its colors, I initially experimented with different shades from the brown in the pot, but it ended up feeling too yellowish. The overall vibe, however, leaned toward a coffee shop aesthetic, so I went to Pinterest to find a more neutral palette centered around browns, selecting this one. Because it’s neutral, it allows me to showcase other projects with more vibrant colors without clashing with the background.</p>
        </div>
    
    </div>

## Typography

    <div class="text-center">
    
        <h2>Courier Prime</h2>
        <p style="text-align: center; text-indent: 0; width: 40%; margin: auto;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
    
    </div>
    
    <hr class="divider">

## Target-audience

My target-audience is you, who’s reading this right now. Be it a friend, someone who found this by chance or a potencial employer. I hope the things written here can catch your attetion and inspire you in any way.

    <hr class="divider">

## Project entries

    {% assign project_posts = site.posts | where: "tags", "devblog" | sort: "date" %}
    
    {% for post in project_posts %}
    <div class="entry_box box_link" style="position: relative;">
    
        <a href="{{ post.url | relative_url }}" style="position: absolute; inset: 0; z-index: 1;"></a>
    
        <div class="entry_text">
            <h2>{{ post.title }}</h2>
            <p>{{ post.date | date: "%B %d, %Y"}}</p>
            <p class="normal_fs">{{ post.excerpt }}</p>
        </div>
    
        {% if post.image %}
            <img src="{{ post.image | relative_url }}" alt="">
        {% endif %}
    
    </div>
    {% endfor %}