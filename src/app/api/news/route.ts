import { NextResponse } from 'next/server';

import {
  NEWS_API_URL,
  NEWS_CATEGORY,
  NEWS_EXCERPT_MAX_LENGTH,
  NEWS_IMAGE_URL,
  NEWS_LIMIT,
  NEWS_TITLE_MAX_LENGTH,
} from '@/constants/news';

export async function GET() {
  try {
    const response = await fetch(`${NEWS_API_URL}?_limit=${NEWS_LIMIT}`);
    if (!response.ok) throw new Error('Failed to fetch news');

    const posts = await response.json();

    const newsItems = posts.map((post: any, index: number) => ({
      id: String(post.id),
      title:
        post.title.length > NEWS_TITLE_MAX_LENGTH
          ? post.title.substring(0, NEWS_TITLE_MAX_LENGTH) + '...'
          : post.title,
      excerpt:
        post.body.length > NEWS_EXCERPT_MAX_LENGTH
          ? post.body.substring(0, NEWS_EXCERPT_MAX_LENGTH) + '...'
          : post.body,
      image: `${NEWS_IMAGE_URL}${index}`,
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      category: NEWS_CATEGORY,
    }));

    return NextResponse.json({ items: newsItems, totalCount: posts.length });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 },
    );
  }
}
