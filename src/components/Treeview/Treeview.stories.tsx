import React, { useEffect, useState } from 'react';
import Text from '../Text';
import Treeview from './index';
import styled from 'styled-components';
import { createNode, NodeState } from 'react-easy-diagram';
import { observer } from 'mobx-react-lite';

export default {
  title: 'Components/Treeview',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

const Container = styled.div``;

const NodeWithLabel: React.FC<{ node: NodeState }> = observer(({ node }) => {
  return (
    <div style={{ padding: '10px' }}>
      <div style={{ textAlign: 'center' }}>Node Title</div>
    </div>
  );
});

export const Story = () => {
  return (
    <Container>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Treeview
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Use a Treeview when the user wants to make tree structure.
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Treeview
          style={{ height: 300 }}
          initState={{
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
          }}
        />
      </CardDiv>
      <Text font="body_md" color="text_primary" mt={15} mb={10}>
        Custom
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Treeview
          style={{ height: 300 }}
          initState={{
            nodes: [
              {
                id: 'node_1',
                label: 'Node 1',
                position: [300, 300],
                type: 'output_horizontal',
              },
              {
                id: 'node_2',
                label: 'Node 2',
                position: [420, 400],
                type: 'input_output_horizontal',
              },
              {
                id: 'node_3',
                label: 'Node 3',
                position: [520, 305],
                type: 'editable_label',
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
                  portId: 'port_1',
                },
              },
              {
                source: {
                  nodeId: 'node_2',
                  portId: 'output',
                },
                target: {
                  nodeId: 'node_3',
                  portId: 'port_2',
                },
              },
            ],
          }}
          settings={{
            nodes: {
              components: {
                editable_label: createNode({
                  ports: [
                    {
                      id: 'port_1',
                      position: 'left-center',
                      offsetFromOrigin: [0, -6],
                    },
                    {
                      id: 'port_2',
                      position: 'left-center',
                      offsetFromOrigin: [0, 6],
                    },
                    {
                      id: 'output-port',
                      position: 'right-center',
                    },
                  ],
                  innerNode: NodeWithLabel,
                }),
              },
            },
          }}
        />
      </CardDiv>
    </Container>
  );
};
