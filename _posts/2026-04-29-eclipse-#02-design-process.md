---
layout: posts
title: "Eclipse #02 Design process"
date: 2026-04-29
image: /img/postimg/p_ec_260429.jpg
excerpt: The game is moving forward, fortunately. We are a bit behind in my opinion...
tags: [eclipse]
---

<img src="{{'/img/postimg/p_ec_260429.jpg' | relative_url}}" alt="">

The game is moving forward, fortunately. We are a bit behind in my opinion, but things are unfolding. Recently, I finished the idle and walking animations for the first sprite the player controls—or "shadow Dante," as I like to call him—and I am already working on the sprite with the character’s final appearance.

The main mechanic of Eclipse is searching for pieces of photographs, collecting them, and then reconstructing the photos in the designated frame to remind the character of information about himself and his life, making it possible to advance in the game. Each area has one or two main memories, which are the only ones that must be discovered to proceed.

We had some difficulty figuring out what kind of puzzles would be included in the game. We received a great suggestion from one of our initial testers to make the puzzles related to memories, such as a memory game. From there, we gathered several real-life games that generally exercise the player's memory, coming to the conclusion to create the following puzzles:

- Shell Game
    - Important clues or keys to unlock other areas will be held by a figure (NPCs within the game). This figure multiplies and shuffles, and the Player has to discover which one holds the clue. The difficulty can vary in terms of the number of phases, figures, and speed.
- Find the Differences
  - There are at least two similar images, but with some differences. The player has to discover which one is more "correct." They only know which image is right through clues given by figures; it is up to them to figure out which clues are reliable or not to pick the right image.
  - They need to know which one holds the correct memory to put in the frame and unlock the memory.
  - The figure only gives two chances; if the player doesn't find it within those chances, they lose the opportunity.
  - This cannot be used for memories relevant to progressing in the story.
- Repeat the Sequence
  - Can be used to access different rooms/areas. The floor falls away, except for the correct paths; the player has to find the map with the right path to know how to cross.
- Order Numbers
  - Numbers or words, all jumbled, where the player pushes pieces until they are in order. Useful for discovering names, information, codes, etc.

These puzzles will not only serve for the player to advance through the map but also to discover more information about what is happening to the protagonist.

We have also started the level design. At the moment, I have only drawn the first and second levels, since we are short on time to present the hi-fi prototype and it is enough to show the initial part of the game.



Level 1 is the introduction and "tutorial" of the game. We aren't going to give direct instructions on what the player has to do, to maintain the element of mystery, but we will use an NPC to indicate that they need to search for something to fix the frame at the end of the map. The main memory is related to the character's appearance and will take place during his school days; therefore, we decided to represent a school environment with the map. We have some tiles ready for this level, and as of today, only the objects are missing.

Level 2 is related to the character's personality and roots; he will discover his family and his passion for photography. The map will represent a house environment, which would be the home where the main character grew up. Currently, we don't have any tiles for this level yet.

My colleague Inês has been doing a wonderful job on the game's cutscenes. You can check her promotion platforms in the project's authors section. We already have the initial scene animated and the first memory scene in progress. I have been trying to bring my pixel art closer to her style so it doesn't look too different and cause a break in the game's consistency. It is quite difficult to replicate an illustration style in pixel art...

The GUI design, some tiles, and the objects still need to be defined. We have to deliver this prototype in a week, but I think we're going to make it.