
import { GetStaticProps } from 'next';
import { getSingleEntry, getEntriesByType, ContentfulEntry } from '../lib/contentful';
import ContentfulImage from '../components/ContentfulImage';
import RichText from '../components/RichText'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Date from '../components/date'


interface Article {
  fields: {
    title: string
    content: string
    publishedDate: string
    slug: string
  }
}


interface HomePageProps {
  entry: ContentfulEntry | null;
  featuredImage: ContentfulImage | null
  articles: Article[]
}

const Home: React.FC<HomePageProps> = ({ entry, featuredImage, articles }) => {
  if (!entry) {
    // Loading state or error handling
    return <div>Loading...</div>;
  }

  return (
    <Layout 
      title={entry.fields.title}
      description={entry.fields.metaDescription}
    >
      <div className={styles.container}>
        <ContentfulImage asset={featuredImage} />
        <RichText document={entry.fields.content} />
      </div>
      <div className={styles.featuredArticles}>
          <h2 className={utilStyles.skinnyText}>BLOG</h2>
          {articles.map((article) => (
            <ul key={article.fields.title}>
              <li>
                <Link href={`article/${article.fields.slug}`}>
                  {article.fields.title} - <span className={utilStyles.small}><Date dateString={article.fields.publishedDate}/></span>
                </Link>
              </li>
            </ul>
          ))}
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