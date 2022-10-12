import classNames from 'classnames/bind';

import Button from '../../ui/Button/button';

import st from './style.module.scss';
import mn from '../../../style/main.module.scss';
const cn = classNames.bind(st);

const Home = () => {
  return (
    <section id='home' className={cn('home', mn.section)}>
      <div className={mn.container}>
        <div className={cn('homeInfo')}>
          <h1>
            Привет! <br /> Меня зовут <span>KuBa</span>, <br />Я{' '}
            <span>front-end</span> разработчик.
          </h1>
          <p>с опытом более 1 года</p>
        </div>
        <Button>Резюме</Button>
      </div>
    </section>
  );
};

export default Home;
