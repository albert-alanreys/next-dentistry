import clsx from 'clsx';

import styles from './section.module.css';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'alt' | 'dark';
};

export function Section({
  children,
  className,
  background = 'default',
}: SectionProps) {
  return (
    <section
      className={clsx(
        styles.section,
        styles[`background-${background}`],
        className,
      )}
    >
      {children}
    </section>
  );
}
