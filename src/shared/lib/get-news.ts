import { NewsItem } from '@/types/news';

interface NewsResponse {
  items: NewsItem[];
  totalCount: number;
}

export async function getNews(): Promise<NewsResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/news`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data: NewsResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getNews:', error);
    return {
      items: [],
      totalCount: 0,
    };
  }
}
