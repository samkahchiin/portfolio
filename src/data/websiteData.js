/* eslint-disable import/prefer-default-export */
const GITHUB_USERNAME = 'samkahchiin'
const REPOSITORY_IDS = [254988213, 328071690]
const PRINCIPAL_REPOSITORY_ID = [405060156]

const START_YEAR = 2016

const landingPage = {
  description: `
    A passionate AWS and Terraform-certified Full Stack Software Developer 🚀 having almost
     ${new Date().getFullYear() - START_YEAR} years of experience building Web
    applications with Ruby on Rails / JavaScript / Nextjs / Reactjs
    / Nodejs / AWS / Terraform and some other cool
    libraries and frameworks.
  `,
  imageLink: '/images/me-with-mac.webp',
}

const seo = {
  siteOwner: 'Sam Kah Chiin',
  siteTitle: 'Sam Kah Chiin Portfolio',
  portfolioScreenshot: 'https://i.postimg.cc/WzNdbxJk/portfolio-index.png',
  portfolioUrl: 'https://samkahchiin.vercel.app',
  description: 'Sam Kah Chiin Portfolio',
}

const skillsSection = {
  title: 'About Me',
  subTitle:
    'Former Chemical Engineering Student who founds passion in Software Development.',
  skills: [
    '⚡ Develop highly interactive Front end / User Interfaces for your web applications',
    '⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks',
    '⚡ AWS and Terraform Certified',
  ],

  profileImageLink: '/images/profile.webp',
  resumeLink:
    'https://docs.google.com/document/d/1PgyewigyTl4gYADQUGhlv2mtmMuE9pc7Xpm4akzowmE/edit?usp=sharing',

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
        imageLink:
          'https://img.icons8.com/color/48/000000/ruby-programming-language.png',
      },
      {
        skillName: 'Ruby On Rails',
        imageLink: 'https://img.icons8.com/windows/32/000000/ruby-on-rails.png',
      },
      {
        skillName: 'Postgresql',
        fontAwesomeClassname: 'fas fa-database',
        imageLink: '/images/psql.svg',
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
}

const achievementSection = {
  title: 'Achievement & Certifications 🏆 ',
  subtitle:
    'Achievements, Certifications, Awards and Some Cool Stuff that I have done !',
  cards: [
    {
      title: 'AWS Certified Solutions Architect Associate',
      subtitle: 'Able to design and implement distributed systems on AWS',
      imageLink: '/images/aws-logo.webp',
      footer: [
        {
          name: 'Certification',
          url: 'https://www.credly.com/badges/3d92da2b-d013-419d-92b5-89595689ca91/public_url',
        },
      ],
    },
    {
      title: 'HashiCorp Certified: Terraform Associate',
      subtitle:
        'Understand the basic concepts and skills associated with open source HashiCorp Terraform',
      imageLink: '/images/terraform-associate.webp',
      footer: [
        {
          name: 'Certification',
          url: 'https://www.credly.com/badges/894f18fb-6e9f-4d41-9da0-6f12db775600/public_url',
        },
      ],
    },
    {
      title: 'HashiCorp Certified: Vault Associate',
      subtitle:
        'Understand the basic concepts, skills, and use cases associated with open source HashiCorp Vault',
      imageLink: '/images/vault-associate.jpeg',
      footer: [
        {
          name: 'Certification',
          url: 'https://www.credly.com/badges/9ea52149-10df-4c5a-876e-e969d5c3930c/public_url',
        },
      ],
    },
    {
      title: "Piano - Trinity's Performance Diploma (ATCL)",
      subtitle:
        'Performance Diplomas that is equivalent in standard to the first year recital of an undergraduate degree',
      imageLink: '/images/trinity.webp',
      footer: [
        {
          name: 'Certification',
          url: 'https://drive.google.com/file/d/1Fog2VmNg9XTHbjfyGL40lDK9Bfas0bD2/view?usp=sharing',
        },
      ],
    },
    {
      title: "Vice-Chancellor's Award",
      subtitle:
        'Best Undergraduate Student of the year in Faculty of Chemical Engineering',
      imageLink: '/images/utm-logo.webp',
      footer: [
        {
          name: 'Certification',
          url: 'https://drive.google.com/file/d/1i-Ir7I3ScyslMe6Dh0bPBOTrIVJ1ly__/view?usp=sharing',
        },
      ],
    },
    {
      title: 'Japanese-Language Proficiency Test - N2',
      subtitle: `
        N2 is the second hardest level and candidate who has passed it demonstrate
        the ability to understand Japanese used in everyday situations,
        and in a variety of circumstances to a certain degree.`,
      imageLink: '/images/n2.webp',
      footer: [
        {
          name: 'Certification',
          url: 'https://drive.google.com/file/d/1LFzkeR8zhqQGD_0IC6ec6sgfGeoZSWi4/view?usp=sharing',
        },
      ],
    },
    {
      title:
        'Essentials of the Satir Growth Model for Personal Growth (Advance Level)',
      subtitle: `
        Satir Growth Model concepts course designed by Dr. Yung Tsang Sun May.
        Satir Growth Model is the model developed by Virginia Satir who is known as the
        "mother of family therapy" or pioneer of family therapy.
        `,
      imageLink: '/images/satir.webp',
      footer: [],
    },
  ],
}

const contactSection = {
  title: "Let's Chat?",
  imageLink: '/images/happy-me.webp',
  linkedinUrl: 'https://www.linkedin.com/in/kahchiin-sam/',
  githubUrl: 'https://github.com/samkahchiin',
  codepenUrl: 'https://codepen.io/earthworm48',
}

export {
  GITHUB_USERNAME,
  REPOSITORY_IDS,
  PRINCIPAL_REPOSITORY_ID,
  skillsSection,
  achievementSection,
  contactSection,
  seo,
  landingPage,
}
