import styles from './Trend.module.css';

export default function Trend({ trendId, header, author, date, body}) {

  return (
    <div className={styles.container}>
        <h2 className={styles.trendHeader}>{trendId}. {header}</h2>
        <h3 className={styles.trendAuthor}> {author} </h3>
        <h3 className={styles.trendDate}> {date} </h3>
        <h5 className={styles.trendBody}> {body} </h5>
    </div>
  );
}