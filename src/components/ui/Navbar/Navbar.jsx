import { Link } from 'react-scroll';

import classNames from 'classnames/bind';
import st from './style.module.scss';
import main from '../../../style/main.module.scss';
const cn = classNames.bind(st);

const Navbar = () => {
  return (
    <nav className={cn('nav')}>
      <div className={cn(main.container)}>
        <div className={cn('navBlock')}>
          <div className={cn('navList')}>
            <Link
              to='home'
              className={st.navItem}
              activeClass={st.navItemActive}
              spy={true}
              smooth={true}
              duration={500}
            >
              Главная
            </Link>
            <Link
              to='about'
              className={st.navItem}
              activeClass={st.navItemActive}
              spy={true}
              smooth={true}
              duration={500}
              // offset={-2}
            >
              Обо мне
            </Link>
            <Link
              to='skills'
              className={st.navItem}
              activeClass={st.navItemActive}
              spy={true}
              smooth={true}
              duration={500}
              // offset={-2}
            >
              Навыки
            </Link>
            <Link
              to='projects'
              className={st.navItem}
              activeClass={st.navItemActive}
              spy={true}
              smooth={true}
              duration={500}
              // offset={}
            >
              Проекты
            </Link>
          </div>
          <button>Связаться</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
