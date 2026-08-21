import publicmee from '../assets/img/publicmee.png';
import neweyesmedia from '../assets/img/new-eyes-media.png';
import legends from '../assets/img/legends-never-die.jpg';
import thevetbook from '../assets/img/thevetbook.png';
import thebillone from '../assets/img/thebillone.png';
import ProjectCard from '@/components/ProjectCard';
import { FormattedMessage, useIntl } from 'react-intl';
export default function Projects() {
  const intl = useIntl();
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 col-sm-12 col-lg-6 text-center">
          <h2>
            <FormattedMessage id="page.home.projects.title" />
          </h2>
        </div>
      </div>

      <div className="mt-5 py-4 mb-5">
        <ProjectCard
          name="The Bill One"
          description={<FormattedMessage id="page.home.projects.thebillone" />}
          technologies={[
             intl.formatMessage({ id: 'page.home.projects.thebillone.tech.next' }),
             intl.formatMessage({ id: 'page.home.projects.thebillone.tech.react' }),
             intl.formatMessage({ id: 'page.home.projects.thebillone.tech.typescript' }),
             intl.formatMessage({ id: 'page.home.projects.thebillone.tech.node' }),
             intl.formatMessage({ id: 'page.home.projects.thebillone.tech.postgres' }),
             intl.formatMessage({ id: 'page.home.projects.thebillone.tech.prisma' }),
             intl.formatMessage({ id: 'page.home.projects.thebillone.tech.docker' }),
          ]}
          reverse={false}
          image={thebillone}
          url="https://thebillone.com/"
          addLink
        />
      </div>
      <div className="mt-5 py-4 mb-5">
        <ProjectCard
          name="The Vet Book"
          description={<FormattedMessage id="page.home.projects.thevetbook" />}
           technologies={[intl.formatMessage({ id: 'page.home.projects.tech.tailwind' }), intl.formatMessage({ id: 'page.home.projects.tech.uiux' }), intl.formatMessage({ id: 'page.home.projects.tech.typescript' }), intl.formatMessage({ id: 'page.home.projects.tech.react' })]}
          reverse={false}
          image={thevetbook}
          url="https://thevetbook.com/"
          addLink
        />
      </div>
      <div className="mt-5 py-4 mb-5">
        <ProjectCard
          name="new eyes media"
          description={
            <FormattedMessage id="page.home.projects.neweyesmedia" />
          }
           technologies={[intl.formatMessage({ id: 'page.home.projects.tech.wordpress' }), intl.formatMessage({ id: 'page.home.projects.tech.uiux' })]}
          reverse={false}
          image={neweyesmedia}
          url="https://neweyesmedia.net/"
          addLink
        />
      </div>
      <div className="mt-5 py-4 mb-5">
        <ProjectCard
          name="Publicmee"
          description={<FormattedMessage id="page.home.projects.publicmee" />}
           technologies={[intl.formatMessage({ id: 'page.home.projects.tech.wordpress' }), intl.formatMessage({ id: 'page.home.projects.tech.uiux' })]}
          reverse={false}
          image={publicmee}
          url="https://publicmee.com/"
          addLink
        />
      </div>
      <div className="mt-5 py-4 mb-5">
        <ProjectCard
          name="Legends Never Die"
          description={<FormattedMessage id="page.home.projects.fifth" />}
           technologies={[intl.formatMessage({ id: 'page.home.projects.tech.api' }), intl.formatMessage({ id: 'page.home.projects.tech.typescript' }), intl.formatMessage({ id: 'page.home.projects.tech.react' })]}
          reverse={false}
          image={legends}
          url="https://legends-never-die-bg.netlify.app/"
          addLink
          extraLink="https://developer.riotgames.com/apis"
          extraLinkText="Riot API"
        />
      </div>
    </div>
  );
}
