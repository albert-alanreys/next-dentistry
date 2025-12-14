import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10',
    );

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const posts = await response.json();

    const newsItems = posts.map((post: any, index: number) => ({
      id: String(post.id),
      title:
        post.title.length > 50
          ? post.title.substring(0, 50) + '...'
          : post.title,
      excerpt:
        post.body.length > 80 ? post.body.substring(0, 80) + '...' : post.body,
      image: `https://picsum.photos/400/470?random=${index}`,
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      category: 'Новость',
    }));

    return NextResponse.json({
      items: newsItems,
      totalCount: posts.length,
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 },
    );
  }
}
