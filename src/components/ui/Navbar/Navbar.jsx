import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import st from './style.module.scss';
import main from '../../../style/main.module.scss';
const cn = classNames.bind(st);

const Navbar = () => {
  const style = ({ isActive }) => cn('navItem', { navItemActive: isActive });
  return (
    <nav className={cn('nav')}>
      <div className={cn(main.container)}>
        <div className={cn('navBlock')}>
          <div className={cn('navList')}>
            <NavLink to='/' className={style} end>
              Главная
            </NavLink>
            <NavLink to='about' className={style}>
              Обо мне
            </NavLink>
            <NavLink to='skills' className={style}>
              Навыки
            </NavLink>
            <NavLink to='projects' className={style}>
              Проекты
            </NavLink>
          </div>
          <button>Связаться</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
