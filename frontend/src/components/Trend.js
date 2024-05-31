import styles from './Trend.module.css';

export default function Trend({ trendId, header, author, date, body}) {

  return (
    <div className={styles.container}>
        <h2 className={styles.trendHeader}>{trendId}. {header}</h2>
        <div className={styles.trendDetailsContainer}>
          <p className={styles.trendAuthor}> {author} </p>
          <p className={styles.trendDate}> {date} </p>
        </div>
        <h5 className={styles.trendBody}> {body} </h5>
    </div>
  );
}