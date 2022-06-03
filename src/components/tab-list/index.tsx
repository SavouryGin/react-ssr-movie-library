import React, { useState } from 'react';
import Tab from './elements/tab';
import TabContent from './elements/tab-content';
import classNames from 'classnames';
import style from './style.module.scss';
import { TabListProps } from 'types/tabs';

function TabList({ tabs, defaultTabId, ...rest }: TabListProps): React.ReactElement {
  const tabsClass = classNames({ [`${rest.className}`]: !!rest.className });
  const tabIds = tabs.map((item) => item.tabId);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [activeTab, setActiveTab] = useState(defaultId);

  const titles = tabs.map((item) => {
    const { tabId, tabTitle } = item;

    return <Tab key={tabId} title={tabTitle} onSelect={setActiveTab} tabId={tabId} isActive={tabId === activeTab} />;
  });

  const tabContent = tabs.find((item) => item.tabId === activeTab)?.tabContent;

  return (
    <div className={tabsClass}>
      <div className={style.tabs} role='tablist'>
        {titles}
      </div>
      <TabContent content={tabContent} tabId={activeTab} />
    </div>
  );
}

export default TabList;
