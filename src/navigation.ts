import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';



export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    {
      text: 'How to Join',
      links: [
        {
          text: 'Recreational Classes',
          href: getPermalink('/#features'),
        },
        {
          text: 'Intercollegiate Team',
          href: getPermalink('/services'),
        },
        {
          text: 'Club Executive Team',
          href: getPermalink('/pricing'),
        },
        // {
        //   text: 'About us',
        //   href: getPermalink('/about'),
        // },
        // {
        //   text: 'Contact',
        //   href: getPermalink('/contact'),
        // },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    {
      text: 'Events & Competitions',
      links: [
        {
          text: 'Recreational Classes',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Team Practices',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Competitions',
          href: getPermalink('/landing/click-through'),
        },
        // {
        //   text: 'Product Details (or Services)',
        //   href: getPermalink('/landing/product'),
        // },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/landing/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/landing/subscription'),
        // },
      ],
    },
    {
      text: 'Contact Us',
      links: [
        {
          text: 'About',
          href: getPermalink('/#features'),
        },
        {
          text: 'Meet the Team',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'FAQ',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Social Media',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
    {
      text: 'Sponsorships',
      links: [
        {
          text: 'Sponsors',
          href: getBlogPermalink(),
        },
        {
          text: 'Merch',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'How to become a sponsor',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
      ],
    },
  ],
  //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mcgillcalisthenics/' },
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://chat.whatsapp.com/LooJj9ridYE6DZN5rSLXFo' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ArvoHavrot/mcgillcali.git' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="${getAsset('src/assets/images/calisthenicslogo.png')}" alt="Calisthenics logo" loading="lazy"></img>
    McGill Calisthenics • All rights reserved.
  `,
};
