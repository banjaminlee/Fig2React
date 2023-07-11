import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Link, { RouteLink } from './index';
import '@testing-library/jest-dom';

describe('Link component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Link href="#">Link text</Link>);
    expect(getByText('Link text')).toBeInTheDocument();
  });

  it('renders correctly with custom props', () => {
    const { getByText } = render(
      <Link
        href="#"
        color="#333"
        size="Medium"
        varient="action"
        disabled
        style={{ fontWeight: 700 }}
      >
        Action link
      </Link>,
    );
    const link = getByText('Action link');
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    expect(link).toBeInTheDocument();
    waitFor(() =>
      expect(link).toHaveStyle(`
    color: #333;
    font-size: 1rem;
    text-decoration: underline;
    cursor: not-allowed;
    pointer-events: none;
    font-weight: 700;
  `),
    );

    fireEvent.click(link);
    expect(alertSpy).toHaveBeenCalledWith('Action is invoked!');
  });
});

describe('RouteLink component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<RouteLink path="/home">Home</RouteLink>);
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('renders correctly with custom props', () => {
    const { getByText } = render(
      <RouteLink path="/about" color="#777" size="Small" style={{ fontStyle: 'italic' }}>
        About us
      </RouteLink>,
    );
    const link = getByText('About us');
    expect(link).toBeInTheDocument();
    expect(link).toHaveStyle(`
      color: #777;
      font-size: 0.8rem;
      text-decoration: unset;
      cursor: allowed;
      pointer-events: allowed;
      font-style: italic;
    `);
    expect(link).toHaveAttribute('href', '/about');
  });
});
