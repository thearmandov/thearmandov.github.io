import Head from 'next/head'
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link'

type LayoutProps = {
    title?: string
    description: string
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    title,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                <h1 className={utilStyles.skinnyText}>Armando Villanueva</h1>
                <div className={styles.navButtons}>
                    <Link href="/blog">Blog</Link>
                    <Link className={styles.linkButton} href="/contact">Contact Me</Link>
                </div>
            </header>
            <main className={styles.container}>{children}</main>
        </>
    )
}

export default Layout