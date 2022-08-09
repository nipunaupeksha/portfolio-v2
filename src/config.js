module.exports = {
  siteTitle: 'Nipuna Upeksha | Software Engineer | Biomedical Enthusiast',
  siteDescription:
    'Nipuna Upeksha is a Software Engineer at WSO2, who loves learning new things and sharing knowledge.',
  siteKeywords:
    'Nipuna Upeksha, Nipuna, Upeksha, nipunaupeksha, software developer, software engineer, biomedical engineer, web developer, java developer, WSO2, Sanota',
  siteUrl: 'https://nipunaupeksha.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Nipuna Upeksha',
  location: 'Galle, Sri Lanka',
  email: 'nipuna.upeksha@gmail.com',
  github: 'https://github.com/nipunaupeksha',
  twitterHandle: '@NipunaUpeksha',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nipunaupeksha',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nipuna-upeksha/',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@nipunaupeksha',
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/users/5941309/nipuna-upeksha',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Pensieve',
      url:'/pensieve'
    }
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
