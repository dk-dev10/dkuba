import st from './style.module.scss';

const ProjectCard = ({ title, link, techs }) => {
  return (
    <div className={st.card}>
      <div className={st.cardHeader}>{title}</div>
      <div className={st.cardInner}>
        <ul>
          {techs.map((t) => (
            <li key={t}>#{t}</li>
          ))}
        </ul>
      </div>
      <a
        href={`http://${link}`}
        target='_blank'
        rel='noreferrer'
        className={st.cardProjectLink}
      >
        Подробнее
      </a>
    </div>
  );
};

export default ProjectCard;
