import React from 'react';
import Text from '../Text';
import Dropzone from './index';
import styled from 'styled-components';

export default {
  title: 'Components/Dropzone',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;

  & .otheractive {
    color: rgba(0, 0, 0, 0.25);
  }
  & .normal {
    color: rgba(0, 0, 0);
  }
`;

const MainLetter = styled.div`
  color: ${({ theme }) => theme.colors.text_secondary};
`;

const Container = styled.div`
  margin-top: calc(var(--spacer) / 3);
  margin-bottom: calc(var(--spacer) / 3);
`;

export const Story = () => {
  const getUploadParams = () => ({ url: 'https://httpbin.org/post' });

  const handleSubmit = () => {};

  return (
    <Container>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Dropzone
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Dropzone
          getUploadParams={getUploadParams}
          handleSubmit={handleSubmit}
          inputContent={
            <div key={0}>
              <MainLetter>
                <Text font="body_md" color="text_primary">
                  Click or drag to upload
                </Text>
              </MainLetter>
            </div>
          }
          submitButtonContent="Upload"
        />
      </CardDiv>
      <Text font="body_md" color="text_primary" pb={10} mt={20}>
        With upload
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Dropzone
          getUploadParams={getUploadParams}
          handleSubmit={handleSubmit}
          maxSizeBytes={1024}
          inputContent={
            <div key={1}>
              <MainLetter>
                <Text font="body_md" color="text_primary">
                  Click or drag to upload
                </Text>
                <Text font="body_sm" color="text_primary" style={{ textAlign: 'center' }}>
                  Max file size: 1MB
                </Text>
              </MainLetter>
            </div>
          }
          submitButtonContent="Upload"
        />
      </CardDiv>
      <Text font="body_md" color="text_primary" pb={10} mt={20}>
        Disabled
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Dropzone
          getUploadParams={getUploadParams}
          handleSubmit={handleSubmit}
          disabled
          inputContent={
            <div key={2}>
              <MainLetter>
                <Text font="body_md" color="text_primary">
                  Click or drag to upload
                </Text>
                <Text font="body_sm" color="text_primary" style={{ textAlign: 'center' }}>
                  Max file size: 1MB
                </Text>
              </MainLetter>
            </div>
          }
          submitButtonContent="Upload"
        />
      </CardDiv>
    </Container>
  );
};
