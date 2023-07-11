import React, { useCallback } from 'react';
import styled, { useTheme } from 'styled-components';
import * as iconsList from '../Svgs/Icons';
import { Input } from '../Input';
import Text from '../Text';
import { IconByCategories } from './iconList';

type ItemsProps = {
  name: string;
  icons: string[];
};

const { ...listIcons } = iconsList;

const IconLibrary = () => {
  const theme = useTheme();
  const [FilteredIconByCategories, setFilteredIconByCategory] = React.useState(IconByCategories);

  const changeHandler = useCallback(({ name, value }) => {
    const newArray: Array<ItemsProps> = [];
    IconByCategories.map((icons) => {
      const iconss = icons.icons.filter((e: string) =>
        e.toLocaleLowerCase().includes(value.toLowerCase()),
      );
      if (iconss.length) {
        newArray.push({ name: icons.name, icons: iconss });
      }
    });
    setFilteredIconByCategory(newArray);
  }, []);

  return (
    <Grid>
      <GridItem12>
        <Container>
          <Input placeholder="Filter icons..." cbHandler={changeHandler} />
        </Container>
      </GridItem12>
      {FilteredIconByCategories.map((iconName: ItemsProps) => {
        const { name, icons } = iconName;

        return (
          <GridItem key={name}>
            <Text font="rocRegular" fontSize={14} color="text_primary">
              {name}
            </Text>
            <Flex>
              {icons.map((Icon: string, index: number) => {
                const RealIcon = listIcons[Icon as keyof typeof listIcons];
                return (
                  <Paper key={index}>
                    <GridContainer>
                      <GridColumn>
                        <GridItem>
                          <RealIcon color={theme.colors.icon_primary} />
                        </GridItem>
                        <GridItem>
                          <Text font="rocRegular" fontSize={12} color="text_primary">
                            {Icon}
                          </Text>
                        </GridItem>
                      </GridColumn>
                    </GridContainer>
                  </Paper>
                );
              })}
            </Flex>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default IconLibrary;

const Grid = styled.div`
  width: calc(100% + 16px);
  margin: -8px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const GridItem12 = styled.div`
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
`;

const GridItem = styled.div`
  padding: 8px;
  margin-left: auto;
  margin-right: auto;
`;

const Paper = styled.div`
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 8%);
  color: unset;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 8px;
`;

const GridContainer = styled.div`
  padding-bottom: 0.5rem;
  min-width: 9rem;
  height: 7rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  display: flex;
`;

const GridColumn = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
`;
