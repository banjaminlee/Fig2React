import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { CollectionProps } from './types';
import HeaderSection from './HeaderSection';
import SidebarSection from './SidebarSection';
import FilteredSection from './FilteredSection';

const MainWrapper = styled.div`
  display: block;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`;

const SidebarWrapper = styled.div<{ mobileFilter: boolean }>`
  display: ${({ mobileFilter }) => (mobileFilter ? 'block' : 'none')};
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    width: 50%;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    width: 25%;
  }
`;

const FilteredWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 75%;
  }
`;

const Collection: FunctionComponent<CollectionProps> = ({
  resultNum,
  deviceTags,
  deviceColorTags,
  deviceConditionTags,
  selectedItems,
  clearHandle,
  dropdownData,
  filterHandle,
  mobileFilter,
  onToggle,
  siderbarTitleData,
  modelData,
  valueModel,
  handleModelClick,
  priceData,
  colorData,
  valueColor,
  handleColorClick,
  carrierData,
  conditionData,
  valueCondition,
  handleConditionClick,
  storageData,
  screenSizeData,
  releaseYearData,
  filteredData,
  additionalData,
}) => {
  return (
    <>
      <HeaderSection
        deviceTags={deviceTags}
        deviceColorTags={deviceColorTags}
        deviceConditionTags={deviceConditionTags}
        handleModelClick={handleModelClick}
        handleColorClick={handleColorClick}
        handleConditionClick={handleConditionClick}
        resultNum={resultNum}
        selectedItems={selectedItems}
        clearHandle={clearHandle}
        dropdownData={dropdownData}
        filterHandle={filterHandle}
        mobileFilter={mobileFilter}
      />
      <MainWrapper>
        <SidebarWrapper mobileFilter={mobileFilter}>
          <SidebarSection
            onToggle={onToggle}
            siderbarTitleData={siderbarTitleData}
            modelData={modelData}
            valueModel={valueModel}
            handleModelClick={handleModelClick}
            priceData={priceData}
            colorData={colorData}
            valueColor={valueColor}
            handleColorClick={handleColorClick}
            carrierData={carrierData}
            conditionData={conditionData}
            valueCondition={valueCondition}
            handleConditionClick={handleConditionClick}
            storageData={storageData}
            screenSizeData={screenSizeData}
            releaseYearData={releaseYearData}
          />
        </SidebarWrapper>
        <FilteredWrapper>
          <FilteredSection filteredData={filteredData} additionalData={additionalData} />
        </FilteredWrapper>
      </MainWrapper>
    </>
  );
};

export default Collection;
