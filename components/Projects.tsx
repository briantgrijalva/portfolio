import PaperShipX from '../assets/img/imgPapershipx.png'
import PomoMode from '../assets/img/bg-pomomode.png'
import inventory from '../assets/img/inventory-app.png'
import todo from '../assets/img/todolist-skill.png'
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
        <ProjectCard name='Pomo Mode' description={<FormattedMessage id="page.home.projects.first" />} technologies={['React Native', 'Styled components', 'UI/UX', 'TypeScript']} reverse={false} image={PomoMode} url='https://play.google.com/store/apps/details?id=com.briantgrijalva.PomoMode'/>
      </div>
      <div className='mt-5 py-4 mb-5'>
        <ProjectCard name='PaperShipX' description={<FormattedMessage id="page.home.projects.second" />} technologies={['Unity', 'C#', 'Illustrator', 'Videogame design']} reverse={false} image={PaperShipX} url='https://play.google.com/store/apps/details?id=com.KirinXstudio.PaperShipX'/>
      </div>
      <div className='mt-5 py-4 mb-5'>
        <ProjectCard name='To-Do App' description={<FormattedMessage id="page.home.projects.third" />} technologies={['React', 'Node JS', 'MongoDB', 'CSS', 'Bootstrap', 'HTML', 'TypeScript', 'UI/UX']} reverse={false} image={todo} url='https://skill-todo-list.netlify.app/' />
      </div>
      <div className='mt-5 py-4 mb-5'>
        <ProjectCard name='Inventory App' description={<FormattedMessage id="page.home.projects.fourth" />} technologies={['React', 'Node JS', 'MongoDB', 'CSS', 'Bootstrap', 'HTML', 'UI/UX']} reverse={false} image={inventory} url='https://inventario-mb.netlify.app/' />
      </div>
    </div>
    )
}