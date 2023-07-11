import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Showmore, { Readmore } from './index';
import ShowMoreText from 'react-show-more-text';
import styled from 'styled-components';
import { FunctionComponent } from 'react';

describe('Showmore', () => {
  it('should render children with default props', () => {
    const { getByText } = render(
      <Showmore>
        <div>Test Content</div>
      </Showmore>,
    );
    waitFor(() => expect(getByText('Test Content')).toBeInTheDocument());
  });

  it('should render the "Read more" link when content is collapsed', () => {
    const { getByText } = render(
      <Showmore>
        <div>Test Content</div>
      </Showmore>,
    );
    waitFor(() => expect(getByText('Read more')).toBeInTheDocument());
  });

  it('should render the "Read less" link when content is expanded', () => {
    const { getByText } = render(
      <Showmore>
        <div>Test Content</div>
      </Showmore>,
    );
    waitFor(() => {
      fireEvent.click(getByText('Read more'));
      expect(getByText('Read less')).toBeInTheDocument();
    });
  });
});

describe('Readmore', () => {
  it('should render children with default props', () => {
    const { getByText } = render(
      <Readmore>
        <div>Test Content</div>
      </Readmore>,
    );
    waitFor(() => expect(getByText('Test Content')).toBeInTheDocument());
  });

  it('should toggle content visibility when "Read more" or "Read less" link is clicked', () => {
    const { getByText, queryByText } = render(
      <Readmore>
        <div>Test Content</div>
      </Readmore>,
    );
    waitFor(() => {
      expect(queryByText('Test Content')).not.toBeInTheDocument();
      fireEvent.click(getByText('Read more'));
      expect(getByText('Test Content')).toBeInTheDocument();
      fireEvent.click(getByText('Read less'));
      expect(queryByText('Test Content')).not.toBeInTheDocument();
    });
  });
});
