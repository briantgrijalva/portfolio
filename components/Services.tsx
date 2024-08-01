import styles from '../styles/Home.module.css'
import { MdComputer, MdDesignServices } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';
export default function Services () {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 col-sm-12 col-lg-6 text-center">
          <h2><FormattedMessage id="page.home.services.title" /></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <HiCode size={80} color="#555555"/>
            <h3 className='mt-4'><FormattedMessage id="page.home.services.first.title" /></h3>
            <p><FormattedMessage id="page.home.services.first.description" /></p>
            <a href={'#contact'} target='_blank' className="button">
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text"><FormattedMessage id="page.home.services.button" /></span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </a>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <MdComputer size={80} color="#555555"/>
            <h3 className='mt-4'><FormattedMessage id="page.home.services.second.title" /></h3>
            <p><FormattedMessage id="page.home.services.second.description" /></p>
            <a href={'#contact'} target='_blank' className="button">
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text"><FormattedMessage id="page.home.services.button" /></span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </a>
          </div>
        </div>
        
        <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
          <div className={styles.serviceBox}>
            <MdDesignServices size={80} color="#555555"/>
            <h3 className='mt-4'><FormattedMessage id="page.home.services.third.title" /></h3>
            <p><FormattedMessage id="page.home.services.third.description" /></p>
            <a href={'#contact'} target='_blank' className="button">
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text"><FormattedMessage id="page.home.services.button" /></span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}