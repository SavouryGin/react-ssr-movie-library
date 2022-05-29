import React from 'react';
import { CommonProps } from './basic';

export type TabListProps = CommonProps & {
  tabs: TabItem[];
  defaultTabId?: string;
};

export type TabItem = {
  tabContent: React.ReactElement;
  tabTitle: string;
  tabId: string;
};

export type TabProps = {
  title: string;
  tabId: string;
  isActive: boolean;
  onSelect: (value: React.SetStateAction<string>) => void;
};

export type TabContentProps = {
  content: React.ReactElement | undefined;
  tabId: string;
};
