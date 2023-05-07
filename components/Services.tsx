import styles from '../styles/Home.module.css'
import { MdComputer, MdDesignServices } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';
export default function Services () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <HiCode size={80} color="#555555"/>
            <h3 className='mt-4'><FormattedMessage id="page.home.services.first.title" /></h3>
            <p><FormattedMessage id="page.home.services.first.description" /></p>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <MdComputer size={80} color="#555555"/>
            <h3 className='mt-4'><FormattedMessage id="page.home.services.second.title" /></h3>
            <p><FormattedMessage id="page.home.services.second.description" /></p>
          </div>
        </div>
        
        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <MdDesignServices size={80} color="#555555"/>
            <h3 className='mt-4'><FormattedMessage id="page.home.services.third.title" /></h3>
            <p><FormattedMessage id="page.home.services.third.description" /></p>
          </div>
        </div>

      </div>
    </div>
  )
}