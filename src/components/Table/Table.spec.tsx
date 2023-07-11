import React from 'react';
import { TableBody, CustomTableBody } from './TableBody';
import { Table, CustomTable, TableTitle } from '.';
import { TableHeader, CustomTableHeader } from './TableHeader';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  discussionsHeaderData,
  customContentData,
  customHeaderData,
  widthrateData,
} from '../../@utils/data';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';

describe('Table Component unit test', () => {
  const column = 'minmax(400px, 40%) minmax(600px, 60%)';

  it('Table title renders correctly', () => {
    const tableTitle = render(
      <TableTitle>
        <p>Table title</p>
      </TableTitle>,
    );
    expect(tableTitle.getByText('Table title')).toBeTruthy();
  });

  it('Table component renders without crashing', () => {
    const { getByTestId } = render(
      <Table data-testid="tableContainer">
        <p>Table component</p>
      </Table>,
    );
    expect(getByTestId('tableContainer')).toHaveTextContent('Table component');
  });

  it('Custom table renders correctly', () => {
    const { getByTestId } = render(
      <CustomTable data-testid="customTableContainer">
        <p>Custom table component</p>
      </CustomTable>,
    );
    expect(getByTestId('customTableContainer')).toHaveTextContent('Custom table component');
  });

  it('Table header', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <TableHeader headers={discussionsHeaderData} data-testid={'tableHeader'} />,
      </ThemeProvider>,
    );
    //check if header data is passed correctly
    expect(getByTestId('tableHeader').children).toHaveLength(6);
    expect(getByTestId('tableHeader').children[0]).toHaveTextContent('#');
  });

  it('Table custom header', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <CustomTableHeader
          headers={customHeaderData}
          width={widthrateData}
          data-testid={'customTableHeader'}
        />
      </ThemeProvider>,
    );
    //check if width prop is passed correctly for custom header
    expect(getByTestId('customTableHeader').children[0].getAttribute('width')).toBe('50%');
  });

  it('Table body', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <TableBody column={column} data-testid={'tableBody'}>
          <p>Table body</p>
        </TableBody>
      </ThemeProvider>,
    );
    //check if children is passed correctly
    expect(getByTestId('tableBody')).toHaveTextContent('Table body');
  });

  it('Custom table body', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        {customContentData.map((data, index) => (
          <CustomTableBody
            key={index}
            data={data.content}
            data-testid={'customTableBody'}
            width={widthrateData}
          />
        ))}
      </ThemeProvider>,
    );
    //test if width and data content props are passed correctly;
    expect(getAllByTestId('customTableBody')[0].children[0].getAttribute('width')).toBe('50%');
    expect(getAllByTestId('customTableBody')[1].children[0]).toHaveTextContent('Row 2, Column 1');
  });
});
