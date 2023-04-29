import styles from '../styles/Home.module.css'
import { MdComputer, MdDesignServices } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
export default function Services () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <HiCode size={80} color="#555555"/>
            <h3 className='mt-4'>Web Development</h3>
            <p>If you have the next Twitter in your mind I can help you build anything you&apos;re envisioning.</p>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <MdComputer size={80} color="#555555"/>
            <h3 className='mt-4'>Website building</h3>
            <p>If you&apos;re looking to build a custom website I can help you build a website for your business.</p>
          </div>
        </div>
        
        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <MdDesignServices size={80} color="#555555"/>
            <h3 className='mt-4'>Custom UI/UX Design</h3>
            <p>Whether you need a custom UI/UX design for your website or app I can help you design it for you.</p>
          </div>
        </div>

      </div>
    </div>
  )
}