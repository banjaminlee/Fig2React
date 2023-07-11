import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from './index';
import Text from '../Text';
import Image from '../Image';

export default {
  title: 'Components/Pagination',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

const MainWrapper = styled.div`
  text-align: center;
  & ul {
    justify-content: center;
  }
  & .Previous,
  & .Next {
    margin-top: 2px;
    border: unset;
  }
`;

const DisplayContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;

const items = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
];

const DisplyItems = ({ currentItems }: string[] | any) => {
  return (
    <DisplayContainer>
      {currentItems && (
        <Text
          font="body_md"
          color="text_primary"
          style={{ textAlign: 'center', fontSize: 16, fontWeight: 500 }}
        >
          Current Page Items: {currentItems}
        </Text>
      )}
    </DisplayContainer>
  );
};

export const Story = () => {
  const itemsPerPage = 3;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (data) => {
    const newOffset = (data.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Pagination
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Use a Pagination when the user wants to add pagination section.
      </Text>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <MainWrapper>
          <DisplyItems currentItems={currentItems} />
          <Pagination
            breakLabel={
              <Text font="body_md" color="#C94403">
                ...
              </Text>
            }
            nextLabel={
              <Image
                src="./branding/svg/pagination_next.svg"
                alt="nextIcon"
                width={16}
                height={16}
              />
            }
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousClassName="Previous"
            nextClassName="Next"
            previousLabel={
              <Image
                src="./branding/svg/pagination_previous.svg"
                alt="previousIcon"
                width={16}
                height={16}
              />
            }
          />
        </MainWrapper>
      </CardDiv>
    </>
  );
};
