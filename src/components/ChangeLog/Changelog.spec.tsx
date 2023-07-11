import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Changelog from './index';

describe('Changelog', () => {
  const logs = [
    {
      version: '1.0.0',
      title: 'First Version',
      description: 'This is the first version of our app.',
    },
    {
      version: '2.0.0',
      title: 'Second Version',
      description: 'This is the second version of our app.',
    },
  ];

  it('should render the log version and title', () => {
    const { getByText } = render(<Changelog logs={logs} />);
    waitFor(() => {
      expect(getByText('1.0.0')).toBeInTheDocument();
      expect(getByText('First Version')).toBeInTheDocument();
      expect(getByText('2.0.0')).toBeInTheDocument();
      expect(getByText('Second Version')).toBeInTheDocument();
    });
  });

  it('should render the log description if provided', () => {
    const { getByText } = render(<Changelog logs={logs} />);
    waitFor(() => {
      expect(getByText('This is the first version of our app.')).toBeInTheDocument();
      expect(getByText('This is the second version of our app.')).toBeInTheDocument();
    });
  });

  it('should not render log description if not provided', () => {
    const logsWithoutDescription = [
      {
        version: '1.0.0',
        title: 'First Version',
      },
    ];
    const { queryByText } = render(<Changelog logs={logsWithoutDescription} />);
    expect(queryByText('This is the first version of our app.')).toBeNull();
  });
});
