import { ReactNode } from "react";
import  { IDropzoneProps } from 'react-dropzone-uploader'

export type DropzoneProps = {
  maxSizeBytes?: number;
  disabled?: boolean;
  inputContent?: ReactNode;
  inputWithFilesContent?: ReactNode;
  submitButtonContent?: string;
  className?: string;
  getUploadParams: IDropzoneProps['getUploadParams'];
  handleSubmit: IDropzoneProps['onSubmit']; 
};
