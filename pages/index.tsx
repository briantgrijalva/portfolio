import Image from 'next/image'
import styles from '../styles/Home.module.css'
import briantGrijalva from '../assets/img/briant-grijalva.jpg'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { font } from '@/assets/fonts/font'
import Head from 'next/head'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Script from 'next/script'
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";


export default function HomePage () {
  const { locales } = useRouter();

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });
  return (
    <main className={font.variable}> 
      {/* <!-- Google tag (gtag.js) --> */}
      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-YESP3TP49C"></Script>
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-YESP3TP49C');`}
      </Script>
       <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/es" hrefLang="es" />
      </Head>
        <section className={styles.heroSection}>
          <div className='container'>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-7 order-sm-last order-lg-first">
                <div className={styles.heroTitleContainer}>
                  <h1><FormattedMessage id="page.home.title" /></h1>
                  
                  <p className='mt-4'><FormattedMessage id="page.home.description" /></p>
                
                  <div className="btn_container mt-5">

                    <a href="#work" className="button">
                      <div className="button__line"></div>
                      <div className="button__line"></div>
                      <span className="button__text"><FormattedMessage id="page.home.button" /></span>
                      <div className="button__drow1"></div>
                      <div className="button__drow2"></div>
                    </a>
                  </div>

                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-5 order-md-first order-sm-first order-first">
                <div className={styles.heroImageContainer}>
                  <Image src={briantGrijalva} className={styles.heroImage + ' img-fluid'} alt="Briant Grijalva" width={500} height={500} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='work' className='my-5 py-5'>
          <Services />
        </section>
        <section className='mt-5 py-5 mb-5'>
          <Projects />
        </section>
        <section id='skills' className='mt-5 pt-5 mb-5 pb-5'>
          <Skills />
        </section>
        <section id='contact' className='mt-5 pt-5 pb-5'>
          <Contact />
        </section>
    </main>
  )
}