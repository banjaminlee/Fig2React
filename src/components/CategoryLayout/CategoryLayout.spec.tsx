import CategoryLayout from '.';
import KeyFeaturesLayout from './KeyFeatures/index';
import ReviewsLayout from './Reviews/index';
import SpecsLayout from './Specs/index';
import React from 'react';
import ToggleButton from '../ToggleButton';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Category Layout component tests', () => {
  const keyFeaturesData = [
    {
      icon: './branding/svg/layout-performance.svg',
      title: 'Performance',
      content:
        'Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 14 is the “it” phone for 2022 for a reason. This model houses a revamped A15 chip that is certain to knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster than its competition, the iPhone 14 is a no-brainer if you’re looking to upgrade to an all-around top tier smartphone. It also features incredible battery life with up to 17 hours of video playback and wireless charging capabilities.',
      image: './branding/svg/layout-iphone.svg',
    },
    {
      icon: './branding/svg/layout-display.svg',
      title: 'Display',
      content:
        'If you’re visiting this page, you’re likely here because you’re searching for a random sentence. Sometimes a random word just isn’t enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.',
      image: './branding/svg/layout-iphone.svg',
    },
  ];
  const specsData = [
    {
      id: 1,
      item: [
        {
          title: 'Operating System',
          content: <p>iOS 16, upgradable to iOS 16.1</p>,
        },
      ],
    },
  ];
  const reviewsData = [
    {
      name: 'Lee B',
      favoritePhone: 'My favorite phone',
      feedback:
        'I’ve had Pixels and iPhones in the past and this is the first one I’ve been really excited about.',
      mark: 'Good',
    },
    {
      name: 'Lee B',
      favoritePhone: 'My favorite phone',
      feedback:
        'I’ve had Pixels and iPhones in the past and this is the first one I’ve been really excited about.',
      mark: 'Good',
    },
  ];
  const options = [
    {
      title: 'Key Features',
      location: 0,
      fullLength: 100,
      titleTemplate: <div>Key Features</div>,
    },
    { title: 'Specs', location: 8, fullLength: 100, titleTemplate: <div>Specs</div> },
    {
      title: 'Reviews',
      location: 12,
      fullLength: 197.5,
      titleTemplate: <div>Reviews</div>,
    },
  ];
  test('Component renders without crashing', () => {
    render(<CategoryLayout keyFeaturesData={keyFeaturesData} options={options} />);
    expect(keyFeaturesData).toHaveLength(2);
  });
  test('Toggle button feature', () => {
    const mockFunction = jest.fn();
    render(
      <ToggleButton
        onToggleChange={mockFunction()}
        type="button"
        value={options[0].title}
        options={options}
      />,
    );
    fireEvent.click(screen.getByLabelText(options[1].title));
    expect(mockFunction).toBeCalled();
  });
  test('Key features component', () => {
    render(<KeyFeaturesLayout data={keyFeaturesData} />);
    const contentContainer = screen.getByTestId('contentContainer');
    const tabSection = screen.getAllByTestId('tabSection');
    //check data has been passed correctly
    expect(tabSection[0]).toHaveTextContent('Performance');
    //ensure on click the content is changed
    fireEvent.click(tabSection[0]);
    expect(contentContainer).toHaveTextContent(keyFeaturesData[0].content);
    fireEvent.click(tabSection[1]);
    expect(contentContainer).toHaveTextContent(keyFeaturesData[1].content);
  });
  test('Specs component', () => {
    render(<SpecsLayout data={specsData} />);
    const specsContainer = screen.getByTestId('specsContainer');
    //check data has been passed correctly
    expect(specsContainer).toHaveTextContent(specsData[0].item[0].title);
  });
  test('Reviews component', () => {
    render(<ReviewsLayout data={reviewsData} />);
    const reviewsContainer = screen.getByTestId('reviewsContainer');
    //check data has been passed correctly
    expect(reviewsContainer).toHaveTextContent(reviewsData[0].name);
  });
});
