import Head from 'next/head'
import { FC } from 'react'
import { Container } from '../styles/global.styles'

const Home: FC = () => {
  return (
    <Container>
      <Head>
        <title>Elegant calculator</title>
      </Head>

      <main></main>
    </Container>
  )
}

export default Home
