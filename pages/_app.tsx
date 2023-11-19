import { AppProps } from 'next/app'
import '../styles/global.scss';

interface CustomPageProps {
   // props go here
}

function App({ Component, pageProps}: AppProps<CustomPageProps>) {
    return <Component {...pageProps}/>
}

export default App