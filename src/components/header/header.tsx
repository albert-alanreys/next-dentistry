'use client';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

import { Container } from '../container/container';

import styles from './header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.top}>
          <Container>
            <div className={styles['top-inner']}>
              <button className={styles.accessibility}>
                <Image
                  src='/images/header/glasses.svg'
                  alt=''
                  width={26}
                  height={26}
                />
                <span>Версия для слабовидящих</span>
              </button>

              <a href='#' className={styles['max-link']}>
                <Image
                  src='/images/header/max.svg'
                  alt='MAX'
                  width={21}
                  height={21}
                />
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
                  src='/images/header/logo-big.svg'
                  alt='Логотип клиники'
                  width={260}
                  height={42}
                />

                <button
                  className={styles['hamburger-big']}
                  onClick={() => setIsMenuOpen(true)}
                  aria-label='Открыть меню'
                >
                  <Image
                    src='/images/header/hamburger-big.svg'
                    alt=''
                    width={28}
                    height={28}
                  />
                </button>

                <div className={styles['appointment-mobile']}>
                  <button className={styles.appointment}>
                    <Image
                      src='/images/header/mail.svg'
                      alt=''
                      width={16}
                      height={11}
                    />
                    <span>Записаться</span>
                  </button>
                </div>

                <button
                  className={styles['hamburger-small']}
                  onClick={() => setIsMenuOpen(true)}
                  aria-label='Открыть меню'
                >
                  <Image
                    src='/images/header/hamburger-small.svg'
                    alt=''
                    width={24}
                    height={24}
                  />
                </button>

                <nav className={styles.nav}>
                  <ul className={styles['nav-list']}>
                    <li className={styles['nav-item-primary']}>
                      <a href='#'>
                        Услуги
                        <Image
                          src='/images/header/down-arrow.svg'
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
                          src='/images/header/down-arrow.svg'
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
                        Акции <span className={styles.point} />
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

                <Image
                  src='/images/header/separator.svg'
                  alt=''
                  width={2}
                  height={24}
                />

                <button className={styles.search}>
                  <Image
                    src='/images/header/loupe.svg'
                    alt='Поиск'
                    width={20}
                    height={20}
                  />
                </button>

                <button className={styles.appointment}>
                  <Image
                    src='/images/header/mail.svg'
                    alt=''
                    width={16}
                    height={11}
                  />
                  <span>Записаться</span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <Transition appear show={isMenuOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={setIsMenuOpen}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className={styles['menu-overlay']} />
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='ease-in duration-200'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <DialogPanel className={styles['menu-panel']}>
                <button
                  className={styles['close-btn']}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src='/images/header/close.svg'
                    alt=''
                    width={20}
                    height={20}
                  />
                  <span>Закрыть</span>
                </button>

                <nav className={styles['menu-nav']}>
                  <ul>
                    <li>
                      <a href='#'>Услуги</a>
                    </li>
                    <li>
                      <a href='#'>О клинике</a>
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
                    <li>
                      <a href='#'>Акции</a>
                    </li>
                    <li>
                      <a href='#'>Контакты</a>
                    </li>
                  </ul>
                </nav>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
