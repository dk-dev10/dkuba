import classNames from 'classnames/bind';

import st from './style.module.scss';
import mn from '../../../style/main.module.scss';
import ProjectCard from '../../ui/ProjectCard/projectCard';
const cn = classNames.bind(st);

const Projects = () => {
  const projects = [
    {
      title: 'Github Search',
      link: 'gw.dkuba.ru',
      techs: ['React', 'Typescript', 'Tailwind', 'RTKQuery', 'GithubAPI'],
    },
  ];

  return (
    <section className={cn('about', mn.section)}>
      <div className={mn.container}>
        <h2 className={cn('sectionTitle')}>Проекты</h2>

        <div className={st.projects}>
          {projects.map((projects) => (
            <ProjectCard key={projects.title} {...projects} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
