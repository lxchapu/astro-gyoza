import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./src/**/*.{astro,ts,tsx,js,jsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      sans: [
        '"Noto Sans SC"',
        '"Source Han Sans SC"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['"Noto Serif SC"', '"Source Han Serif SC"', '"Source Han Serif"', 'serif'],
      mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    extend: {
      colors: {
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
      },
      textColor: {
        primary: 'rgb(var(--color-text-primary))',
        secondary: 'rgb(var(--color-text-secondary))',
      },
      backgroundColor: {
        root: 'rgb(var(--color-bg-root))',
        primary: 'rgb(var(--color-bg-primary))',
        secondary: 'rgb(var(--color-bg-secondary))',
      },
      borderColor: {
        primary: 'rgb(var(--color-border-primary))',
      },
      minHeight: {
        main: 'calc(100vh - 200px)',
      },
      transitionProperty: {
        'bg-color': 'background-color',
      },
      zIndex: {
        '1': '1',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('textColor.primary'),
            '--tw-prose-headings': theme('textColor.primary'),
            '--tw-prose-lead': theme('textColor.primary'),
            '--tw-prose-links': theme('colors.accent/1'),
            '--tw-prose-bold': theme('textColor.primary'),
            '--tw-prose-counters': theme('textColor.primary'),
            '--tw-prose-bullets': theme('textColor.primary'),
            '--tw-prose-hr': theme('borderColor.primary'),
            '--tw-prose-quotes': theme('textColor.secondary'),
            '--tw-prose-quote-borders': theme('colors.accent/.8'),
            '--tw-prose-captions': theme('textColor.secondary'),
            '--tw-prose-code': theme('textColor.primary'),
            '--tw-prose-pre-code': theme('textColor.primary'),
            '--tw-prose-pre-bg': theme('backgroundColor.secondary'),
            '--tw-prose-th-borders': theme('borderColor.primary'),
            '--tw-prose-td-borders': theme('borderColor.primary'),
          },
        },
      }),
    },
  },
  plugins: [typography],
}

export default config
