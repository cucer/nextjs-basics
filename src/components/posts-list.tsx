import { getPosts } from '@/actions/actions';
import Link from 'next/link';
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';

export default async function PostsList() {
  // suspense ve loading çalıştığını görmek için 1 saniye beklettim
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const posts = await getPosts();
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();

  return (
    <ul>
      {data.posts.map(
        (post: {
          id: Key | null | undefined;
          title:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<AwaitedReactNode>
            | null
            | undefined;
        }) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        )
      )}
    </ul>
  );
}
