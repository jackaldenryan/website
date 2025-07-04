const siteMetadata = {
  title: 'Jack Ryan',
  author: 'Jack Ryan',
  headerTitle: 'jackryan',
  description: 'Stanford graduate in Math and Computer Science.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://jackaldenryan.com',
  siteRepo: 'https://github.com/jackaldenryan/website',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dlarroder@gmail.com',
  github: 'https://github.com/jackaldenryan',
  twitter: 'https://twitter.com/jackaldenryan',
  facebook: 'https://facebook.com/jackaldenryan',
  linkedin: 'https://www.linkedin.com/in/jackaldenryan/',
  spotify: 'https://open.spotify.com/user/12162121994?si=e685b3546f414967',
  steam: 'https://steamcommunity.com/id/jackaldenryan/',
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
