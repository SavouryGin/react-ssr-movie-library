import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { TabProps } from 'types/tabs';

const Tab = ({ title, onSelect, tabId, isActive }: TabProps) => {
  const tabClass = classNames(style.tab, { [style.active]: isActive });

  const onClickTab = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.stopPropagation();
    onSelect(tabId);
  };

  return (
    <h3 role='tab' id={tabId} onClick={onClickTab} className={tabClass} aria-selected={isActive} data-testid={tabId}>
      {title}
    </h3>
  );
};

export default Tab;
