import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import HelpBox from './index';

describe('HelpBox', () => {
  const closeHandler = jest.fn();
  const children = <div data-testid="content">Hello world</div>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the children when not closed', () => {
    const { getByText } = render(<HelpBox>{children}</HelpBox>);
    waitFor(() => expect(getByText('Hello world')).toBeInTheDocument());
  });

  it('should not render the children when close button is clicked', () => {
    const { getByText, queryByText } = render(<HelpBox closable>{children}</HelpBox>);
    closeHandler.call;
    waitFor(() => expect(closeHandler).toHaveBeenCalled());
    waitFor(() => expect(queryByText('Hello world')).toBeNull());
  });

  it('should have a custom variant when provided', () => {
    const { getByTestId } = render(<HelpBox variant="blue">{children}</HelpBox>);
    const content = getByTestId('content');
    waitFor(() => expect(content.parentElement).toHaveStyle('background: blue'));
  });

  it('should have a custom class name when provided', () => {
    const { getByTestId } = render(<HelpBox className="custom-class">{children}</HelpBox>);
    waitFor(() => expect(getByTestId('container')).toHaveClass('custom-class'));
  });
});
