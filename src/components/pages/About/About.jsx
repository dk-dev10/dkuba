import classNames from 'classnames/bind';

import st from './style.module.scss';
import mn from '../../../style/main.module.scss';
const cn = classNames.bind(st);

const About = () => {
  return (
    <section className={cn('about', mn.section)}>
      <div className={mn.container}>
        <div className={cn('aboutInner')}>
          <h2 className={cn('sectionTitle')}>Обо мне</h2>
          <p className={cn('aboutText')}>
            Как упомянул сверху, я - <span>KuBa</span>(мой ник), моё настоящее
            имя - <span>Юсуп Курбанов</span>. Я front-end разработчик с
            коммерчиским опытом более 1 года. Начал я с верстки сайтов и по
            тихоньку начал изучать <u>JavaScript</u> и резко перешёл в{' '}
            <u>React Js</u>😁.
          </p>
          <br />
          <p className={cn('aboutText')}>
            Я учился в ПГУАС с 2018 по 2022, по специальности «Информационные
            системы и технологии». Помимо учебы я проходил курсы в Udemy:{' '}
            <a
              href='https://www.udemy.com/certificate/UC-4c774f59-1e92-474c-9a02-f647d90363da/'
              target='_blank'
              rel='noopener noreferrer'
              className={cn('aboutText')}
            >
              Практический JavaScript (Продвинутый уровень)
            </a>{' '}
            и{' '}
            <a
              href='https://www.udemy.com/certificate/UC-7e7ed6c5-3918-467f-832e-f5144cf8fd26/'
              target='_blank'
              rel='noopener noreferrer'
              className={cn('aboutText')}
            >
              JavaScript + React - с нуля до результата
            </a>
            . Я не останавливаюсь на достигнутом, всегда пытаюсь учить новое.
          </p>
          <br />
          <p className={cn('aboutText')}>
            Мой уровень английского А2. Так почему же я написал свое портфолио в
            Английский, если хочешь что-то выучить, применяй это на практике.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
