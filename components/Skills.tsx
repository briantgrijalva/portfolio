import Image, { StaticImageData } from 'next/image';
import react from '../assets/img/skills/react-logo.png';
import node from '../assets/img/skills/node-js.png';
import ts from '../assets/img/skills/ts.png';
import next from '../assets/img/skills/next-js.svg';
import mongo from '../assets/img/skills/mongo.png';
import javascript from '../assets/img/skills/JavaScript.png';
import tailwind from '../assets/img/skills/Tailwind.webp';
import restApi from '../assets/img/skills/restApi.png';
import postgres from '../assets/img/skills/postgresql.webp';
import prisma from '../assets/img/skills/prisma.png';
import mysql from '../assets/img/skills/mysql.png';
import docker from '../assets/img/skills/docker.webp';
import git from '../assets/img/skills/git.png';
import github from '../assets/img/skills/github.png';
import cloudflare from '../assets/img/skills/cloudflare.png';
import supabase from '../assets/img/skills/supabase.jpg';
import { FormattedMessage } from 'react-intl';
import styles from '../styles/Home.module.css';

type Skill = { id: string; image?: StaticImageData | string };

const skills: Skill[] = [
  { id: 'typescript', image: ts },
  { id: 'javascript', image: javascript },
  { id: 'react', image: react },
  { id: 'next', image: next },
  { id: 'native', image: react },
  { id: 'tailwind', image: tailwind },
  { id: 'node', image: node },
  { id: 'apis', image: restApi },
  { id: 'postgres', image: postgres },
  { id: 'prisma', image: prisma },
  { id: 'mysql', image: mysql },
  { id: 'mongo', image: mongo },
  { id: 'docker', image: docker },
  { id: 'git', image: git },
  { id: 'github', image: github },
  { id: 'cloudflare', image: cloudflare },
  { id: 'supabase', image: supabase },
];

export default function Skills() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 col-sm-12 col-lg-6 text-center">
          <h2>
            <FormattedMessage id="page.home.skills.title" />
          </h2>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {skills.map((skill) => (
          <div
            className="col-lg-2 col-md-3 col-sm-4 col-6 pt-3 pb-3"
            key={skill.id}
          >
            <div className="card-div">
              {skill.image ? (
                <Image
                  src={skill.image}
                  className="img-fluid"
                  alt=""
                  width={50}
                  height={50}
                  style={{ maxHeight: '50px' }}
                  unoptimized={typeof skill.image === 'string'}
                />
              ) : (
                <span className={styles.skillPlaceholder} aria-hidden="true">
                  {skill.id.slice(0, 2).toUpperCase()}
                </span>
              )}
              <div>
                <p className="card-text skill-card-p">
                  <FormattedMessage id={`page.home.skills.${skill.id}`} />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
