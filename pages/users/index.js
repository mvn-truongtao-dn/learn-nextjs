import Link from 'next/link';
import * as React from 'react';
import {user} from '../../model/user'

// export interface PostListProps({posts}) {}

export default function PostList({posts}) {
  return <div>
      <ul>
          <li>
              <Link href="/create">Create</Link>
          </li>
      </ul>
  </div>;
}

export async function getStaticProps(context) {
    const {params} = context;
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();

    return {
        props: {
            posts: data
        }
    }
}