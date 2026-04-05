---
layout: project
title: "Lumiar"
subtitle: "A little buddy to help you manage yourself"
image: /img/project_lumiar.jpg
header_img: /img/lumiar_header.jpg
excerpt: A nossa aplicação de telemóvel chama-se Lumiar e tem como conceito criar um espaço fantástico onde de forma gamificada o utilizador possa criar um planeador onde o utilizador irá inserir suas tarefas e estabelecer prioridades.
order: 3
authors:
  - name: Graziella Custódio
    github: https://github.com/tsukkiprysm
    linkedin: https://www.linkedin.com/in/grazi-custodio/
  - name: Gabriel Azevedo
    github: https://github.com/Maaz73
    linkedin: https://www.linkedin.com/in/gabrielazevedo73/
  - name: Lourenço Oliveira
    behance: https://www.behance.net/eohidas
    linktree: https://linktr.ee/hidekiofc
  - name: Nicole Santos
    linkedin:
figma_embed: '<iframe src="https://embed.figma.com/proto/akkrVf6t7372bq0Xi7TsKY/Lumiar?node-id=815-451&p=f&viewport=-733%2C155%2C0.17&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=815%3A451&page-id=0%3A1&embed-host=share" allowfullscreen></iframe>'
title_font: "'Pixelify Sans', sans-serif"
title_weight: "700"
---

## What is Lumiar?

Lumiar creates a welcoming, gamified space where users can build their own planner by adding tasks, which the app then prioritizes to help organize their routine in a calm and pressure-free way. As users complete tasks, they earn points that can be used to customize their experience and strengthen their bond with their pet, Lumi.

The main goal of Lumiar is to offer a friendly, welcoming space for users facing challenges such as ADHD, anxiety, and depression, helping them organize their tasks in a fun and approachable way. In doing so, it promotes an environment that is both calming and highly practical.

<div class="usb_authors">
    <div style="flex-basis: 70%">
        <h2>Unique Selling Points</h2>
        <ul>
            <li>Tasks are automatically organized using an algorithm that determines their priority and distributes them across the user’s schedule;</li>
            <li>Focuses on helping people with anxiety, ADHD, and depression better organize their tasks and daily routines;</li>
            <li>A planner app that supports mental wellbeing by offering guided exercises and fostering a pressure-free environment.</li>
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

## Logo emblem
<div id="logo_div">
    <div>
        <p>From the start of development, the team wanted to implement pixel art to evoke the old games, as a way to bring back the nostalgia and fun of that time, especially since our target audience is young people aged 15 to 25, who grew up with old games.</p>
        <p>That said, our emblem is as simple as a character plate, with the Lumi’s face on it.</p>
    </div>
    <img src="{{'/img/logo_lumiar.svg' | relative_url}}">
</div>

## Color palette
<div id="cp_div">
    <img src="{{'/img/cp_lumiar.svg' | relative_url}}">
    <div>
        <p>The colors in Lumiar were chosen to enhance the calm, warm, cozy and welcoming atmosphere we envisioned for the app. We wanted light colors, referencing to mental clarity and organization, and some warm colors with some saturation to make contrast. After some consideration, we ended up choosing pink (in different shades), light beige and brown, because we felt this combination would maximize the cozy and welcoming feeling.</p>
    </div>
</div>

## Typography
<div style="display: flex; align-items: center; justify-content: space-between; gap: 2rem;">
    <div>
        <h2>Lily Script One</h2>
        <p class="pixelify-sans-regular" style="text-align: center; text-indent: 0">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
    </div>
    <div>
        <h2 class="poppins-bold">Poppins</h2>
        <p class="poppins-regular" style="text-align: center; text-indent: 0">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
    </div>
</div>

## The Lumi

<div id="logo_div">
    <div>
        <p>This pet, “Lumi,” is a magical creature from another planet, where beings like them feed on light rays generated by the peace and mental clarity of their masters, who lived in a state of nirvana. However, when attacks began, their masters were wiped out, and Lumi fled to Earth. Here, they seek a new master: someone they can guide toward a sense of fulfillment and inner peace through organization and the pursuit of personal goals.</p>
    </div>
    <img src="{{'/img/multilumi.gif' | relative_url}}">
</div>

<hr class="divider">

## Target-audience

Our target audience consists of teenagers and young adults, mainly between the ages of 15 and 25, who grew up with the popularization of games and products like Tamagotchi, which involve caring for virtual pets. They are Portuguese speakers with diverse academic backgrounds, ranging from high school students to university students and people who do not attend university.

There are no gender distinctions, as the site aims to support anyone who frequently deals with conflicts generated by anxiety, ADHD, and depression, whether diagnosed or undiagnosed. Our main concern is people in need of a space for daily guidance and support, without judgment, so that they can improve their lives outside of screens.