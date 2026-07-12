// Central site configuration: title, favicons, navigation, footer, socials, SEO.
// Consumed by Base.astro, Header.astro, Footer.astro, and Socials.astro.

export const siteTitle = 'PROTEUS Framework';

// Phase-glyph favicons: the `light` file suits a light browser chrome, the
// `dark` file a dark one; Base.astro swaps them on prefers-color-scheme.
export const favicons = {
  light: '/assets/img/brand/favicon-light.png',
  dark: '/assets/img/brand/favicon.png',
};

export const contactEmail = 'proteus_dev@formingworlds.space';

// Ordered top navigation. Items with `submenuItems` render as a dropdown.
export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Documentation',
    submenuItems: [
      {
        title: 'PROTEUS',
        url: 'https://proteus-framework.org/PROTEUS/',
      },
      {
        title: 'Modules',
        url: '/modules',
      },
    ],
  },
  {
    title: 'Demos',
    url: '/demos',
  },
  {
    title: 'Validation',
    url: '/validation',
  },
  {
    title: 'Publications',
    url: '/publications',
  },
  {
    title: 'License',
    url: '/license',
  },
  {
    title: 'People & Contact',
    url: '/people',
  },
];

// Social links. Keyed exactly as the original social_settings so Socials.astro
// can derive the button class, tooltip label, and icon from the key.
export const socialSettings = {
  github_url: 'https://github.com/FormingWorlds/PROTEUS',
};

export const analyticsCode =
  '<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCDRX6PC62"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-ZCDRX6PC62");</script>';
