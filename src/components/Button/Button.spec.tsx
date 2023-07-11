import { GeneralButton, IconButton } from '.';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button component tests', () => {
  test('Component renders without crashing', () => {
    render(
      <GeneralButton size="Medium" label="click me" variant={'Custom'} backgroundColor="red" />,
    );
    const customBtn = screen.getByTestId('customBtn');
    expect(customBtn).toBeInTheDocument();
  });

  test('general button testing for size and label props', () => {
    render(<GeneralButton size="Medium" label="click me" variant={'Primary'} />);
    const primaryBtn = screen.getByTestId('primaryBtn');
    const style = window.getComputedStyle(primaryBtn);
    //testing size prop is passed down correctly for a medium size
    expect(style.fontSize).toBe('14px');
    //testing label text is passed correctly
    expect(screen.getByText('click me')).toBeInTheDocument();
  });

  test('Testing custom button for variant prop', () => {
    render(
      <GeneralButton size="Medium" label="click me" variant={'Custom'} backgroundColor="red" />,
    );
    const customBtn = screen.getByTestId('customBtn');
    const customStyle = window.getComputedStyle(customBtn);
    expect(customStyle.backgroundColor).toBe('red');
  });

  test('Testing Icon and isGhost props in primary buttons', () => {
    render(<IconButton Icon={'Icon'} isGhost={true} size="Small" />);
    //test whether icon prop is passed correctly
    const ghostIconBtn = screen.getByTestId('ghostIconBtn');
    expect(screen.getByText('Icon')).toBeInTheDocument();

    //test whether isGhost prop is passed correctly
    const ghostIconStyle = window.getComputedStyle(ghostIconBtn);
    expect(ghostIconStyle.backgroundColor).toBe('transparent');
  });
  test('disabled state for button', () => {
    render(<IconButton disabled={true} />);
    const disabledBtn = screen.getByTestId('ghostIconBtn');
    expect(disabledBtn).toBeDisabled();
  });
  test('hover state for a button', async () => {
    render(<IconButton Icon={'Icon'} isGhost={true} />);
    const hoverBtn = screen.getByTestId('ghostIconBtn');

    fireEvent.mouseOver(hoverBtn, { target: { value: 'Hovered' } });
    await waitFor(() => {
      expect(hoverBtn.value).toBe('Hovered');
    });

    fireEvent.mouseOut(hoverBtn, { target: { value: 'Unhovered' } });
    await waitFor(() => {
      expect(hoverBtn.value).toBe('Unhovered');
    });
  });
});
