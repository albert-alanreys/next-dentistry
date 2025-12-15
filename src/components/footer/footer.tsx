import { Container } from '../container/container';

import { FeedbackForm } from './feedback-form/feedback-form';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              <span>Запишитесь</span> к нам на прием
            </h2>
            <p className={styles.description}>
              Просто свяжитесь с нашим администратором. Он быстро предоставит
              вам все необходимые данные и ответит на ваши вопросы.
            </p>
          </div>

          <div className={styles.right}>
            <FeedbackForm />
          </div>
        </div>
      </Container>
    </footer>
  );
};
