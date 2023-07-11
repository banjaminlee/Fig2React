import React from 'react';
import Card from '../Card';
import Carousel from './index';
import Image from '../Image';

export default {
  title: 'Components/Carousel',
  argTypes: {},
};

export const CarouselStory = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const cards = Array(8)
    .fill('v')
    .map((_, index) => (
      <Card
        key={index}
        style={{
          padding: isMobile ? 30 : 50,
          margin: isMobile ? '14px' : '40px',
          transition: 'opacity 0.2s linear',
        }}
      >
        <Image
          src={`./branding/svg/carousel-${index < 4 ? index + 1 : index - 3}.svg`}
          alt={`Avatar-${index}`}
          width={200}
          height={200}
          style={{ marginBottom: '20px' }}
        />
      </Card>
    ));

  return <Carousel items={cards} initialItems={isMobile ? 1 : 4} />;
};
