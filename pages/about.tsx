
import { GetStaticProps } from 'next';
import { getSingleEntry, ContentfulEntry } from '../lib/contentful';
import Layout from '../components/layout'
import styles from '../styles/About.module.scss'

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

interface HomePageProps {
  entry: ContentfulEntry | null;
}

const Home: React.FC<HomePageProps> = ({ entry }) => {
  if (!entry) {
    return <div>Loading...</div>;
  }

  const { fields: {title = '', metaDescription = ''} } = entry
  return (
    <Layout 
      title={`${title}`}
      description={`${metaDescription}` }
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