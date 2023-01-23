//NEXTJS
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
//FONTS
import fontFamily from '../font';
//STYLES
import '../styles/index.css';


export default function ({ Component, pageProps }: AppProps) {
    const router = useRouter();


    return (
        <main className={`${fontFamily} font-sans`}>
            <>
                {
                    router.pathname === "/" &&
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Mifu Website" />
                        <meta name="keywords" content="Mifu, Micro-influencer, Business " />
                        <meta name="author" content="Alex Asher" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title> Mifu | Client </title>
                    </Head>
                }
                {
                    router.pathname === "/creator" &&
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Mifu Website" />
                        <meta name="keywords" content="Mifu, Mirco-Influencer, Community" />
                        <meta name="author" content="Alex Asher" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title> Mifu | Creator </title>
                    </Head>
                }
            </>
            <Component {...pageProps} />
        </main>
    )
}