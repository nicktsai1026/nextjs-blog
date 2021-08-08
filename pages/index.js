import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello world! This is Nick, a senior software developer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <h1 className="title">
        Read{' '}
        <Link href="/posts/first-post">
          <a>first post page!</a>
        </Link>
        {/* Learn <a href="https://nextjs.org">Next.js!</a> */}
      </h1>
    </Layout>
    
  )
}