import styled from 'styled-components';
import { FilteredSectionProps } from './types';
import ProductCard from 'components/ProductCard';

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 3px;
  row-gap: 1px;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FilteredSection = ({ filteredData, additionalData }: FilteredSectionProps) => {
  return (
    <>
      {filteredData && (
        <ContainerGrid>
          {filteredData.map((item: any, index: number) => {
            //@todo once we know data structure.
            const title = item.title;
            const capacity = item.capacity;
            const price = item.variants[0].price;
            const color = item.variants[0].title;
            return (
              <div key={index}>
                <ProductCard
                  title={title}
                  image={additionalData.image}
                  bestSellerBtn={additionalData.bestSellerBtn}
                  favoriteImage={additionalData.favoriteImage}
                  capacity={capacity}
                  price={price}
                  previousPrice={additionalData.previousPrice}
                  innerContent={additionalData.innerContent}
                  color={color}
                  actionColor={additionalData.actionColor}
                  footerlink={additionalData.footerlink}
                />
              </div>
            );
          })}
        </ContainerGrid>
      )}
    </>
  );
};

export default FilteredSection;
