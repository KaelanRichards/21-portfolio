import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kaelan | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Kaelan Richards',
  subtitle: `I'm a Digital Builder`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `I was born and raised in Detroi, MI. Currently 
  I spend most of my time building applications for the web. My favorite techstack to use is React, Node, and MySql, 
  although I am flexible`,
  paragraphTwo: `My day job is as a UI developer at United Wholesale Mortgage, the #1 Mortgage Lender. In my free time, 
  I work on Vizcom, look below for more information.  `,
  paragraphThree: `Besides the time I spend behind a computer, I stay very active playing tennis, golf, and whatever 
  else will allow me to spend time outside.`,
  resume:
    'https://docs.google.com/document/d/1CcFQrNE6uLsQP2aojgqwnT6q2Dcy7pqsUMn-gqxdFnc/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'vizcom-sample.png',
    title: 'Vizcom',
    info: 'A suite of web based, Machine Learning tools that shorten the distance between having an idea and bringing it to life ',
    info2: 'Technologies: React, Node, Python, AWS, PyTorch, MySQL',
    url: 'https://www.vizcom.co/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reply-all-project.png',
    title: 'Reply All',
    info: `A social mobile app where friends and family can go head-to-head against each other in response to prompts, 
    while also voting on the best response to those prompts. Climb your way to the top of your group in competitive, 
    social, and fun interactions with friends and family on a daily basis.`,
    info2: 'Technologies: Nativescript(Vue), firebase',
    url: '',
    repo: 'https://github.com/KaelanRichards/reply-all', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'Kadokaelan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/kadonomics',
    },
    {
      id: nanoid(),
      name: '',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kaelanr/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KaelanRichards',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
