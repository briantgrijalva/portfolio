'use client'
import { useEffect, useState } from 'react'
import styles from '../styles/ProjectCard.module.css' 
import Image, { StaticImageData } from "next/image"

interface Props {
  image: string | StaticImageData
  reverse : boolean
  name: string
  description: string
  technologies: string[]
}

export default function ProjectCard ({ image, reverse = false, name, description, technologies }: Props) {
  
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
    <div className='container'>
      {
        reverse ? 
        
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div 
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <h3>{name}</h3>
                <p>{description}</p>
                <div>
                  {technologies.map( t => (<span key={t} className={styles.tech}>{t}</span>))}
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
            <div 
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h3>{name}</h3>
              <p>{description}</p>
              <div>
                {technologies.map( t => (<span key={t} className={styles.tech}>{t}</span>))}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
} 