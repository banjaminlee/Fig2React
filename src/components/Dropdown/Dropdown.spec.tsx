import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Dropdown from './index';

const testTitle = 'Test Dropdown';
const testImage = 'https://www.w3schools.com/images/w3schools_green.jpg';

describe('Dropdown component', () => {
  it('should render title and image', () => {
    const { getByText, getByAltText } = render(
      <Dropdown title={testTitle} image={testImage}>
        <div>Dropdown Content</div>
      </Dropdown>,
    );
    waitFor(() => {
      expect(getByText(testTitle)).toBeInTheDocument();
      expect(getByAltText('headerImage')).toHaveAttribute('src', testImage);
    });
  });

  it('should toggle dropdown body when clicked', () => {
    const { getByText } = render(
      <Dropdown title={testTitle}>
        <div>Dropdown Content</div>
      </Dropdown>,
    );
    waitFor(() => {
      expect(getByText('Dropdown Content')).not.toBeVisible();
      fireEvent.click(getByText(testTitle));
      expect(getByText('Dropdown Content')).toBeVisible();
      fireEvent.click(getByText(testTitle));
      expect(getByText('Dropdown Content')).not.toBeVisible();
    });
  });

  it('should pass className prop to top level element', () => {
    const { container } = render(
      <Dropdown title={testTitle} className="test-class">
        <div>Dropdown Content</div>
      </Dropdown>,
    );
    waitFor(() => expect(container.firstChild).toHaveClass('test-class'));
  });

  it('should render children', () => {
    const { getByText } = render(
      <Dropdown title={testTitle}>
        <div>Dropdown Content</div>
      </Dropdown>,
    );
    waitFor(() => expect(getByText('Dropdown Content')).toBeInTheDocument());
  });
});
