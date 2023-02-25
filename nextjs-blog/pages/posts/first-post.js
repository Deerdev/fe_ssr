import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


export default function FirstPost() {
  return <Layout>
    <Head>
      <title>First Post</title>
      {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
    </Head>
    <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
    />
    <h1>First Post</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
  </Layout>
}

// Using getServerSideProps on server side render
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}

/// https://swr.vercel.app/
// 在 Client-side Rendering 数据
// 适用于 Private, user-specific pages where SEO is not relevant 
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}