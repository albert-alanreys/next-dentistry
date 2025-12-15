'use client';

import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NewsItem } from '@/types/news';

import { Container } from '../container/container';

import styles from './news.module.css';

interface NewsProps {
  items: NewsItem[];
  totalCount?: number;
}

export const News = ({ items, totalCount = 10 }: NewsProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}г`;
  };

  return (
    <section className={styles.news}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Новости и блог</h2>
        </div>

        <div className={styles['slider-wrapper']}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView='auto'
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className={styles.slider}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className={styles.slide}>
                <article className={styles.card}>
                  <div className={styles['image-wrapper']}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.image}
                    />
                    <button className={styles['category-button']}>
                      {item.category}
                    </button>
                  </div>

                  <div className={styles.content}>
                    <time className={styles.date}>{formatDate(item.date)}</time>
                    <h3 className={styles['card-title']}>{item.title}</h3>
                    <p className={styles.excerpt}>{item.excerpt}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={handleNext}
            className={styles['scroll-button']}
            aria-label='Следующий слайд'
          >
            <img src='/images/scroll-button.svg' alt='' />
          </button>
        </div>

        <div className={styles.footer}>
          <button className={styles['all-news-button']}>
            Все публикации <span className={styles.count}>({totalCount})</span>
          </button>
        </div>
      </Container>
    </section>
  );
};
