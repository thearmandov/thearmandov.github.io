
import { GetStaticProps } from 'next';
import { getSingleEntry, ContentfulEntry } from '../lib/contentful';
import ContentfulImage from '../components/ContentfulImage';
import RichText from '../components/RichText'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

interface HomePageProps {
  entry: ContentfulEntry | null;
  featuredImage: ContentfulImage | null
}

const Home: React.FC<HomePageProps> = ({ entry, featuredImage }) => {
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

      {/* Render other entry details as needed */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const entryId = '75dvRGS3EeFqIIUvEJyWNg'; //Home page
  const entry = await getSingleEntry(entryId);
  
  const featuredImage = entry?.fields.featuredImage
  return {
    props: {
      entry,
      featuredImage
    },
  };
};

export default Home;