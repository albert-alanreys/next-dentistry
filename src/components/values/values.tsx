'use client';

import clsx from 'clsx';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from '../container/container';

import styles from './values.module.css';

const VALUES = [
  {
    id: '01',
    title: 'Стандарты сервиса',
    description:
      'Мы выстраиваем сервис так, чтобы каждый пациент чувствовал внимание, комфорт и уверенность на всех этапах лечения.',
    variant: 'diamond',
  },
  {
    id: '03',
    title: 'Современные технологии',
    description:
      'В работе мы применяем проверенные современные технологии и оборудование для точной диагностики и лечения.',
    variant: 'microscope',
  },
  {
    id: '02',
    title: 'Квалифицированные доктора',
    description:
      'Наши специалисты обладают высоким уровнем подготовки и регулярно повышают квалификацию, следуя лучшим практикам.',
    variant: 'tooth',
  },
  {
    id: '04',
    title: 'Забота о детях',
    description:
      'Мы создаём спокойную и доброжелательную атмосферу, чтобы дети чувствовали себя безопасно и комфортно.',
    variant: 'bear',
  },
];

export const Values = () => {
  return (
    <section className={styles.values}>
      <Container>
        <h2 className={styles.title}>Наши ценности</h2>
      </Container>

      <div className={styles.divider} />

      <div className={styles['desktop-version']}>
        <Container>
          <ul className={styles.list}>
            {VALUES.map(({ id, title, description, variant }) => (
              <li key={id} className={clsx(styles.card, styles[variant])}>
                <div className={styles.content}>
                  <span className={styles.index}>{id}</span>

                  <div className={styles.text}>
                    <h3 className={styles['card-title']}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                  </div>
                </div>

                <div className={styles.media} />
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <div className={styles['mobile-version']}>
        <Container>
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            }}
            spaceBetween={20}
            slidesPerView={1}
            className={styles.swiper}
          >
            {VALUES.map(({ id, title, description, variant }) => (
              <SwiperSlide key={id}>
                <div className={clsx(styles.card, styles[variant])}>
                  <div className={styles.media} />
                  <div className={styles.content}>
                    <span className={styles.index}>{id}</span>
                    <div className={styles.text}>
                      <h3 className={styles['card-title']}>{title}</h3>
                      <p className={styles.description}>{description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </section>
  );
};
