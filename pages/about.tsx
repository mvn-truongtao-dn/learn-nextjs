import * as React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/common/header';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPathsContext } from 'next';
import { AdminLayout, MainLayout } from '@/components/layout';
// const Header = dynamic(() => import('@/components/common/header'), {
//   ssr: false,
// });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();
  console.log('About query', router.query);
  const page = router.query?.page;
  const [postList, setPostList] = useState([]);
  // xử lý dữ liệu ở phía client k tác động tới server CSR
  useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await response.json();
      setPostList(data.data);
      //useSWR() sử dụng làm phần data Fetch
    })();
  }, [page]);
  const handleNextClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };
  return (
    <>
      <h1>About page</h1>
      <Header></Header>
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next Page</button>
    </>
  );
}
AboutPage.Layout = AdminLayout;

export async function getStaticProps(context: GetStaticPathsContext) {
  console.log('get static props');

  return {
    props: {},
  };
}
