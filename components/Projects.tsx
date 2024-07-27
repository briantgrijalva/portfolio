import publicmee from '../assets/img/publicmee.png'
import neweyesmedia from '../assets/img/new-eyes-media.png'
import legends from '../assets/img/legends-never-die.jpg'
import ProjectCard from '@/components/ProjectCard'
import { FormattedMessage } from 'react-intl'
export default function Projects () {
    return (
      <div className='container'>  
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 col-sm-12 col-lg-6 text-center">
          <h2><FormattedMessage id="page.home.projects.title" /></h2>
        </div>
      </div>
    

      <div className='mt-5 py-4 mb-5'>
        <ProjectCard
          name='new eyes media'
          description={<FormattedMessage id="page.home.projects.neweyesmedia" />}
          technologies={['WordPress', 'Website Design', 'UI/UX']}
          reverse={false} image={neweyesmedia}
          url='https://neweyesmedia.net/'
          addLink
        />
      </div>
      <div className='mt-5 py-4 mb-5'>
        <ProjectCard
          name='Publicmee'
          description={<FormattedMessage id="page.home.projects.publicmee" />}
          technologies={['WordPress', 'Website Design', 'UI/UX']}
          reverse={false} image={publicmee}
          url='https://publicmee.com/'
          addLink
        />
      </div>
      <div className='mt-5 py-4 mb-5'>
        <ProjectCard
          name='Legends Never Die'
          description={<FormattedMessage id="page.home.projects.fifth" />}
          technologies={['Next js', 'Tailwind', 'UI/UX', 'TypeScript', 'React']}
          reverse={false} image={legends}
          url='https://legends-never-die-bg.netlify.app/'
          addLink
          extraLink='https://developer.riotgames.com/apis'
          extraLinkText='Riot API'
        />
      </div>
      
    </div>
    )
}