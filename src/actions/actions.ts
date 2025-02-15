'use server';

import connectDB from '@/app/lib/connectDB';
import { revalidatePath } from 'next/cache';
import Post from '../models/postModel';

export async function createPost(formData: FormData) {
  // server actionlarında mutlaka auth check yapılmalı, çünkü client tarafında yapılan işlemler burada da yapılabilir

  await connectDB();
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  if (title === '' || body === '') {
    throw new Error('title is required');
  } else {
    const post = new Post({ title, body });

    await post.save();
  }

  // bunu koyduğumuz zaman nextjs defaultandan kaynaklanan cachelemeyi ve gecikmeyi önler, yani her yeni post eklediğimizde sayfayı yenilemeye zorlar
  revalidatePath('/posts');
}

export async function getPosts() {
  await connectDB();
  const posts = await Post.find();
  return posts;
}

export async function getPost(id: string) {
  await connectDB();
  const post = await Post.findById(id);
  return post;
}
