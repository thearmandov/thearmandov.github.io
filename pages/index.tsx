
import { GetStaticProps } from 'next';
import { getSingleEntry, ContentfulEntry } from '../lib/contentful';
import RichText from '../components/RichText'
import Layout from '../components/layout'

interface HomePageProps {
  entry: ContentfulEntry | null;
}

const Home: React.FC<HomePageProps> = ({ entry }) => {
  if (!entry) {
    // Loading state or error handling
    return <div>Loading...</div>;
  }

  return (
    <Layout home>
      <h1>{entry.fields.title}</h1>
      <div>
        <RichText document={entry.fields.content} />
      </div>

      {/* Render other entry details as needed */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const entryId = '75dvRGS3EeFqIIUvEJyWNg'; //Home page
  const entry = await getSingleEntry(entryId);
  return {
    props: {
      entry,
    },
  };
};

export default Home;