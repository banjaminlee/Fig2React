import styled from 'styled-components';
import { StoreProps } from './types';
import Text from 'components/Text';

const HeaderMain = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 30px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const WrapperMain = styled.div`
  width: 100%;
`;

const Distance = styled.div`
  margin-left: auto;
  font-size: 12px;
`;

const Location = styled.div`
  font-size: 14px;
  padding-left: 30px;
  padding-right: 30px;
  color: ${({ theme }) => theme.colors.ui_divider};
`;

const Divider = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

const DirectionLink = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.clay_dark};
`;

const StoreList = ({ data }: { data: StoreProps }) => {
  const kioskData: any = data.Attributes.find(
    (kiosk: any) => kiosk.AttributeName === 'Kiosk placement',
  );
  return (
    <WrapperMain>
      <HeaderMain>
        <Text font="body_md" color="text_primary">
          {data.Name}
        </Text>
        <Distance>{data.Distance}mi</Distance>
      </HeaderMain>
      <Divider>
        <Location>{data.Address1}</Location>
        <Location>
          {data.City}, {data.State} {data.PostCode}
        </Location>
      </Divider>
      <Divider>
        <Location>{data.OpenCloseStatus}</Location>
      </Divider>
      <Divider>
        <Location>Kiosk Location: {kioskData.AttributeValue}</Location>
      </Divider>
      <Divider>
        <Location>
          <DirectionLink
            target="_blank"
            href={`https://www.google.com/maps?saddr&daddr=${data.Address1} ${data.City} ${data.State} ${data.PostCode}`}
          >
            Get Directions
          </DirectionLink>
        </Location>
      </Divider>
    </WrapperMain>
  );
};

export default StoreList;
