'use client'
import { useEffect, useState } from 'react'
import styles from '../styles/ProjectCard.module.css' 
import Image, { StaticImageData } from "next/image"
import { FormattedMessage } from 'react-intl'

interface Props {
  image: string | StaticImageData
  reverse : boolean
  name: string
  description: string | number | boolean | React.ReactElement | React.ReactFragment | React.ReactPortal 
  technologies: string[]
  url: string
}

export default function ProjectCard ({ image, reverse = false, name, description, technologies, url }: Props) {
  
  const [screen, setScreen] = useState<any>({});

  useEffect(() => {
    setScreen({matches: window.matchMedia("(min-width: 768px)").matches})
  }, []);
    
    const handlerScreen = (e: any) => setScreen({matches: e.matches});

    useEffect(() => {
      window.matchMedia("(min-width: 768px)").addEventListener('change', handlerScreen);
    }, [])

    if (!screen.matches && reverse) {
      reverse = false;
    }

  return (
    <div className={styles.projectCard + ' container'} >
      {
        reverse ? 
        
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={styles.contentContainer} >
                <h3>{name}</h3>
                <p>{description}</p>
                <div>
                  {technologies.map( t => (<span key={t} className={styles.tech}>{t}</span>))}
                  <div className="btn_container mt-4 mb-3">
                  <a href={url} target='_blank' className="button">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text"><FormattedMessage id="page.home.projects.button" /></span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                  </a>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div>
                <Image src={image} alt={name} width={'500'} height={'500'} className={styles.projectImage + ' img-fluid'}/>
              </div>
            </div> 
          </div>
      
        :
        <div className='row'>
          <div className="col-md-6 col-sm-12">
            <div>
              <Image src={image} alt={name} width={'500'} height={'500'} className={styles.projectImage + ' img-fluid'}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div className={styles.contentContainer} >
              <h3>{name}</h3>
              <p>{description}</p>
              <div>
                {technologies.map( t => (<span key={t} className={styles.tech}>{t}</span>))}
                <div className="btn_container mt-4 mb-3">
                  <a href={url} target='_blank' className="button">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text"><FormattedMessage id="page.home.projects.button" /></span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
} 