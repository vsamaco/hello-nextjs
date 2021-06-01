import Head from 'next/head'
import Layout from './components/Layout'
import Hero from './components/Hero';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className="bg-white p-4">
        <Hero />
      </main>
    </Layout>
  )
}
