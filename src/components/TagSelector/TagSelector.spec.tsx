import TagSelector from '.';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TagSelector component unit tests', () => {
  const handleChangeMock = jest.fn();
  const selectOptions = [
    {
      cat: 'Group 1',
      key: 'Apple',
    },
    {
      cat: 'Group 1',
      key: 'Peach',
    },
    {
      cat: 'Group 1',
      key: 'Banana',
    },
  ];
  const noOptions = [{}];
  const initialValues = [
    {
      cat: 'Group 1',
      key: 'Apple',
    },
  ];
  it('Component renders without crashing', () => {
    const { getByTestId } = render(<TagSelector data-testid={'tagSelector'} />);
    expect(getByTestId('tagSelector')).toBeInTheDocument();
  });
  it('Test select options and initially set values props, remove and select functions', () => {
    const { getByTestId } = render(
      <TagSelector
        options={selectOptions}
        data-testid={'tagSelector'}
        selectedValues={initialValues}
        displayValue={'key'}
        onSelect={handleChangeMock}
        onRemove={handleChangeMock}
      />,
    );
    const tagSelectorContainer = getByTestId('tagSelector');
    //test initially selected options are present
    const inputField = tagSelectorContainer.querySelector('.search-wrapper');
    expect(inputField?.children[0]).toHaveTextContent('Apple');
    //test the remove button
    const closeButton = tagSelectorContainer?.getElementsByTagName('img');
    Array.from(closeButton).map((button) => {
      fireEvent.click(button);
      expect(handleChangeMock).toHaveBeenCalled();
    });
    //test values present in the dropdown
    const dropdownCollection = tagSelectorContainer?.getElementsByTagName('li');
    const dropdownArray = Array.from(dropdownCollection);
    //test onSelect
    const mappedDropdownArray = dropdownArray.map((li) => {
      fireEvent.click(li);
      expect(handleChangeMock).toHaveBeenCalled();
      return li.textContent;
    });
    //ensure preselected options are not in the dropdown
    mappedDropdownArray.map((textContent) => {
      expect(textContent).not.toBe('Apple');
    });
    //test values expected in the dropdown
    expect(mappedDropdownArray[0]).toBe('Peach');
    expect(mappedDropdownArray[1]).toBe('Banana');
  });
  it('Test no options available', () => {
    const { getByTestId } = render(
      <TagSelector
        options={noOptions}
        data-testid={'tagSelector'}
        selectedValues={initialValues}
      />,
    );
    const tagSelectorContainer = getByTestId('tagSelector');
    expect(tagSelectorContainer?.getElementsByClassName('notFound')).toBeTruthy();
    expect(tagSelectorContainer.querySelector('.notFound')).toHaveTextContent(
      'No Options Available',
    );
  });
});
