import * as styles from './style';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
}
