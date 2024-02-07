
import { GetStaticProps } from 'next';
import { getSingleEntry, ContentfulEntry } from '../lib/contentful';
import Layout from '../components/layout'
import styles from '../styles/About.module.scss'

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

interface AboutPageProps {
  entry: ContentfulEntry | null;
}

const About: React.FC<AboutPageProps> = ({ entry }) => {
  if (!entry) {
    return <div>Loading...</div>;
  }

  const { fields: {title = '', metaDescription = '', body = ""} } = entry
  return (
    <Layout 
      title={`${title}`}
      description={`${metaDescription}` }
    > 
      <div className={styles.container}>
        <ReactMarkdown remarkPlugins={[gfm]}>{`${body}`}</ReactMarkdown>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const entryId = '2q020Fnb6CSLGbIAOTlylo'; //About
  const entry = await getSingleEntry(entryId);
  return {
    props: {
      entry
    },
  };
};

export default About;