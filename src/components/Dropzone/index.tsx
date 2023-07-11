import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { DropzoneProps } from './types';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';

const Wrapper = styled.div`
  & .dzu-dropzoneDisabled {
    cursor: not-allowed;
  }
  & .dzu-inputLabelWithFiles,
  & .dzu-submitButton {
    font-family: 'Roc Grotesk Regular';
    font-size: 0.75rem;
  }
`;

const DropzoneCom: FunctionComponent<DropzoneProps> = ({
  getUploadParams,
  handleSubmit,
  className,
  ...props
}) => {
  return (
    <Wrapper className={className}>
      <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} {...props} />
    </Wrapper>
  );
};

export default DropzoneCom;
