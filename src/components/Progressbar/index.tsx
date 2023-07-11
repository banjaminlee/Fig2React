import React from 'react';
import styled from 'styled-components';
import { ProgressProps, ChildContainerProps } from './types';

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const ParentContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  min-width: 5rem;
  background: ${({ theme }) => theme.colors.background_progress};
  border-radius: 4px;
`;

const ChildContainer = styled.div<ChildContainerProps>`
  width: ${({ progress }) => `${progress}%`};
  background-color: ${({ bgcolor }) => bgcolor};
  height: 0.5rem;
  transition: width 0.3s ease-in-out;
  border-radius: 4px;
`;

const ProgressContainer = styled.div`
  margin-left: 0.5rem;
`;

const Progress = styled.p`
  min-width: 1.8125rem;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 12px;
  margin: 0;
  padding: 0;
`;

const Progress_bar: React.FC<ProgressProps> = ({ bgcolor, progress, showPercentage = false }) => {
  const showPercentageWiseContent = () => {
    return (
      <ParentContainer>
        <ChildContainer bgcolor={bgcolor} progress={progress} />
      </ParentContainer>
    );
  };
  return (
    <>
      {showPercentage ? (
        <Box>
          {showPercentageWiseContent()}
          {showPercentage && (
            <ProgressContainer>
              <Progress>{progress}%</Progress>
            </ProgressContainer>
          )}
        </Box>
      ) : (
        showPercentageWiseContent()
      )}
    </>
  );
};

export default Progress_bar;
