import styles from '../../styles/News.module.css';
import { useRouter } from 'next/router';

export default function News({ pageNumber, articles }) {
  const router = useRouter();

  return (
    <div className="page-container">
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <h1
              className={styles.postTitle}
              onClick={() => (window.location.href = article.url)}
            >
              {article.title}
            </h1>
            <p>{article.description}</p>
            {article.urlToImage && (
              <a href={article.url}>
                <img src={article.urlToImage} />
              </a>
            )}
          </div>
        ))}
      </div>

      <div className={styles.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/news/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 1 ? styles.disabled : styles.active}
        >
          Prev
        </div>

        <div>{pageNumber}</div>

        <div
          onClick={() => {
            if (pageNumber < 5) {
              router
                .push(`/news/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 5 ? styles.disabled : styles.active}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const pageNumber = ctx.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=gaming+OR+xbox+OR+nintendo+OR+playstation&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await res.json();
  const { articles } = data;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
