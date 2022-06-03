import React from 'react';
import style from './style.module.scss';
import { TabContentProps } from 'types/tabs';

const TabContent = ({ content, tabId }: TabContentProps) => {
  return (
    <section role='tabpanel' aria-labelledby={tabId} className={style.content}>
      {content}
    </section>
  );
};

export default TabContent;
