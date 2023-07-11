import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TabsComponent from './index';

describe('TabsComponent', () => {
  const tabs = [
    {
      label: 'Tab 1',
      badge: '1',
    },
    {
      label: 'Tab 2',
      badge: '2',
    },
    {
      label: 'Tab 3',
      badge: '3',
      disabled: true,
    },
  ];

  it('renders without crashing', () => {
    render(
      <TabsComponent tabs={tabs}>
        <div>Tab 1 content</div>
        <div>Tab 2 content</div>
        <div>Tab 3 content</div>
      </TabsComponent>,
    );
  });

  it('renders the correct number of tabs', () => {
    render(
      <TabsComponent tabs={tabs}>
        <div>Tab 1 content</div>
        <div>Tab 2 content</div>
        <div>Tab 3 content</div>
      </TabsComponent>,
    );
    waitFor(() => expect(screen.getAllByRole('tab')).toHaveLength(3));
  });

  it('renders the correct tab content when a tab is clicked', () => {
    render(
      <TabsComponent tabs={tabs}>
        <div>Tab 1 content</div>
        <div>Tab 2 content</div>
        <div>Tab 3 content</div>
      </TabsComponent>,
    );
    waitFor(() => {
      expect(screen.getByText('Tab 1 content')).toBeVisible();
      expect(screen.queryByText('Tab 2 content')).not.toBeVisible();
      expect(screen.queryByText('Tab 3 content')).not.toBeVisible();
      fireEvent.click(screen.getByText('Tab 2'));
      expect(screen.queryByText('Tab 1 content')).not.toBeVisible();
      expect(screen.getByText('Tab 2 content')).toBeVisible();
      expect(screen.queryByText('Tab 3 content')).not.toBeVisible();
    });
  });

  it('does not allow clicking on disabled tabs', () => {
    render(
      <TabsComponent tabs={tabs}>
        <div>Tab 1 content</div>
        <div>Tab 2 content</div>
        <div>Tab 3 content</div>
      </TabsComponent>,
    );
    waitFor(() => {
      fireEvent.click(screen.getByText('Tab 3'));
      expect(screen.getByText('Tab 1 content')).toBeVisible();
      expect(screen.queryByText('Tab 3 content')).not.toBeVisible();
    });
  });
});
