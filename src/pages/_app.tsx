import type {AppProps} from 'next/app'
import Head from 'next/head'
import '../styles/base.css'

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>A smile for you - A ministry of Central Baptist Church</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
