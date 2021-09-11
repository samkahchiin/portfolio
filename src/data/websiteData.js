/* eslint-disable import/prefer-default-export */
const GITHUB_USERNAME = 'samkahchiin';
const REPOSITORY_IDS = [254988213, 328071690];
const PRINCIPAL_REPOSITORY_ID = [405060156];

const seo = {
  portfolioScreenshot: 'https://i.postimg.cc/WzNdbxJk/portfolio-index.png',
  portfolioUrl: 'https://samkahchiin.vercel.app',
  description: 'Sam Kah Chiin Portfolio',
};

const skillsSection = {
  title: 'About Me',
  subTitle: 'Former Chemical Engineering Student who founds passion in Software Development.',
  skills: [
    '⚡ Develop highly interactive Front end / User Interfaces for your web applications',
    '⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks',
    '⚡ AWS and Terraform Certified',
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  // Find those icon that you can't find in fontawesome => https://icons8.com/icons
  softwareSkills: {
    frontend: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'fab fa-html5',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'fab fa-css3-alt',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'fab fa-sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'fab fa-js',
      },
      {
        skillName: 'Reactjs',
        fontAwesomeClassname: 'fab fa-react',
      },
      {
        skillName: 'KnockoutJS',
        fontAwesomeClassname: 'fab fa-js',
      },
      {
        skillName: 'BackboneJS',
        fontAwesomeClassname: 'fab fa-js',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'fab fa-node',
      },
    ],
    backend: [
      {
        skillName: 'ruby',
        imageLink: 'https://img.icons8.com/color/48/000000/ruby-programming-language.png',
      },
      {
        skillName: 'Ruby On Rails',
        imageLink: 'https://img.icons8.com/windows/32/000000/ruby-on-rails.png',
      },
      {
        skillName: 'Postgresql',
        fontAwesomeClassname: 'fas fa-database',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'fab fa-python',
      },
      {
        skillName: 'Django',
        imageLink: 'https://img.icons8.com/ios-filled/50/000000/django.png',
      },
    ],
    devOps: [
      {
        skillName: 'aws',
        fontAwesomeClassname: 'fab fa-aws',
      },
      {
        skillName: 'gcloud',
        imageLink: 'https://img.icons8.com/color/48/000000/google-cloud.png',
      },
      {
        skillName: 'terraform',
        imageLink: '/images/tera.svg',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'fab fa-docker',
      },
      {
        skillName: 'circle CI',
        imageLink: '/images/circleci.svg',
      },
    ],
    others: [
      {
        skillName: 'npm',
        fontAwesomeClassname: 'fab fa-npm',
      },
    ],
  },
};

export {
  GITHUB_USERNAME,
  REPOSITORY_IDS,
  PRINCIPAL_REPOSITORY_ID,
  skillsSection,
  seo,
};
