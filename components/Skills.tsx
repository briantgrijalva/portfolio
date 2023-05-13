import Image from "next/image";
import react from '../assets/img/skills/react-logo.png'
import htmlCssJs from '../assets/img/skills/htmlcssjs-logo.png'
import node from '../assets/img/skills/node-js.png'
import mongo from '../assets/img/skills/mongo.png'
import ts from '../assets/img/skills/ts.png'
import uiux from '../assets/img/skills/uiux.png'
import bootstrap from '../assets/img/skills/bootstrap.png'
import unity from '../assets/img/skills/unity.png'
import bulma from '../assets/img/skills/bulma.svg'
import next from '../assets/img/skills/next-js.svg'
import nuxt from '../assets/img/skills/nuxt-2.svg'
import vue from '../assets/img/skills/vue-js-1.svg'
import hubspot from '../assets/img/skills/hubspot-1.svg'
import wordpress from '../assets/img/skills/wordpress-blue.svg'

export default function Skills () {
  return (
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={hubspot} className={'img-fluid'} alt="HubSpot" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">HubSpot</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={wordpress} className={'img-fluid'} alt="WordPress" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">WordPress</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={react} className={'img-fluid'} alt="React" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">React JS</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={vue} className={'img-fluid'} alt="Vue JS" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">Vue JS</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={node} className={'img-fluid'} alt="Node" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">Node JS</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={htmlCssJs} className={'img-fluid'} alt="HTML CSS JS" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">HTML, CSS, JS</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={next} className={'img-fluid'} alt="Next JS" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">Next Js</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={nuxt} className={'img-fluid'} alt="Nuxt JS" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">Nuxt Js</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={react} className={'img-fluid'} alt="React Native" width={50} height={50} />
              <div className="">
                <p className="card-text skill-card-p">React Native</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={mongo} className={'img-fluid'} alt="Mongo DB" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">Mongo DB</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={ts} className={'img-fluid'} alt="TypeScript" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">TypeScript</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={uiux} className={'img-fluid'} alt="UI / UX" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">UI / UX</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={bootstrap} className={'img-fluid'} alt="Bootstrap" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">Bootstrap</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={bulma} className={'img-fluid'} alt="Bulma" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">Bulma</p>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3">
          <div className="card-div">
            <Image src={unity} className={'img-fluid'} alt="Unity" width={50} height={50} style={{maxHeight: '50px'}}/>
              <div className="">
                <p className="card-text skill-card-p">Unity</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}