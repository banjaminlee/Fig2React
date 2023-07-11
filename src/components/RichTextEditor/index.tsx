import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { RichTextEditorProps } from './types';

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  onChangeValue,
  value,
  disabled = false,
  modules,
}) => {
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      onChange={onChangeValue}
      placeholder="Content goes here..."
      value={value}
      readOnly={disabled}
    />
  );
};

export default RichTextEditor;
