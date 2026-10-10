const siteMetadata = {
  title: 'Jack Ryan',
  author: 'Jack Ryan',
  headerTitle: 'jackryan',
  description: 'Member of Technical Staff at Zep AI, Stanford MS 24',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://therealjackryan.com',
  siteRepo: 'https://github.com/jackaldenryan/website',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: '',
  github: 'https://github.com/jackaldenryan',
  twitter: 'https://twitter.com/jackryan_00',
  facebook: '',
  linkedin: 'https://www.linkedin.com/in/therealjackryan/',
  spotify: '',
  steam: '',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
