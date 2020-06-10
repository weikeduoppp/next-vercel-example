import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Post({ params }: { params: { id?: string } }) {
  console.log(params);
  const router = useRouter();
  // 备有
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <div>{params.id}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "ssg-ssr",
        },
      },
      {
        params: {
          id: "pre-rendering",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(process.env.DB_USER);
  // 去请求 fetch id
  return {
    props: {
      params: context.params,
    },
  };
};
