export function Link({ href, children }: { href: string; children: string }) {
  const isExternal = href.startsWith('http')
  return (
    <a
      className="hover:text-accent/80 hover:underline underline-offset-2"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer external' : undefined}
    >
      {children}
    </a>
  )
}
