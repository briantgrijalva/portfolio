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
            <p>I can help you with your app development.</p>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <MdComputer size={80} color="#555555"/>
            <h3 className='mt-4'>Website building</h3>
            <p>Build a new Website for your business, rework your website.</p>
          </div>
        </div>
        
        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <MdDesignServices size={80} color="#555555"/>
            <h3 className='mt-4'>Custom UI/UX Design</h3>
            <p>UI / UX Design for your website.</p>
          </div>
        </div>

      </div>
    </div>
  )
}