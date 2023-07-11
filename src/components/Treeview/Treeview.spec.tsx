import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Treeview from './index';
import '@testing-library/jest-dom';

describe('Treeview component', () => {
  const initState = {
    nodes: [
      {
        id: 'node_1',
        position: [300, 300],
        type: 'output_horizontal',
      },
      {
        id: 'node_2',
        position: [520, 400],
        type: 'input_horizontal',
      },
      {
        id: 'node_3',
        position: [520, 200],
        type: 'input_horizontal',
      },
      {
        id: 'node_4',
        position: [520, 300],
        type: 'input_horizontal',
      },
    ],
    links: [
      {
        source: {
          nodeId: 'node_1',
          portId: 'output',
        },
        target: {
          nodeId: 'node_2',
          portId: 'input',
        },
      },
      {
        source: {
          nodeId: 'node_1',
          portId: 'output',
        },
        target: {
          nodeId: 'node_3',
          portId: 'input',
        },
      },
      {
        source: {
          nodeId: 'node_1',
          portId: 'output',
        },
        target: {
          nodeId: 'node_4',
          portId: 'input',
        },
      },
    ],
  };
  const settings = { gridSize: 20 };

  it('renders without crashing', () => {
    render(<Treeview initState={initState} settings={settings} />);
  });

  it('receives props', () => {
    const style = { backgroundColor: 'blue' };
    const { container } = render(
      <Treeview initState={initState} settings={settings} style={style} />,
    );
    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toHaveStyle('background-color: blue');
  });

  it('renders children', () => {
    const { getByText } = render(
      <Treeview initState={initState} settings={settings}>
        <div>Some child content</div>
      </Treeview>,
    );
    waitFor(() => expect(getByText('Some child content')).toBeInTheDocument());
  });
});
