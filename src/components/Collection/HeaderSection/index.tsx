import styled from 'styled-components';
import { HeaderSectionProps } from './types';
import Text from 'components/Text';
import Image from 'components/Image';

const Container = styled.div`
  display: grid;
  margin-left: 12px;
  margin-right: 12px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }

  & .mobileSorting {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
    ${({ theme }) => theme.mediaQueries.md} {
      display: none;
    }
  }
`;

const MainWrapper = styled.div`
  & .desktopClearFilter {
    display: none;
    ${({ theme }) => theme.mediaQueries.md} {
      display: block;
    }
  }
  & span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px 6px 16px;
    gap: 8px;
    width: fit-content;
    background: #ffffff;
    border: 1.5px solid #f3eee4;
    border-radius: 100px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  & .Tags {
    display: flex;
    float: left;
    margin: 2px 4px 2px 4px;
  }

  & .itemNumber {
    display: none;
    ${({ theme }) => theme.mediaQueries.md} {
      display: block;
      float: left;
    }
  }
`;

const CloseIcon = styled.div`
  background: #c94403;
  width: 18px;
  height: 18px;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
`;

const ClearFilter = styled.div`
  text-decoration-line: underline;
  color: #c94403;
  font-family: 'Roc Grotesk Regular';
  font-weight: 700;
  font-size: 14px;
  margin-left: 24px;
  max-width: 82px;
  margin-top: 10px;
  margin-bottom: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    float: right;
  }
  cursor: pointer;
`;

const MobileSortingSection = styled.div<{ mobileFilter: boolean }>`
  & .filterBtn,
  & .sortBtn {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px 16px;
    width: 163.5px;
    height: 35px;
    border: 1.5px solid #c94403;
    border-radius: 4px;
    flex: none;
    order: 0;
    flex-grow: 1;
    max-width: 163.5px;
  }
  & .filterBtn {
    background: ${({ mobileFilter }) => (mobileFilter ? '#C94403' : '#fcf7ed')};
  }
  & .filterText {
    color: ${({ mobileFilter }) => (mobileFilter ? '#FCF7ED' : '#C94403')};
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const HeaderSection = ({ resultNum, mobileFilter, ...props }: HeaderSectionProps) => {
  return (
    <Container>
      <MobileWrapper>
        <Text
          font="body_md"
          color="text_primary"
          className="mobileitemNumber"
          style={{
            fontSize: 24,
            fontWeight: 700,
            marginRight: 20,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {resultNum} items
        </Text>
        <ClearFilter onClick={props.clearHandle}>Clear filters</ClearFilter>
      </MobileWrapper>
      <MainWrapper>
        <Text
          font="body_md"
          color="text_primary"
          className="itemNumber"
          style={{
            fontSize: 24,
            fontWeight: 700,
            marginRight: 20,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {resultNum} items
        </Text>
        {props.deviceTags && (
          <div className="Tags">
            <span>
              {props.deviceTags}
              <CloseIcon
                onClick={() => {
                  props.handleModelClick(props.deviceTags);
                }}
              >
                <Image
                  src={'./branding/svg/bestsellerclose.svg'}
                  width={10}
                  height={10}
                  alt="bestsellerclose"
                />
              </CloseIcon>
            </span>
          </div>
        )}
        {props.deviceColorTags && (
          <div className="Tags">
            <span>
              {props.deviceColorTags}
              <CloseIcon
                onClick={() => {
                  props.handleColorClick(props.deviceColorTags);
                }}
              >
                <Image
                  src={'./branding/svg/bestsellerclose.svg'}
                  width={10}
                  height={10}
                  alt="bestsellerclose"
                />
              </CloseIcon>
            </span>
          </div>
        )}
        {props.deviceConditionTags && (
          <div className="Tags">
            <span>
              {props.deviceConditionTags}
              <CloseIcon
                onClick={() => {
                  props.handleConditionClick(props.deviceConditionTags);
                }}
              >
                <Image
                  src={'./branding/svg/bestsellerclose.svg'}
                  width={10}
                  height={10}
                  alt="bestsellerclose"
                />
              </CloseIcon>
            </span>
          </div>
        )}
        <ClearFilter onClick={props.clearHandle} className="desktopClearFilter">
          Clear filters
        </ClearFilter>
      </MainWrapper>
      <MobileSortingSection className="mobileSorting" mobileFilter={mobileFilter}>
        <button className="filterBtn" onClick={props.filterHandle}>
          <Text
            font="body_md"
            color="text_primary"
            className="filterText"
            style={{
              fontSize: 16,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Filter
          </Text>
        </button>
        <button className="sortBtn">
          <Text
            font="body_md"
            color="text_primary"
            className="sortText"
            style={{
              fontSize: 16,
              fontWeight: 500,
              textAlign: 'center',
              color: '#C94403',
            }}
          >
            Sort
          </Text>
        </button>
      </MobileSortingSection>
    </Container>
  );
};

export default HeaderSection;
