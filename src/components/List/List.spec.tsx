import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import List from './index';
import '@testing-library/jest-dom';

const posts = [
  { id: 1, title: 'Hello World' },
  { id: 2, title: 'Installation' },
];

describe('List Component', () => {
  it('renders ordered list when varient prop is "Ordered"', () => {
    const { container } = render(<List varient="Ordered" data-testid="list" postsData={posts} />);
    const orderedList = container.querySelector('ol');
    expect(orderedList).toBeInTheDocument();
  });

  it('renders unordered list when varient prop is  "UnOrdered"', () => {
    const { container } = render(<List varient="Unordered" data-testid="list" postsData={posts} />);
    const unorderedList = container.querySelector('ul');
    expect(unorderedList).toBeInTheDocument();
  });

  it('renders postsData items as list items', () => {
    const { getAllByRole } = render(
      <List varient="Ordered" data-testid="list" postsData={posts} />,
    );
    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(posts.length);
  });

  it('renders custom items when custom prop is true', () => {
    const { container } = render(
      <List custom postsData={posts} data-testid="list" note={'./branding/svg/attached.svg'} />,
    );
    const customList = container.querySelector('ul');
    expect(customList).toBeInTheDocument();
  });
});
