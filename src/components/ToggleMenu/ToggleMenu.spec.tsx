import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleMenu from './index';
import '@testing-library/jest-dom';

describe('ToggleMenu component', () => {
  const title = 'Menu';
  const items = [
    { children: 'Item 1', onClick: jest.fn() },
    { children: 'Item 2', onClick: jest.fn() },
    { children: 'Item 3', onClick: jest.fn() },
  ];

  it.skip('should render the component with the correct title and items', () => {
    render(<ToggleMenu title={title} items={items} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    items.forEach((item) => {
      expect(screen.getByText(item.children)).toBeInTheDocument();
    });
  });

  it.skip('should open the menu when the trigger is clicked', () => {
    render(<ToggleMenu title={title} items={items} />);
    const trigger = screen.getByText(title);

    fireEvent.click(trigger);

    expect(screen.getByText(items[0].children)).toBeInTheDocument();
    expect(screen.getByText(items[1].children)).toBeInTheDocument();
    expect(screen.getByText(items[2].children)).toBeInTheDocument();
  });

  it.skip('should call the onClick function when an item is clicked', () => {
    render(<ToggleMenu title={title} items={items} />);
    const item1 = screen.getByText(items[0].children);
    const item2 = screen.getByText(items[1].children);
    const item3 = screen.getByText(items[2].children);

    fireEvent.click(item1);
    expect(items[0].onClick).toHaveBeenCalled();

    fireEvent.click(item2);
    expect(items[1].onClick).toHaveBeenCalled();

    fireEvent.click(item3);
    expect(items[2].onClick).toHaveBeenCalled();
  });
});
