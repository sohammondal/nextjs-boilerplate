import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { useAppContext } from 'context'
import { GlobalStyles } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useAppContext()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next App</title>
      </Head>
      <ThemeProvider theme={theme || ({} as DefaultTheme)}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
