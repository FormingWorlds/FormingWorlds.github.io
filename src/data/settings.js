// Central site configuration: title, favicons, navigation, footer, socials, SEO.
// Consumed by Base.astro, Header.astro, Footer.astro, and Socials.astro.

export const siteTitle = 'PROTEUS Framework';

export const favicons = {
  light: '/assets/img/brand/PROTEUS_black_on_white_logo_only.png',
  dark: '/assets/img/brand/PROTEUS_white_on_black_logo_only.png',
};

export const header = {
  logoImage: '/assets/img/brand/PROTEUS_white_on_black.png',
  mobileLogoImage: '/assets/img/brand/PROTEUS_white_on_black.png',
  theme: 'dark',
  allowTransparent: 'yes',
};

// Footer brand logos (light/dark variants toggled by CSS via data-theme).
export const footerLogos = {
  light: '/assets/img/brand/PROTEUS_black_on_white.png',
  dark: '/assets/img/brand/PROTEUS_white_on_black.png',
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
        icon: 'ni-books text-primary',
      },
      {
        title: 'Modules',
        url: '/modules',
        icon: 'ni-bold-right text-primary',
      },
    ],
  },
  {
    title: 'Demos',
    url: '/demos',
  },
  {
    title: 'Testing',
    url: '/testing',
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
