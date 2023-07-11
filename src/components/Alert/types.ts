export type AlertProp = {
  variation: AlertVariations;
  text: string;
  id: string;
  closable?: boolean;
  inline?: boolean;
};

export type AlertProps = {
  alerts: AlertProp[];
};

export enum AlertVariations {
  Danger = '#dc3545',
  Warning = '#ffc107',
  Info = '#007bff',
  Success = '#28a745',
  InlineWarning = '#e59c01',
  InlineDanger = '#d42551',
  InlineInfo = '#25a9ef',
  InlineSuccess = '#03b080',
}
