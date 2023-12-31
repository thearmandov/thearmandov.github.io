import Layout from '../../components/layout'
import ContentfulImage from '../../components/ContentfulImage';
import Date from '../../components/date'
import styles from '../../styles/Article.module.scss'

import utilStyles from '../../styles/utils.module.scss';

import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs, getEntryBySlug } from '../../lib/contentful'
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


interface EntryProps {
  entry: any
}

const PostPage: React.FC<EntryProps> = ({ entry }) => {
  const { fields: {title = '', metaDescription = '', featuredImage = null} } = entry
  console.log(featuredImage)
  return (
    <Layout
      title={`${title}`}
      description={`${metaDescription}` }
    >
      <article className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          {entry?.fields.featuredImage != null && (
            <ContentfulImage className={utilStyles.imgCenter} asset={featuredImage} />
          )}
         
          <h1 className={utilStyles.titleLarge}>{entry.fields.title}</h1>
          <div className={utilStyles.small}>
            <Date dateString={entry.fields.publishedDate} />
          </div>
        </div>



        <div className={styles.articleContent}>
          <ReactMarkdown remarkPlugins={[gfm]}>{entry.fields.content}</ReactMarkdown>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: string[] = await getAllSlugs()
 
  const paths = slugs.map((slug) => ({ params: { slug }  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<EntryProps> = async ({ params }) => {
  if (!params || !params.slug) {
    return { notFound: true}
  }

  const entry = await getEntryBySlug(params.slug as string)
  if (!entry) return { notFound: true }

  return {
    props: { 
      entry,
    }
  }
}

export default PostPage