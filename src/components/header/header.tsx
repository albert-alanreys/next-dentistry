import Image from 'next/image';

import { Container } from '@/shared/layout';

import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Container>
          <div className={styles['top-inner']}>
            <button className={styles.accessibility}>
              <Image src='/header/glasses.svg' alt='' width={26} height={26} />
              <span>Версия для слабовидящих</span>
            </button>

            <a href='#' className={styles['max-link']}>
              <Image src='/header/max.svg' alt='MAX' width={21} height={21} />
              <span>Канал MAX</span>
            </a>
          </div>
        </Container>
      </div>

      <div className={styles.main}>
        <Container>
          <div className={styles['main-inner']}>
            <div className={styles.left}>
              <Image
                src='/header/logo-big.svg'
                alt='Логотип клиники'
                width={260}
                height={42}
              />

              <nav className={styles.nav}>
                <ul className={styles['nav-list']}>
                  <li className={styles['nav-item-primary']}>
                    <a href='#'>
                      Услуги
                      <Image
                        src='/header/down-arrow.svg'
                        alt=''
                        width={12}
                        height={12}
                      />
                    </a>
                  </li>

                  <li>
                    <a href='#'>
                      О клинике
                      <Image
                        src='/header/down-arrow.svg'
                        alt=''
                        width={12}
                        height={12}
                      />
                    </a>
                  </li>

                  <li>
                    <a href='#'>Команда</a>
                  </li>

                  <li>
                    <a href='#'>Цены</a>
                  </li>

                  <li>
                    <a href='#'>Результаты работ</a>
                  </li>

                  <li className={styles.promo}>
                    <a href='#'>
                      Акции
                      <span className={styles.point} />
                    </a>
                  </li>

                  <li>
                    <a href='#'>Контакты</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={styles.right}>
              <a href='tel:+74232658950' className={styles.phone}>
                +7 (423) 265-89-50
              </a>

              <Image src='/header/separator.svg' alt='' width={2} height={24} />

              <button className={styles.search}>
                <Image
                  src='/header/loupe.svg'
                  alt='Поиск'
                  width={20}
                  height={20}
                />
              </button>

              <button className={styles.appointment}>
                <Image src='/header/mail.svg' alt='' width={16} height={11} />
                <span>Записаться</span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
