// import defaultTheme from 'tailwindcss/defaultTheme';
// import plugin from 'tailwindcss/plugin';
// import typographyPlugin from '@tailwindcss/typography';

// export default {
//   content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: 'var(--aw-color-primary)',
//         secondary: 'var(--aw-color-secondary)',
//         accent: 'var(--aw-color-accent)',
//         default: 'var(--aw-color-text-default)',
//         muted: 'var(--aw-color-text-muted)',
//       },
//       fontFamily: {
//         sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
//         serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
//         heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
//       },

//       animation: {
//         fade: 'fadeInUp 1s both',
//       },

//       keyframes: {
//         fadeInUp: {
//           '0%': { opacity: 0, transform: 'translateY(2rem)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//       },
//     },
//   },
//   plugins: [
//     typographyPlugin,
//     plugin(({ addVariant }) => {
//       addVariant('intersect', '&:not([no-intersect])');
//     }),
//   ],
//   darkMode: 'class',
// };
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         scroll: 'scroll 20s linear infinite',
//       },
//       keyframes: {
//         scroll: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },

      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
        scroll: 'scroll 20s linear infinite', // <-- Added here
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scroll: { // <-- Added here
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },

  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],

  darkMode: 'class',
};
