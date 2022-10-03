import classNames from 'classnames/bind';

import st from './style.module.scss';
const cn = classNames.bind(st);

const Button = ({ children, white }) => {
  return <button className={cn('btn', { btnWhite: white })}>{children}</button>;
};

export default Button;
