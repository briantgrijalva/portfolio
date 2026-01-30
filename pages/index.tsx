import Image from 'next/image';

import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { font } from '@/assets/fonts/font';
import Head from 'next/head';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';
import { Fab } from '@/components/Fab';
import styles from '@/styles/Home.module.css';
import briantGrijalva from '@/assets/img/briant-grijalva.jpg';

export default function HomePage() {
  const { locales } = useRouter();

  const intl = useIntl();

  const title = intl.formatMessage({ id: 'page.home.head.title' });
  const description = intl.formatMessage({
    id: 'page.home.head.meta.description',
  });
  return (
    <main className={font.variable}>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YESP3TP49C"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-YESP3TP49C');`}
      </Script>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="desarrollo web, páginas web, desarrollador web, crear página web, diseño web, aplicaciones web, desarrollo web profesional, programador web, full stack developer, desarrollo de software, creación de sitios web, desarrollo web el salvador, desarrollador web san salvador, páginas web el salvador, diseño web moderno, desarrollo frontend, desarrollo backend, react developer, next.js developer, typescript developer"
        />
        <meta name="author" content="Briant Grijalva" />
        <meta name="geo.region" content="SV" />
        <meta name="geo.placename" content="El Salvador" />
        <meta name="geo.position" content="13.794185;-88.89653" />
        <meta name="ICBM" content="13.794185, -88.89653" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://briantgrijalva.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://briantgrijalva.com/briant-grijalva.jpg"
        />
        <meta property="og:locale" content="es_SV" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://briantgrijalva.com" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://briantgrijalva.com/briant-grijalva.jpg"
        />

        {/* Add hreflang links */}
        <link
          rel="alternate"
          href="https://briantgrijalva.com"
          hrefLang="x-default"
        />
        <link rel="alternate" href="https://briantgrijalva.com" hrefLang="en" />
        <link
          rel="alternate"
          href="https://briantgrijalva.com/es"
          hrefLang="es"
        />
        <link rel="canonical" href="https://briantgrijalva.com" />
      </Head>

      {/* JSON-LD Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            '@id': 'https://briantgrijalva.com',
            name: 'Briant Grijalva - Desarrollo Web',
            description: intl.formatMessage({
              id: 'page.home.head.meta.description',
            }),
            url: 'https://briantgrijalva.com',
            telephone: '+503',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'SV',
              addressRegion: 'San Salvador',
              addressLocality: 'San Salvador',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '13.794185',
              longitude: '-88.89653',
            },
            areaServed: [
              {
                '@type': 'Country',
                name: 'El Salvador',
              },
              {
                '@type': 'Place',
                name: 'Latinoamérica',
              },
              {
                '@type': 'Place',
                name: 'América Central',
              },
            ],
            priceRange: '$$',
            image: 'https://briantgrijalva.com/briant-grijalva.jpg',
            founder: {
              '@type': 'Person',
              name: 'Briant Grijalva',
              jobTitle: 'Full Stack Web Developer',
              image: 'https://briantgrijalva.com/briant-grijalva.jpg',
            },
            sameAs: [
              'https://github.com/briantgrijalva',
              'https://www.linkedin.com/in/briantgrijalva',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Servicios de Desarrollo Web',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Desarrollo Web',
                    description:
                      'Desarrollo de aplicaciones web personalizadas',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Diseño Web',
                    description: 'Creación de sitios web profesionales',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Diseño UI/UX',
                    description: 'Diseño de interfaces de usuario',
                  },
                },
              ],
            },
          }),
        }}
      />

      <section className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-7 order-sm-last order-lg-first">
              <div className={styles.heroTitleContainer}>
                <h1>
                  <FormattedMessage id="page.home.title" />
                </h1>

                <p className="mt-4">
                  <FormattedMessage id="page.home.description" />
                </p>

                <div className="btn_container mt-5">
                  <a href="#work" className="button">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text">
                      <FormattedMessage id="page.home.button" />
                    </span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-5 order-md-first order-sm-first order-first">
              <div className={styles.heroImageContainer}>
                <Image
                  src={briantGrijalva}
                  className={styles.heroImage + ' img-fluid'}
                  alt="Briant Grijalva"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="my-5 py-5">
        <Services />
      </section>
      <section className="mt-5 py-5 mb-5">
        <Projects />
      </section>
      <section id="skills" className="mt-5 pt-5 mb-5 pb-5">
        <Skills />
      </section>
      <section id="contact" className="mt-5 pt-5 pb-5">
        <Contact />
      </section>
      <Fab />
    </main>
  );
}
