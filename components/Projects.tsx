import PaperShipX from '../assets/img/imgPapershipx.png'
import PomoMode from '../assets/img/bg-pomomode.png'
import inventory from '../assets/img/inventory-app.png'
import todo from '../assets/img/todolist-skill.png'
import ProjectCard from '@/components/ProjectCard'
export default function Projects () {
    return (
      <div className='container'>  
      <div className="row justify-content-center pt-5 mt-5">
        <div className="col-md-12 col-sm-12 col-lg-6 text-center">
          <h2>A few projects that I&apos;ve worked on</h2>
        </div>
      </div>
    
      <div className='mt-5 py-5 mb-5'>
        <ProjectCard name='Pomo Mode' description="A productivity Android app, based on the pomodoro technique, It has a minimal design." technologies={['React Native', 'Styled components', 'UI/UX', 'TypeScript']} reverse={false} image={PomoMode} url='https://play.google.com/store/apps/details?id=com.briantgrijalva.PomoMode'/>
      </div>
      <div className='mt-5 py-5 mb-5'>
        <ProjectCard name='PaperShipX' description="An android videogame I've created, It has a paper inspired design, people who have played it say it's too hard." technologies={['Unity', 'C#', 'Illustrator', 'Videogame design']} reverse={false} image={PaperShipX} url='https://play.google.com/store/apps/details?id=com.KirinXstudio.PaperShipX'/>
      </div>
      <div className='mt-5 py-5 mb-5'>
        <ProjectCard name='To-Do App' description='A minimal To-Do List App.' technologies={['React', 'Node JS', 'MongoDB', 'CSS', 'Bootstrap', 'HTML', 'TypeScript', 'UI/UX']} reverse={false} image={todo} url='https://skill-todo-list.netlify.app/' />
      </div>
      <div className='mt-5 py-5 mb-5'>
        <ProjectCard name='Inventory App' description='An Inventory App that was created by a friend and me just for fun.' technologies={['React', 'Node JS', 'MongoDB', 'CSS', 'Bootstrap', 'HTML', 'UI/UX']} reverse={false} image={inventory} url='https://inventario-mb.netlify.app/' />
      </div>
    </div>
    )
}