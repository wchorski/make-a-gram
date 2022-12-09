import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';

// const {GramMaker} = dynamic(() => import('../components/GramMaker'), {
//   ssr: false,
// })
import { GramMaker } from '../components/GramMaker'

export default function Home() {
  return (<>
      <Head>
        <title>Make a Gram</title>
        <meta name="make a monogram for a photo booth" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script async defer data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID} src={process.env.NEXT_PUBLIC_UMAMI_URL}></script>
      </Head>

      <div className='layout-wrap'>

        <header className='header'>
          <h1>{process.env.NEXT_PUBLIC_BRAND_NAME} | Make a Monogram</h1>
        </header>

        <main >
          <GramMaker />
        </main>

        <footer >
          <a
            href="https://www.williamusic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by {' '}
            <span className={styles.logo}>
              <h3>WilliaMusic</h3>
            </span>
          </a>
        </footer>
      </div>
  </>)
}
