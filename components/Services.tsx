import styles from '../styles/Home.module.css';
import { MdComputer, MdDesignServices, MdStorage } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';

export default function Services() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 col-sm-12 col-lg-6 text-center">
          <h2><FormattedMessage id="page.home.experience.title" /></h2>
        </div>
      </div>
      <div className={styles.experienceTimeline}>
        <article className={styles.timelineItem}>
          <time className={styles.timelineDate}><FormattedMessage id="page.home.experience.head.period" /></time>
          <span className={styles.timelineMarker} aria-hidden="true" />
          <div className={styles.timelineCard}>
            <div className={styles.timelineIcon}><HiCode size={42} color="#555555" aria-hidden="true" /></div>
            <h3><FormattedMessage id="page.home.experience.head.title" /></h3>
            <p className={styles.timelineMobileDate}><FormattedMessage id="page.home.experience.head.period" /></p>
            <p className={styles.timelineCompany}><FormattedMessage id="page.home.experience.head.company" /></p>
            <p><FormattedMessage id="page.home.experience.head.description" /></p>
            <ul className={styles.timelineBullets}>
              <li><FormattedMessage id="page.home.experience.head.bullet.1" /></li>
              <li><FormattedMessage id="page.home.experience.head.bullet.2" /></li>
              <li><FormattedMessage id="page.home.experience.head.bullet.3" /></li>
              <li><FormattedMessage id="page.home.experience.head.bullet.4" /></li>
              <li><FormattedMessage id="page.home.experience.head.bullet.5" /></li>
            </ul>
          </div>
        </article>

        <article className={styles.timelineItem}>
          <time className={styles.timelineDate}><FormattedMessage id="page.home.experience.bill.period" /></time>
          <span className={styles.timelineMarker} aria-hidden="true" />
          <div className={`${styles.timelineCard} ${styles.timelineFeatured}`}>
            <div className={styles.timelineIcon}><MdComputer size={42} color="#555555" aria-hidden="true" /></div>
            <h3><FormattedMessage id="page.home.experience.bill.title" /></h3>
            <p className={styles.timelineMobileDate}><FormattedMessage id="page.home.experience.bill.period" /></p>
            <p className={styles.timelineCompany}><FormattedMessage id="page.home.experience.bill.company" /></p>
            <p><FormattedMessage id="page.home.experience.bill.description" /></p>
            <ul className={styles.timelineBullets}>
              <li><FormattedMessage id="page.home.experience.bill.bullet.1" /></li>
              <li><FormattedMessage id="page.home.experience.bill.bullet.2" /></li>
              <li><FormattedMessage id="page.home.experience.bill.bullet.3" /></li>
              <li><FormattedMessage id="page.home.experience.bill.bullet.4" /></li>
              <li><FormattedMessage id="page.home.experience.bill.bullet.5" /></li>
            </ul>
          </div>
        </article>

        <article className={styles.timelineItem}>
          <time className={styles.timelineDate}><FormattedMessage id="page.home.experience.orange.period" /></time>
          <span className={styles.timelineMarker} aria-hidden="true" />
          <div className={styles.timelineCard}>
            <div className={styles.timelineIcon}><MdStorage size={42} color="#555555" aria-hidden="true" /></div>
            <h3><FormattedMessage id="page.home.experience.orange.title" /></h3>
            <p className={styles.timelineMobileDate}><FormattedMessage id="page.home.experience.orange.period" /></p>
            <p className={styles.timelineCompany}><FormattedMessage id="page.home.experience.orange.company" /></p>
            <p><FormattedMessage id="page.home.experience.orange.description" /></p>
            <ul className={styles.timelineBullets}>
              <li><FormattedMessage id="page.home.experience.orange.bullet.1" /></li>
            </ul>
          </div>
        </article>

        <article className={styles.timelineItem}>
          <time className={styles.timelineDate}><FormattedMessage id="page.home.experience.ditobanx.period" /></time>
          <span className={styles.timelineMarker} aria-hidden="true" />
          <div className={styles.timelineCard}>
            <div className={styles.timelineIcon}><MdDesignServices size={42} color="#555555" aria-hidden="true" /></div>
            <h3><FormattedMessage id="page.home.experience.ditobanx.title" /></h3>
            <p className={styles.timelineMobileDate}><FormattedMessage id="page.home.experience.ditobanx.period" /></p>
            <p className={styles.timelineCompany}><FormattedMessage id="page.home.experience.ditobanx.company" /></p>
            <p><FormattedMessage id="page.home.experience.ditobanx.description" /></p>
            <ul className={styles.timelineBullets}>
              <li><FormattedMessage id="page.home.experience.ditobanx.bullet.1" /></li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
