import React from 'react';
import { TabContentProps } from 'types/tabs';

const TabContent = ({ content, tabId }: TabContentProps) => {
  return (
    <section role='tabpanel' aria-labelledby={tabId} className='tab-list__content'>
      {content}
    </section>
  );
};

export default TabContent;
