---
layout: project
title: "O Alquimista"
subtitle: "Wanna make any drink you want?"
image: /img/project_alquimista.jpg
header_img: /img/alquimista_header.jpg
excerpt: Everyone enjoys a good drink, so wouldn't it be great to be able to do them yourself? O Alquimista wants to help you with that! Here you can find a huge catalogue of cocktails and mocktails recipes, save your own drink collections in the library, and share experiences and tips with other users!
order: 2
authors:
  - name: Graziella Custódio
    github: https://github.com/tsukkiprysm
    linkedin: https://www.linkedin.com/in/grazi-custodio/
  - name: Gabriel Azevedo
    github: https://github.com/Maaz73
    linkedin: https://www.linkedin.com/in/gabrielazevedo73/
  - name: Nicole Santos
    github:
figma_embed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/Lc6e4yEsKano28SJp7rKcC/O-Alquimista?node-id=1164-540&viewport=21%2C457%2C0.02&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1164%3A540&show-proto-sidebar=1&page-id=1133%3A390&embed-host=share" allowfullscreen></iframe>'
title_font: "'Lily Script One', system-ui"
title_weight: "400"
---
## What is O Alquimista?

A website inspired by the atmosphere of a bar at night, offering a wide range of cocktail recipes. O Alquimista (“The Alchemist,” in English) features a modern, elegant design with references to time periods often associated with social drinking. The name draws on the idea of alchemy, the art of combining elements in search of the “elixir of life”, paralleling the mixing of ingredients to create unique drinks, presented as potions for users to discover on the site.

Just like the social and relaxed atmosphere of a bar, O Alquimista also offers a social dimension, providing a discussion forum for users to share experiences, their own recipes, and connect with other mixology enthusiasts.

<div class="usb_authors">
    <div style="flex-basis: 70%">
        <h2>Unique Selling Points</h2>
        <ul>
            <li>The existence of an adapter that alters the quantity of ingredients according to the amount of beverage the user wants to produce.</li>
            <li>The "Hands-Free" option allows the preparation instructions to be read aloud with pauses, and the user can then proceed or repeat the step using voice commands.</li>
            <li>A discussion forum for the community to share experiences with beverages, comment on opinions about drinks, and post their own recipes on a dedicated page.</li>
            <li>A fun, youthful and distinct design.</li>
        </ul>
    </div>
    <div style="flex-basis: 30%">
        <h2>Authors</h2>
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
                </div>
            </div>
        {% endfor %}
    </div>
</div>

<hr class="divider">

## Logo emblem
<div id="logo_div">
    <div>
        <p>After the brainstorming session where the concept of an alchemist mixing chemical elements and searching for the "potion of long life" was launched, as already mentioned, we needed a form of representation that united the modern with the ancient or the mystical alchemist.</p>
        <p>In the first attempt, the focus was mainly on the diamond shapes present in the alcohol symbol, and later a glass was added to represent the adaptation to the world of cocktails.</p>
    </div>
    <img src="{{'/img/logo_alquimista.svg' | relative_url}}">
</div>

## Color palette
<div id="cp_div">
    <img src="{{'/img/cp_alquimista.svg' | relative_url}}">
    <div>
        <p>From the initial stages of developing the idea, we envisioned a nighttime bar setting with a dark palette of contrasting colors to simulate neon signs. To achieve this, we used complementary colors: purple, which brought elegance and luxury to the background (conveying the luxury associated with cocktails, which are more than just drinks), and yellow, to add youthfulness, animation, and prominence (creating the sensation of something shining like a neon sign).</p>
    </div>
</div>

## Typography
<div style="display: flex; align-items: center; justify-content: space-between; gap: 2rem;">
    <div>
        <h2 class="lily-script-one-regular">Lily Script One</h2>
        <p class="lily-script-one-regular" style="text-align: center; text-indent: 0">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
    </div>
    <div>
        <h2 class="poppins-bold">Poppins</h2>
        <p class="poppins-regular" style="text-align: center; text-indent: 0">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
    </div>
</div>

<hr class="divider">

## Target-audience

Men and women between 20 and 40 years old with an interest in cocktails and mixology, who want to learn how to make them on their own, and also experiment with diverse flavors beyond the original taste of the drink. People who appreciate its quality and who participate in events or casual gatherings at home, and who speak Portuguese(although this can be changed in the future, if we decide to broaden the language).