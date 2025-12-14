import { Values } from '@/components/values/values';

import { getNews } from '@/shared/lib/get-news';

import { News } from '@/components';

export default async function Home() {
  const newsData = await getNews();

  return (
    <>
      <Values />
      <News items={newsData.items} totalCount={newsData.totalCount} />
    </>
  );
}
