import classNames from 'classnames/bind';

import st from './style.module.scss';
const cn = classNames.bind(st);

const WorkCard = () => {
  return <div className={cn('workCard')}>workCard</div>;
};
export default WorkCard;
