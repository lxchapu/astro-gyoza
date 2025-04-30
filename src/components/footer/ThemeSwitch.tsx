import { themeAtom, type Theme } from '@/store/theme'
import { useAtom } from 'jotai'
import { useEffect } from 'react' // 导入 useEffect

// 更新 Mermaid 主题
function updateMermaidMedia(theme: Theme): void {
  const mediaMap = {
    system: '(prefers-color-scheme: dark)',
    dark: 'all',
    light: 'none',
  }

  // 确保在客户端执行
  if (typeof document !== 'undefined') {
    document
      .querySelectorAll('[id^="mermaid-dark"]')
      .forEach((el) => el.setAttribute('media', mediaMap[theme] || 'none'))
  }
}

export function ThemeSwitch() {
  const [theme, setTheme] = useAtom(themeAtom)

  // 使用 useEffect 在主题变化时更新 Mermaid 主题
  useEffect(() => {
    updateMermaidMedia(theme)
  }, [theme])

  const left = { light: 4, system: 36, dark: 68 }[theme]

  return (
    <div className="relative inline-block">
      <div
        className="absolute -z-1 top-1 size-[32px] rounded-full bg-primary transition-transform shadow"
        style={{
          transform: `translateX(${left}px)`,
        }}
      ></div>
      <div
        className="p-[3px] flex rounded-full border border-primary"
        role="radiogroup"
      >
        <button
          className="size-[32px] flex items-center justify-center"
          type="button"
          aria-label="Switch to light theme"
          onClick={() => setTheme('light')}
        >
          <i className="iconfont icon-sun"></i>
        </button>
        <button
          className="size-[32px] flex items-center justify-center"
          type="button"
          aria-label="Switch to system theme"
          onClick={() => setTheme('system')}
        >
          <i className="iconfont icon-computer"></i>
        </button>
        <button
          className="size-[32px] flex items-center justify-center"
          type="button"
          aria-label="Switch to dark theme"
          onClick={() => setTheme('dark')}
        >
          <i className="iconfont icon-moon"></i>
        </button>
      </div>
    </div>
  )
}

