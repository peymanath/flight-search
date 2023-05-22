import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import SeoData from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <SeoData>
                <title>Flight Search Engine | Peyman Naderi</title>
                <meta
                    name='description'
                    content='توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer'
                />
                <link
                    rel='canonical'
                    href='https://safrat.peymanath.ir/'
                />
                <meta charSet='utf-8'/>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <link
                    rel='shortcut icon'
                    href='/favicon.png'
                />
                <meta
                    name='theme-color'
                    content='#2c333f'
                />
                <meta
                    property='og:title'
                    content='وبسایت شخصی پیمان نادری | FrontEnd Developer'
                    key='title'
                />
                <meta
                    property='og:type'
                    content='website'
                />
                <meta
                    property='og:url'
                    content='https://peymanath.ir/'
                />
                <meta
                    property='og:image'
                    content='/cover.png'
                />
                <meta
                    property='twitter:image:src'
                    content='/cover.png'
                />
                <meta
                    property='author'
                    content='پیمان نادری'
                />
                <meta
                    property='og:locale'
                    content='fa_IR'
                />
                <meta
                    property='og:description'
                    content='توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer'
                />
                <meta
                    property='og:site_name'
                    content='PeymanATH'
                />
                <meta
                    property='og:url'
                    content='https://peymanath.ir'
                />
                <meta
                    property='twitter:card'
                    content='summary_large_image'
                />
                <meta
                    property='twitter:site'
                    content='@peymanath'
                />
                <meta
                    property='twitter:creator'
                    content='@peymanath'
                />
                <meta
                    property='twitter:title'
                    content='وبسایت پیمان نادری | FrontEnd Developer'
                />
                <meta
                    property='twitter:description'
                    content='توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer'
                />
            </SeoData>
            <Component {...pageProps} />
        </>
    );
}
