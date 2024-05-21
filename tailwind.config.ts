import type { Config } from 'tailwindcss'

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
    },
  },
}

export default config
