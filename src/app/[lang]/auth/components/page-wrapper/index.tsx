import { PageWrapperProps } from './types';
import * as styles from './style';

export default function PageWrapper({
  title,
  description,
  children,
}: PageWrapperProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.contentSection}>{children}</div>
    </div>
  );
}
