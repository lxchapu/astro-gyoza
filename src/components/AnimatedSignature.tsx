import Svg from '@/assets/signature.svg?raw'

export function AnimatedSignature() {
  return (
    <div
      className="animated-signature"
      dangerouslySetInnerHTML={{
        __html: Svg,
      }}
    ></div>
  )
}
