import 'react-toastify/dist/ReactToastify.css'
// TODO: Move to components
// import 'cropperjs/dist/cropper.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { UserConfig, appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import nextI18nextConfig from 'next-i18next.config'

const queryClient = new QueryClient()

// const emptyInitialI18NextConfig: UserConfig = {
//   i18n: {
//     defaultLocale: nextI18nextConfig.i18n.defaultLocale,
//     locales: nextI18nextConfig.i18n.locales,
//   },
// };

function MyApp({ Component, pageProps }: AppProps) {
  const GTM_ID: string = process.env.NEXT_PUBLIC_GTM_ID as string

  return (
    <main >
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Component {...pageProps} />
      </QueryClientProvider>
      {GTM_ID && (
        <Script id="gtag" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
      )}
      {GTM_ID && (
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}');
          `}
        </Script>
      )}
    </main>
  )
}

export default appWithTranslation(MyApp)
