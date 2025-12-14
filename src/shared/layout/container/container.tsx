import clsx from 'clsx';

import styles from './container.module.css';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
