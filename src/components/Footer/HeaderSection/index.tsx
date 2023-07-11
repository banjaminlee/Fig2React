import styled from 'styled-components';
import { HeaderSectionProps } from './types';
import Image from 'components/Image';
import Text from 'components/Text';

const SubContainer = styled.div`
  padding-top: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    justify-content: unset;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  & img {
    width: 22px;
    height: 22px;
    ${({ theme }) => theme.mediaQueries.lg} {
      width: 24px;
      height: 24px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      width: 30px;
      height: 30px;
    }
  }
  & .contactInfo {
    font-size: 18px;
    margin-top: 0px;
    ${({ theme }) => theme.mediaQueries.lg} {
      margin-top: 3px;
      font-size: 16px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      font-size: 20px;
      margin-top: 5px;
    }
  }
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const SubContent = styled.div`
  text-align: center;
  display: block;
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: unset;
    display: flex;
  }
`;

const SubContentText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    justify-content: unset;
    margin-top: 0px;
  }
`;

const HeaderSection = ({ data }: HeaderSectionProps) => {
  return (
    <>
      {data.map((item: any, index: number) => {
        return (
          <SubContainer key={index}>
            <SubHeader>
              {item.image && <Image src={item.image} alt="image" />}
              {item.content && (
                <Text
                  font="bodyMain"
                  style={{
                    color: '#5870FF',
                    fontWeight: 700,
                    marginLeft: 16,
                  }}
                  className="contactInfo"
                >
                  {item.content}
                </Text>
              )}
            </SubHeader>
            <SubContent>
              <SubContentText>
                {item.subcontent && (
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}
                  >
                    {item.subcontent}
                  </Text>
                )}
              </SubContentText>
              <SubContentText>
                {item.subsubcontent && (
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}
                  >
                    {item.subsubcontent}
                  </Text>
                )}
              </SubContentText>
            </SubContent>
          </SubContainer>
        );
      })}
    </>
  );
};

export default HeaderSection;
