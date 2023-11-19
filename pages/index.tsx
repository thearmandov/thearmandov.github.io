
import { GetStaticProps } from 'next';
import { getSingleEntry, getEntriesByType, ContentfulEntry } from '../lib/contentful';
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Date from '../components/date'

interface Article {
  fields: {
    title: string
    content: string
    excerpt: string | null
    publishedDate: string
    slug: string
  }
}


interface HomePageProps {
  entry: ContentfulEntry | null
  featuredImage: ContentfulImage | null
  articles: Article[]
}

const Home: React.FC<HomePageProps> = ({ entry, featuredImage, articles }) => {
  if (!entry) {
    return <div>Loading...</div>;
  }

  return (
    <Layout 
      title={entry.fields.title}
      description={entry.fields.metaDescription}
    > 
      <h1 className={utilStyles.skinnyText}> Armando Villanueva </h1>
      <br/>
    
      <div className={styles.container}>
        {/* <ReactMarkdown remarkPlugins={[gfm]}>{entry.fields.body}</ReactMarkdown> */}
        <br />
          <div className={styles.postList}>
            <div>
              <h2 className={`${styles.listTitle} ${utilStyles.skinnyText}`}>LATEST POSTS</h2>
            </div>
            <ul>
              {articles.map((article) => (
                  <li  key={article.fields.title}>
                    <Link href={`article/${article.fields.slug}`}>
                      {article.fields.title}
                    </Link>
                   
                    {article.fields.excerpt != undefined && (
                     <span className={utilStyles.small}>
                        <br />
                        <span className={utilStyles.darker}>{article.fields.excerpt}</span>
                      </span>
                    )}
                    <br/>
                    <span className={utilStyles.smaller}><Date dateString={article.fields.publishedDate}/></span>
                  </li>
              ))}
            </ul>
          </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const entryId = '75dvRGS3EeFqIIUvEJyWNg'; //Home page
  const entry = await getSingleEntry(entryId);
  const featuredImage = entry?.fields.featuredImage
  const articles = await getEntriesByType('article')
  return {
    props: {
      entry,
      featuredImage,
      articles
    },
  };
};

export default Home;