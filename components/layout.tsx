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
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            />
                
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="image-url.jpg"/>

               
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="image-url.jpg" />
            </Head>

            <header className={styles.header}>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/">
                            Artwork
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Stories
                        </Link>
                    </li> */}
                </ul>
            </header>

            <main className={styles.container}>
                {children}
            </main>
        </>
    )
}

export default Layout