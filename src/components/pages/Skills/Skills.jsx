import classNames from 'classnames/bind';

import st from './style.module.scss';
import mn from '../../../style/main.module.scss';

import html from '../../../assets/logos/html.svg';
import css from '../../../assets/logos/css.svg';
import js from '../../../assets/logos/js.svg';
import ts from '../../../assets/logos/ts.svg';
import redux from '../../../assets/logos/redux.svg';
import sass from '../../../assets/logos/sass.svg';
import mui from '../../../assets/logos/mui.svg';
// import next from '../../../assets/logos/next-js.svg';
import firebase from '../../../assets/logos/firebase.svg';
import mongodb from '../../../assets/logos/mongodb.svg';
import postman from '../../../assets/logos/postman.svg';
import tailwind from '../../../assets/logos/tailwind.svg';
import blender from '../../../assets/logos/blender.svg';
import trello from '../../../assets/logos/trello.svg';
import yourtrack from '../../../assets/logos/yourtrack.svg';

const cn = classNames.bind(st);

const Skills = () => {
  const logos = [
    { src: html, name: 'html' },
    { src: css, name: 'css' },
    { src: js, name: 'javascript' },
    { src: ts, name: 'typescript' },
    { src: redux, name: 'redux' },
    { src: sass, name: 'sass' },
    { src: mui, name: 'mui' },
    { src: firebase, name: 'firebase' },
    { src: mongodb, name: 'mongodb' },
    { src: postman, name: 'postman' },
    { src: tailwind, name: 'tailwind' },
    { src: blender, name: 'blender' },
    { src: trello, name: 'trello' },
    { src: yourtrack, name: 'yourtrack' },
  ];

  return (
    <section className={cn('skillsSection', mn.section)}>
      <div className={mn.container}>
        <h2 className={cn('sectionTitle')}>Навыки</h2>
        <div className={cn('skills')}>
          {logos.map((logo) => (
            <div key={logo.name} className={cn('skillItem')}>
              <div className={cn('imgBlock')}>
                <img src={logo.src} alt='html' />
              </div>
              <p>{logo.name}</p>
            </div>
          ))}
        </div>

        <div className={cn('warning')}>
          <p>
            <span>!</span> Эти технологии здесь неспроста. Я их использовал по
            необходимости в проектах и/или научился в универе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
