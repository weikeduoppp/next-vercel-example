// html/head
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
// 路由
import Router, { useRouter } from "next/router";
// 请求
import fetch from "unfetch";
import useSWR from "swr";


// 动态加载
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() => import("components/hello"), {
  // 带有自定义加载组件
  loading: () => <div>loading....</div>,
});

const fetcher = (url) => fetch(url).then((r) => r.json());



export default function Home({
  allPostsData,
}: {
  allPostsData: { date: string; title: string; id: string }[];
}) {
  const { data, error } = useSWR("/api/post", fetcher);


  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
 
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>

      <main>
      
      </main>

 

      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

// 
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {

    },
  };
};
