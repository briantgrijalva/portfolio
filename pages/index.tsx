import Image from 'next/image'
import styles from '../styles/Home.module.css'
import briantGrijalva from '../assets/img/briant-grijalva.jpg'
import PaperShipX from '../assets/img/imgPapershipx.png'
import inventory from '../assets/img/inventory-app.png'
import todo from '../assets/img/todolist-skill.png'
import ProjectCard from '@/components/ProjectCard'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function HomePage () {
  return (
    <>
        <section className={styles.heroSection}>
          <div className='container'>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-7 order-sm-last order-lg-first">
                <div className={styles.heroTitleContainer}>
                  <h1>Briant Grijalva Web Developer</h1>
                  <p className='mt-4'>25 year old full stack web developer. Most of my current experience is building web apps, websites and mobile apps.</p>
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
        <section id='work' className='mb-5 pb-5'>
          <div className='mt-5 py-5 mb-5'>
            <ProjectCard name='PaperShipX' description="An android videogame I've created, It has a paper inspired design, people who have played it say it's too hard" technologies={['Unity', 'C#', 'Illustrator', 'Videogame design']} reverse={false} image={PaperShipX} />
          </div>
          <div className='mt-5 py-5 mb-5'>
            <ProjectCard name='To-Do App' description='A minimal To-Do List App' technologies={['React', 'Node JS', 'MongoDB', 'CSS', 'Bootstrap', 'HTML', 'TypeScript']} reverse={true} image={todo} />
          </div>
          <div className='mt-5 py-5 mb-5'>
            <ProjectCard name='Inventory App' description='An Inventory App that was created by a friend and me just for fun' technologies={['React', 'Node JS', 'MongoDB', 'CSS', 'Bootstrap', 'HTML']} reverse={false} image={inventory} />
          </div>
        </section>
        <section id='skills' className='mt-5 pt-5 mb-5 pb-5'>
          <Skills />
        </section>
        <section id='contact' className='mt-5 pt-5 pb-5'>
          <Contact />
        </section>
    </>
  )
}