import type { NextPage } from 'next';
import Head from 'next/head';

import { css } from '@emotion/css';

const Home: NextPage = () => {
  return (
    <div className={container}>
      <Head>
        <title>Web3 Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={main}>
        <h1 className={title}>Welcome to my Blog</h1>
      </main>

      <footer className={footer}>
        <a
          href="https://debank.com/profile/0x266d6bc2262cc2690ef5c0313e7330995c15eedb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by tseitz.eth
        </a>
      </footer>
    </div>
  )
}

const container = css`
   {
    padding: 0 2rem;
  }
`

const main = css`
   {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const footer = css`
   {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }
  }
`

const title = css`
   {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    & a {
      color: #0070f3;
      text-decoration: none;
      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
      }
    }
  }
`

export default Home
