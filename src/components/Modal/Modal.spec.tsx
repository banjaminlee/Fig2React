import Modal, { CustomModal, DrawerModal } from '.';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Modal component tests', () => {
  const mockFunction = jest.fn();

  it('renders component without crashing', () => {
    const { getByText } = render(
      <Modal>
        <p>Modal</p>
      </Modal>,
    );
    //testing children
    expect(getByText('Modal')).toBeInTheDocument();
  });
  it('test open and close custom modal', () => {
    const { getByRole, getByText, getByTestId } = render(
      <CustomModal label="custom modal label">
        <button onClick={mockFunction()}>Close Custom Modal</button>
      </CustomModal>,
    );
    //open custom modal
    const openCustomModal = getByRole('button');
    fireEvent.click(openCustomModal);
    //ensure props is being passed correctly to custom modal
    expect(getByText('custom modal label')).toBeInTheDocument();
    //close custom modal
    const closeCustomModalBtn = getByTestId('customModalBtn');
    fireEvent.click(closeCustomModalBtn);
    expect(mockFunction).toBeCalled();
  });
  it('drawer modal', () => {
    const { getByRole, getByText, getByTestId } = render(
      <DrawerModal Headertitle={'drawer modal title'} State={false}>
        <button onClick={mockFunction()}>Close Drawer Modal</button>
      </DrawerModal>,
    );
    const openDrawerModal = getByRole('button');
    fireEvent.click(openDrawerModal);
    //ensure props is being passed correctly to drawer modal
    expect(getByText('drawer modal title')).toBeInTheDocument();
    //close drawer modal
    const closeDrawerModalBtn = getByTestId('drawerModalBtn');
    fireEvent.click(closeDrawerModalBtn);
    expect(mockFunction).toBeCalled();
  });
});
