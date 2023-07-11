export type RichTextEditorProps = {
  onChangeValue?: ((value: string, delta: any, source: any, editor: any) => void) | undefined;
  value: string;
  disabled?: boolean;
  modules: StringMap;
};

interface StringMap {
  [key: string]: any;
}
