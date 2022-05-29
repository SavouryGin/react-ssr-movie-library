import React from 'react';
import classNames from 'classnames';
import { TabProps } from 'types/tabs';

const Tab = ({ title, onSelect, tabId, isActive }: TabProps) => {
  const tabClass = classNames('tab-list__tab', { 'tab-list__tab_active': isActive });

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
