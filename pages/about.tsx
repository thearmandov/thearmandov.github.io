
import { GetStaticProps } from 'next';
import { getSingleEntry, getEntriesByType, ContentfulEntry } from '../lib/contentful';
import Layout from '../components/layout'
import styles from '../styles/About.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Date from '../components/date'
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


interface Article {
  fields: {
    title: string
    body: string
  }
}


interface HomePageProps {
  entry: ContentfulEntry | null;
}

const Home: React.FC<HomePageProps> = ({ entry }) => {
  if (!entry) {
    return <div>Loading...</div>;
  }

  return (
    <Layout 
      title={entry.fields.title}
      description={entry.fields.metaDescription}
    > 
      <div className={styles.container}>
        <ReactMarkdown remarkPlugins={[gfm]}>{entry.fields.body}</ReactMarkdown>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const entryId = '2q020Fnb6CSLGbIAOTlylo'; 
  const entry = await getSingleEntry(entryId);
  return {
    props: {
      entry
    },
  };
};

export default Home;