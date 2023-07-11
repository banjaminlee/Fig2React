import React from 'react';
import CategoryLayout from './index';
import styled from 'styled-components';
import Rating from '../Rating';

export default {
  title: 'Components/CategoryLayout',
  argTypes: {},
};

const ReviewToggleContainer = styled.div`
  display: inline-flex;
  margin: auto;
`;

const RatingBox = styled.div`
  margin: -8px;
`;

const TotalCount = styled.div`
  font-size: 0.8rem;
`;

const keyFeatureData = [
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
  {
    icon: './branding/svg/layout-camera.svg',
    title: 'Camera',
    content:
      'For those writers who have writers’ block, this can be an excellent way to take a step to crumbling those walls. By taking the writer away from the subject matter that is causing the block, a random sentence may allow them to see the project they’re working on in a different light and perspective. Sometimes all it takes is to get that first sentence down to help break the block.',
    image: './branding/svg/layout-iphone.svg',
  },
  {
    icon: './branding/svg/layout-features.svg',
    title: 'More Features',
    content:
      'It can also be successfully used as a daily exercise to get writers to begin writing. Being shown a random sentence and using it to complete a paragraph each day can be an excellent way to begin any writing session.',
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
      {
        title: 'Processor',
        content: <p>Apple A16 Bionic (4nm)</p>,
      },
      {
        title: 'Memory',
        content: <p>6GB RAM</p>,
      },
      {
        title: 'Storage',
        content: <p>256GB</p>,
      },
      {
        title: 'Battery',
        content: <p>Li-Ion 3200m, non-removable, fast charging</p>,
      },
      {
        title: 'Display',
        content: (
          <div>
            <p>
              <span>Size:</span>6.1”
            </p>
            <p>
              <span>Resolution:</span>1179 x 2556 pixels
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: 2,
    item: [
      {
        title: 'Connectivity',
        content: <p>Wi-Fi, Bluetooth 5.3, GPS, NFC, USB 2.0 Lightning</p>,
      },
      {
        title: 'Camera',
        content: (
          <div>
            <p>
              <span>Rear Camera 1:</span>48MP, f/1.8, 24mm Wide
            </p>
            <p>
              <span>Rear Camera 2:</span>12MP, f/2.8, 77mm Telephoto
            </p>
            <p>
              <span>Rear Camera 3:</span>12MP, f/2.2, 13mm, 120 UltraWide
            </p>
            <p>
              <span>Rear Camera 4:</span>12MP, f/1.9, 22mm Wide
            </p>
          </div>
        ),
      },
      {
        title: 'Device Dimensions',
        content: (
          <div>
            <p>
              <span>Height:</span>0.31”
            </p>
            <p>
              <span>Width:</span>2.81”
            </p>
            <p>
              <span>Length:</span>5.81”
            </p>
            <p>
              <span>Weight:</span>206g
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: 3,
    item: [
      {
        image: './branding/svg/layout-specs-iPhone.svg',
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
    titleTemplate: (
      <ReviewToggleContainer>
        <div>Reviews</div>
        <RatingBox className="desktop">
          <Rating size={0.5} disabled={true} />
        </RatingBox>
        <TotalCount className="desktop">125 Reviews</TotalCount>
      </ReviewToggleContainer>
    ),
  },
];

export const Default: React.FC = () => {
  return (
    <>
      <CategoryLayout
        keyFeaturesData={keyFeatureData}
        specsData={specsData}
        reviewsData={reviewsData}
        options={options}
      />
    </>
  );
};
