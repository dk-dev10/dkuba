import classNames from 'classnames/bind';

import st from './style.module.scss';
const cn = classNames.bind(st);

const WorkCard = () => {
  return (
    <div className={cn('workCard')}>
      {/* <div className={cn('line')}></div> */}
      <div className={cn('cardHeader')}>
        <h3>Freelance</h3>
        <span>06.2019 - 10.2019</span>
      </div>
      <p className={cn('cardPosition')}>Верстальщик</p>
      <p>
        <span>Skills:</span> HTML, CSS, JS, WordPress & PHP
      </p>
      <p>Landing page, сайты визитки & Сайты на WordPress</p>
    </div>
  );
};
export default WorkCard;
