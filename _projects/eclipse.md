---
layout: project
title: "Eclipse"
subtitle: "Photos and a fragmented mind"
image: /img/project_eclipse.jpg
header_img: /img/eclipse_header.jpg
excerpt: You’re in a weird, yet familiar environment, and you have no idea where you are, or even WHO you are. Your only way of finding out those informations and getting out of there is finding picture pieces a clues that will fill the gap in yout memory.
order: 4
authors:
  - name: Graziella Custódio
    github: https://github.com/tsukkiprysm
    linkedin: https://www.linkedin.com/in/grazi-custodio/
  - name: Inês Margarida
    github: 
  - name: Lara Novo
    behance:
  - name: Mafalda Laranjinha
    linkedin:
title_font: "'Courier Prime', monospace"
title_weight: "bold"
---

## What is Eclipse?

Eclipse is an atmospheric puzzle-adventure where narrative and gameplay merge into an introspective journey. Players step into the shoes of Dante, an Italian photojournalist trapped in the limbo of a coma following a tragic accident. To wake up, he must venture into the furthest reaches of his own fragmented mind.

In this dreamlike world, exploration is the key to the truth. Every environment reveals hidden secrets of Dante’s past, while challenging puzzles materialize the mental blocks standing in his way. More than mere obstacles, every solved mystery represents a recovered memory, an essential piece needed to reconstruct his identity and guide him back to consciousness.

<div class="usb_authors">
    <div style="flex-basis: 70%">
        <h2>Unique Selling Points</h2>
        <ul>
            <li>The concept of photos being a transformation of ephemeral moments into eternal records that endure far beyond the human mind;</li>
            <li>Discover Dante’s history by stepping into recovered photos to experience memory sequences of his life;</li>
            <li>The game features a 'lost mind' aesthetic, blending haunting surrealism with the eerie nostalgia of liminal spaces.</li>
        </ul>
    </div>
    <div style="flex-basis: 30%">
        <h2>Authors</h2>
        <div class="authors">
        {% for author in page.authors %}
            <div class="author_links">
                <h3> {{ author.name }} </h3>
                <div>
                    {% if author.github %}
                        <a href="{{ author.github }}" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    {% endif %}
                    {% if author.linkedin %}
                        <a href="{{ author.linkedin }}" target="_blank">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    {% endif %}
                    {% if author.behance %}
                        <a href="{{ author.behance }}" target="_blank">
                            <i class="fa-brands fa-behance"></i>
                        </a>
                    {% endif %}
                    {% if author.linktree %}
                        <a href="{{ author.linktree }}" target="_blank">
                            <i class="fa-brands fa-linktree"></i>
                        </a>
                    {% endif %}
                </div>
            </div>
        {% endfor %}
        </div>
    </div>
</div>

<hr class="divider">

## Target-audience

Young adults (ages 16–21) with a passion for narrative-driven adventure games, mystery, and puzzle games featuring dark themes and a somber aesthetic.

<hr class="divider">

## Game preview

<hr class="divider">

## Project's entries

{% assign project_posts = site.posts | where: "tags", "eclipse" | sort: "date" %}

{% for post in project_posts %}
<div class="entry_box box_link" style="position: relative;">
    <a href="{{ post.url | relative_url }}" style="position: absolute; inset: 0; z-index: 1;"></a>
    <div class="entry_text">
        <h2 style="text-align: left">{{ post.title }}</h2>
        <p style="text-indent: 0">{{ post.date | date: "%B %d, %Y"}}</p>
        <p style="text-indent: 0" class="normal_fs">{{ post.excerpt }}</p>
    </div>
    {% if post.image %}
        <img src="{{ post.image | relative_url }}" alt="">
    {% endif %}
</div>
{% endfor %}