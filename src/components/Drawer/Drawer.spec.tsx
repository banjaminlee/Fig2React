import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Drawer from './index';

describe('Drawer', () => {
  it('renders with default props', () => {
    render(
      <Drawer direction="top" open={false}>
        Content
      </Drawer>,
    );
    waitFor(() => expect(screen.getByRole('navigation')).toBeInTheDocument());
    waitFor(() => expect(screen.getByLabelText('overlay')).toBeInTheDocument());
    waitFor(() => expect(screen.getByRole('navigation')).toHaveStyle({ visibility: 'hidden' }));
    waitFor(() => expect(screen.getByLabelText('overlay')).toHaveStyle({ display: 'none' }));
  });
  it('opens and closes', () => {
    render(
      <Drawer direction="top" open={false}>
        Content
      </Drawer>,
    );
    waitFor(() => expect(screen.getByRole('navigation')).toHaveStyle({ visibility: 'hidden' }));
    waitFor(() => expect(screen.getByLabelText('overlay')).toHaveStyle({ display: 'none' }));
    waitFor(() => screen.getByRole('button').click());
    waitFor(() => expect(screen.getByRole('navigation')).toHaveStyle({ visibility: 'visible' }));
    waitFor(() => expect(screen.getByLabelText('overlay')).toHaveStyle({ display: 'block' }));
    waitFor(() => screen.getByRole('button').click());
    waitFor(() => expect(screen.getByRole('navigation')).toHaveStyle({ visibility: 'hidden' }));
    waitFor(() => expect(screen.getByLabelText('overlay')).toHaveStyle({ display: 'none' }));
  });
});
