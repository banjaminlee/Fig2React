import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { ListProps, dataProps } from './types';
import Text from 'components/Text';
import Image from 'components/Image';

const MainWrapper = styled.div``;

const WrapperInner = styled.ol`
  font-family: 'Roc Grotesk Light';
  & li {
    padding-left: 10px;
  }
`;

const CustomInner = styled.ul`
  & li {
    display: flex;
    align-items: center;
  }
`;

const UnorderWrapper = styled.ul`
  font-family: 'Roc Grotesk Light';
  & li {
    padding-left: 10px;
  }
`;

export const List: FunctionComponent<ListProps> = ({
  varient,
  style,
  start,
  postsData,
  custom,
  note,
  ...props
}) => {
  return (
    <>
      {custom ? (
        <MainWrapper {...props} style={style}>
          <CustomInner>
            {postsData.map((post: dataProps) => (
              <li key={post.id}>
                <Image src={note} alt="customIcon" />
                <Text font="body_md" color="text_primary" marginLeft={14}>
                  {post.title}
                </Text>
              </li>
            ))}
          </CustomInner>
        </MainWrapper>
      ) : (
        <MainWrapper {...props} style={style}>
          {varient == 'Ordered' ? (
            <WrapperInner start={start}>
              {postsData.map((post: dataProps) => (
                <li key={post.id}>
                  <Text font="body_md" color="text_primary">
                    {post.title}
                  </Text>
                </li>
              ))}
            </WrapperInner>
          ) : (
            <UnorderWrapper>
              {postsData.map((post: dataProps) => (
                <li key={post.id}>
                  <Text font="body_md" color="text_primary">
                    {post.title}
                  </Text>
                </li>
              ))}
            </UnorderWrapper>
          )}
        </MainWrapper>
      )}
    </>
  );
};

export default List;
