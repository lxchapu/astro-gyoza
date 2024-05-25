import { analytics } from '@/config.json'

export function WebAnalytics() {
  if (import.meta.env.DEV || !analytics.enable) return null

  return <>
    {
      analytics.umami.websitId && <UmamiAnalytics {...analytics.umami} />
    }
    {
      analytics.google.measurementId && <GoogleAnalytics {...analytics.google} />
    }
  </>
}

function UmamiAnalytics({
  serverUrl,
  websitId,
}: {
  serverUrl?: string,
  websitId: string,
}) {
  const src = `${serverUrl || 'https://cloud.umami.is'}/script.js`

  return <script defer src={src} data-website-id={websitId} />
}


function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string,
}) {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${measurementId}');`,
      }}></script>
    </>
  )
}