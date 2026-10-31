export const projects = [
  {
    title: 'Ryze',
    slug: 'ryze',
    description: 'A gym log and AI coach for lifters who train in 12-week arcs.',
    fullDescription: 'A gym log and AI coach for lifters who train in 12-week arcs. Plan your split, log every set and know exactly when to add weight. Strength ranks, share cards and weekly coach recaps turn each workout into progress you can see.',
    tags: ['Expo', 'React Native', 'Node.js', 'Prisma', 'PostgreSQL', 'Gemini'],
    logo: '/projects/ryze-logo.svg',
    image: '/project-stock.jpg',
    links: {
      demo: 'https://ryze.zyrodev.in',
    }
  },
  {
    title: 'Tane',
    slug: 'tane',
    description: 'A quiet habit app where one plant grows with every check-in and never resets.',
    fullDescription: 'A quiet habit app where one plant grows with every check-in and never resets. A missed day only pauses growth, so there are no streaks to lose and no guilt. A journal, a memory vine and small cohort challenges replace feeds and leaderboards.',
    tags: ['Next.js', 'Expo', 'Go', 'PostgreSQL', 'Astro'],
    logo: '/projects/tane-logo.svg',
    image: '/project-stock.jpg',
    links: {
      demo: 'https://taneapp.zyrodev.in',
    }
  },
  {
    title: 'Cozy Hallway',
    slug: 'cozy-hallway',
    description: 'A multiplayer lofi hangout where every friend gets a room off a shared hallway.',
    fullDescription: 'A multiplayer lofi hangout for up to 8 friends, where everyone gets a room off a shared hallway. Decorate your room, play lofi music, talk with proximity voice and chat, and study side by side with a focus timer. Built in Godot 4 for Steam.',
    tags: ['Godot 4', 'GDScript', 'Steamworks', 'Astro'],
    logo: '/projects/cozy-hallway-logo.png',
    image: '/projects/cozy-hallway.png',
    links: {
      demo: 'https://cozy-hallway.zyrodev.in',
    }
  },
  {
    title: 'Portal Bot',
    slug: 'portal-bot',
    description: 'A Discord bot for anonymous random chat matching.',
    fullDescription: 'A Discord bot that matches you with strangers from around the world for public or anonymous chats. It works in DMs and server channels, with automod, reports, ban tiers and queue handling to keep chats safe. Moderators manage it from a web control panel.',
    tags: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB', 'React'],
    logo: '/projects/portal-bot-logo.png',
    image: '/project-stock.jpg',
    links: {
      demo: 'https://portalbot.zyrodev.in',
    }
  },
  {
    title: 'Concrino Software',
    slug: 'concrino-software',
    description: 'An internal tool for generating architecture and construction quotations.',
    fullDescription: 'An internal tool for architecture and construction firms to generate detailed quotations. Automated calculations and customizable templates replace slow manual estimates. Built as a full-stack TypeScript app with a React frontend and an Express API.',
    tags: ['TypeScript', 'Node.js', 'React', 'MongoDB'],
    image: '/project-stock.jpg',
    links: {}
  },
  {
    title: 'Sky Island',
    slug: 'sky-island',
    description: 'A simple Three.js scene built using basic materials for learning 3D rendering.',
    fullDescription: 'A floating island scene built with Three.js while learning 3D rendering. It uses basic materials, textures, ambient, sun and moon lighting, and camera controls. A live control panel lets you move objects and tweak colors and lights in real time.',
    tags: ['JavaScript', 'Three.js'],
    image: '/projects/sky-island.png',
    links: {
      demo: 'https://sky-island.netlify.app',
      github: 'https://github.com/nishaj0/sky-island',
    }
  },
] as {
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  tags: string[];
  logo?: string;
  image: string;
  links: { demo?: string; github?: string; video?: string };
}[];
