import React from 'react';
import styled, { useTheme } from 'styled-components';
import { BreadcrumbProps, ClickItem, BreadcrumbArray, DisplayTextProps } from './types';
import Image from 'components/Image';
import Text from 'components/Text';
import Home from '../Svgs/Icons/Home';

const HorizontalMargin = styled.span`
  margin-left: 13px;
  margin-right: 13px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const IconSection = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 3px;
  padding-bottom: 0px;
`;

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs, maxLimit = 3 }) => {
  const theme = useTheme();
  const [breadcrumbsArray, setBreadcrumbsArray] = React.useState(breadcrumbs);
  const [originalArray, setOriginalArray] = React.useState(breadcrumbs);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    setOriginalArray(breadcrumbs);
  }, [breadcrumbs]);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  React.useEffect(() => {
    if (breadcrumbs.length > maxLimit && isMobile) {
      setBreadcrumbsArray([
        breadcrumbs[0],
        { displayName: '...' },
        ...breadcrumbs.slice(breadcrumbs.length - 2),
      ]);
    } else {
      setBreadcrumbsArray(breadcrumbs);
    }
  }, [breadcrumbs, maxLimit, isMobile]);

  const onClickItem = ({ redirect, displayName, index, id }: ClickItem) => {
    if (displayName === '...') {
      const updatedArray = originalArray.slice(0, -2);
      setBreadcrumbsArray([...updatedArray]);
    } else {
      const foundIndex = originalArray.findIndex((o: BreadcrumbArray) => o.id === id);
      redirect && originalArray.length - foundIndex >= 2 && redirect(foundIndex, originalArray);
    }
  };

  const displayText = ({ displayName, index, id, redirect }: DisplayTextProps) => {
    return (
      <Text
        font="heading_med_sm"
        fontSize={isMobile ? 10 : 12}
        color="text_primary"
        onClick={() => onClickItem({ redirect, displayName, index, id })}
        style={{ cursor: 'pointer', marginTop: 6 }}
      >
        {displayName}
      </Text>
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      {breadcrumbsArray.map(({ displayName, redirect, id }, index) => {
        const imageName =
          index === breadcrumbsArray.length - 1 ? 'down-vector.svg' : 'right-vector.svg';
        const imageSrc = `./branding/svg/${imageName}`;
        const size = index === breadcrumbsArray.length - 1 ? 10 : 8;
        return (
          <React.Fragment key={index}>
            {index === 0 ? (
              <>
                <IconSection onClick={() => onClickItem({ redirect, displayName, index, id })}>
                  <Home color={theme?.colors.black} />
                </IconSection>

                {!isMobile && displayText({ displayName, index, id, redirect })}
              </>
            ) : (
              displayText({ displayName, index, id, redirect })
            )}
            <HorizontalMargin>
              <Image src={imageSrc} alt="Arrow" width={size} height={size} />
            </HorizontalMargin>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
