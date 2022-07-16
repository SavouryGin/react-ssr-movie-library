import React from 'react';
import TabList from 'components/tab-list';
import { TabListProps } from 'types/tabs';
import { fireEvent, render, screen } from '@testing-library/react';
import { testTabs } from '__mocks__/tab-list';

const testProps: TabListProps = {
  tabs: testTabs,
};

describe('Tablist component:', () => {
  beforeEach(() => {
    render(<TabList {...testProps} />);
  });

  it('renders the tablist', () => {
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('renders the correct number of tabs', () => {
    expect(screen.getAllByRole('tab')).toHaveLength(testTabs.length);
  });

  it('renders only one tabpanel', () => {
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('displays titles in the tabs', () => {
    const tabs = screen.getAllByRole('tab');
    for (let i = 0; i < tabs.length; i++) {
      expect(tabs[i]).toHaveTextContent(testTabs[i].tabTitle);
    }
  });

  it('the first tab is selected by default', () => {
    expect(screen.getByRole('tab', { selected: true })).toHaveAttribute('id', testTabs[0].tabId);
    // All others tabs are not selected
    expect(screen.getAllByRole('tab', { selected: false })).toHaveLength(testTabs.length - 1);
  });

  it('the tabpanel displays only the content for the selected tab', () => {
    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toHaveTextContent('Tab content 1');
    expect(tabpanel).not.toHaveTextContent('Tab content 2');
    expect(tabpanel).not.toHaveTextContent('Tab content 3');
    expect(tabpanel).not.toHaveTextContent('Tab content 4');
  });

  it('user can select a new tab by clicking on it', () => {
    expect(screen.getByRole('tab', { selected: true })).toHaveAttribute('id', testTabs[0].tabId);
    const tabs = screen.getAllByRole('tab');
    fireEvent.click(tabs[1]);
    expect(screen.getByRole('tab', { selected: true })).toHaveAttribute('id', testTabs[1].tabId);
    fireEvent.click(tabs[3]);
    expect(screen.getByRole('tab', { selected: true })).toHaveAttribute('id', testTabs[3].tabId);
  });

  it('the content of the tabpanel changes when user clicks on a new tab', () => {
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Tab content 1');
    const tabs = screen.getAllByRole('tab');
    fireEvent.click(tabs[1]);
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Tab content 2');
    fireEvent.click(tabs[3]);
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Tab content 4');
  });
});
