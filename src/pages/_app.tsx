import ThemeContextProvider from '@context/theme-context'
import { Global } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC, useEffect } from 'react'
import { globalStyles } from '../styles/global.styles'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Telemarket | Buy online</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeContextProvider>
        <Global styles={globalStyles} />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}

export default MyApp
