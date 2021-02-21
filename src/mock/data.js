import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jorge Casal | Full Stack Javascript Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'JorgeCasal.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.jpg',
    title: 'Post To Database',
    info: 'A versatile MERN app that handles GET/POST/PUT/DELETE requests to MongoDB with Express, Redux state container, and a pinch of Bootstrap. Built with React.',
    info2: '',
    url: 'https://post-to-database.herokuapp.com/',
    repo: 'https://github.com/jorgecasal/postToDatabase',
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'Weather API',
    info: 'A fullstack JS app that works in combination with a weather API & google places API to display data such as; wind direction, temperature preference, and icons.',
    info2: '',
    url: 'https://geolocationweatherapi.netlify.app/',
    repo: 'https://github.com/jorgecasal/weatherAPI', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.jpg',
    title: 'Simplest ToDo',
    info: "This is a terrific ToDo list, and even though it's very simple, it lets you add, edit, and remove items using local storage.",
    info2: '',
    url: 'https://simplest-todo.netlify.app/',
    repo: 'https://github.com/jorgecasal/simplest-todo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/jorgecasal',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/casaljorge/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jorgecasal',
    },
  ],
};

