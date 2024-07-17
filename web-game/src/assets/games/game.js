// src/assets/games/game.js\
import game_1 from './Game 1.webp'
import game_2 from './Game 2.webp'
import game_3 from './Game 3.webp'
import game_4 from './Game 4.webp'
import game_5 from './Game 5.webp'
import game_6 from './Game 6.webp'
import game_7 from './Game 7.webp'
import game_8 from './Game 8.webp'
import game_9 from './Game 9.webp'
import game_10 from './Game 10.webp'
import game_11 from './Game 11.webp'
import game_12 from './Game 12.webp'
import game_16 from './Game 16.webp'
import game_17 from './Game 17.webp'
import game_18 from './Game 18.webp'





const games = [
  {
    id: 1,
    name: "Monkey King 2099",
    price: "$19.99",
    genre: "Adventure / MOBA",
    image: game_1,
    description: "Monkey King 2099 is a futuristic adventure game set in a vibrant and chaotic world. Players embark on a quest to uncover the secrets of the Monkey King's past while battling enemies and solving puzzles.",
    releaseDate: "2023-05-15",
    developer: "Epic Games",
    publisher: "Gaming Corp",
  },
  {
    id: 2,
    name: "Call of Rusi",
    price: "$29.99",
    genre: "FPS / Bang Bang",
    image: game_2,
    description: "Call of Rusi is an action-packed first-person shooter where players engage in intense combat missions across various terrains. With stunning graphics and immersive gameplay, this game takes FPS to a new level.",
    releaseDate: "2022-11-10",
    developer: "Infinity Ward",
    publisher: "Activision",
  },
  {
    id: 3,
    name: "Final Frontier XX",
    price: "$24.99",
    genre: "Adventure / FPS",
    image: game_3,
    description: "Final Frontier XX takes players on an epic space adventure. Navigate through galaxies, battle space pirates, and uncover hidden secrets in this thrilling FPS.",
    releaseDate: "2023-02-20",
    developer: "SpaceX Games",
    publisher: "Galaxy Corp",
  },
  {
    id: 4,
    name: "Need for Dead",
    price: "$39.99",
    genre: "Br / Br / Skrt Skrt",
    image: game_4,
    description: "Need for Dead combines high-speed racing with zombie survival. Race through apocalyptic landscapes, customize your vehicle, and fight off hordes of the undead.",
    releaseDate: "2023-09-01",
    developer: "Racing Studios",
    publisher: "Zombie Inc",
  },
  {
    id: 5,
    name: "Face UR Nightmares",
    price: "$9.99",
    genre: "Horror",
    image: game_5,
    description: "Face UR Nightmares is a horror game that plunges players into a terrifying world of darkness. Solve puzzles and escape from horrifying creatures.",
    releaseDate: "2023-10-31",
    developer: "Scary Games",
    publisher: "Horror Studios",
  },
  {
    id: 6,
    name: "Mother Russia",
    price: "$14.99",
    genre: "Adventure / MOBA",
    image: game_6,
    description: "Mother Russia is a strategy-based MOBA game set in post-apocalyptic Russia. Form alliances, build your base, and conquer territories.",
    releaseDate: "2024-01-15",
    developer: "Russian Game Devs",
    publisher: "Cold War Entertainment",
  },
  {
    id: 7,
    name: "Survive Against All Odds",
    price: "$19.99",
    genre: "FPS / Bang Bang",
    image: game_7,
    description: "Survive Against All Odds is a survival FPS game. Players must scavenge for resources, craft weapons, and fend off enemies in a hostile environment.",
    releaseDate: "2024-03-20",
    developer: "Survival Games",
    publisher: "Lone Wolf Studios",
  },
  {
    id: 8,
    name: "Space Wars",
    price: "$29.99",
    genre: "Adventure / FPS",
    image: game_8,
    description: "Space Wars is an intergalactic FPS game. Players engage in space battles, explore alien planets, and complete missions to save the galaxy.",
    releaseDate: "2024-05-30",
    developer: "Galactic Games",
    publisher: "Universe Corp",
  },
  {
    id: 9,
    name: "Brave New World",
    price: "$24.99",
    genre: "Br / Br / Skrt Skrt",
    image: game_9,
    description: "Brave New World is an open-world adventure game. Explore vast landscapes, interact with NPCs, and shape the story through your choices.",
    releaseDate: "2024-07-22",
    developer: "Open World Studios",
    publisher: "Adventure Corp",
  },
  {
    id: 10,
    name: "Dark Realm",
    price: "$39.99",
    genre: "Horror",
    image: game_10,
    description: "Dark Realm is a horror game that challenges players to survive in a nightmarish world. Solve puzzles, avoid monsters, and uncover the truth behind the darkness.",
    releaseDate: "2024-10-05",
    developer: "Nightmare Games",
    publisher: "Horror Inc",
  },
  {
    id: 11,
    name: "Fantasy Quest",
    price: "$14.99",
    genre: "Adventure / MOBA",
    image: game_11,
    description: "Fantasy Quest is a MOBA game set in a magical world. Choose your hero, team up with friends, and battle against other players in epic arenas.",
    releaseDate: "2025-01-15",
    developer: "Fantasy Devs",
    publisher: "Magic Studios",
  },
  {
    id: 12,
    name: "Survival Horror",
    price: "$9.99",
    genre: "Horror",
    image: game_12,
    description: "Survival Horror is a survival game set in a haunted mansion. Gather resources, solve puzzles, and survive the night against relentless ghosts.",
    releaseDate: "2025-03-10",
    developer: "Ghost Games",
    publisher: "Horror Corp",
  },
  {
    id: 16,
    name: "Apocalypse Racer",
    price: "$29.99",
    genre: "Br / Br / Skrt Skrt",
    image: game_16,
    description: "Apocalypse Racer is a high-octane racing game set in a post-apocalyptic world. Customize your vehicle and race against other survivors.",
    releaseDate: "2025-11-01",
    developer: "Racer Games",
    publisher: "Apocalypse Studios",
  },
  {
    id: 17,
    name: "Galaxy Shooter",
    price: "$24.99",
    genre: "Adventure / FPS",
    image: game_17,
    description: "Galaxy Shooter is an FPS game where players battle against alien invaders. Upgrade your weapons and defend the galaxy from destruction.",
    releaseDate: "2026-01-20",
    developer: "Shooter Games",
    publisher: "Galaxy Corp",
  },
  {
    id: 18,
    name: "City Builder",
    price: "$19.99",
    genre: "Strategy / Simulation",
    image: game_18,
    description: "City Builder is a strategy game where players design and manage their own city. Plan your layout, manage resources, and keep your citizens happy.",
    releaseDate: "2026-03-15",
    developer: "Builder Games",
    publisher: "City Studios",
  }
];


export { games };
