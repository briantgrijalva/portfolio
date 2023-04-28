import Image from 'next/image'
import styles from '../styles/Home.module.css'
import briantGrijalva from '../assets/img/briant-grijalva.jpg'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { font } from '@/assets/fonts/font'
import Head from 'next/head'
import Services from '@/components/Services'
import Projects from '@/components/Projects'

export default function HomePage () {
  return (
    <main className={font.variable}> 
       <Head>
        <title>Briant Grijalva</title>
      </Head>
        <section className={styles.heroSection}>
          <div className='container'>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-7 order-sm-last order-lg-first">
                <div className={styles.heroTitleContainer}>
                  <h1>Briant Grijalva Web Developer</h1>
                  <p className='mt-4'>I&apos;m a full stack web developer. Most of my current experience is building web apps, websites and mobile apps.</p>
                  {/* <a className={styles.primaryBtn} href="#work">My Work</a> */}
                
                  <div className="btn_container mt-5">

                    <a href="#work" className="button">
                      <div className="button__line"></div>
                      <div className="button__line"></div>
                      <span className="button__text">MY WORK</span>
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