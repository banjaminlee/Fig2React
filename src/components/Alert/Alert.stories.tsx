import React from 'react';
import Alert from './index';
import { AlertProp, AlertVariations } from './types';
import Text from '../Text';

export default {
  title: 'Components/Alert',
  argTypes: {},
};

const alerts: AlertProp[] = [
  { text: 'This is the critical alert text', variation: AlertVariations.Danger, id: '1' },
  { text: 'This is the warning text', variation: AlertVariations.Warning, id: '2' },
  { text: 'This is the info text', variation: AlertVariations.Info, id: '3' },
  { text: 'This is the success text', variation: AlertVariations.Success, id: '4' },
];

const inlineAlerts: AlertProp[] = [
  { text: 'This is the critical alert text', variation: AlertVariations.InlineDanger, id: '1' },
  { text: 'This is the warning text', variation: AlertVariations.InlineWarning, id: '2' },
  { text: 'This is the info text', variation: AlertVariations.InlineInfo, id: '3' },
  { text: 'This is the success text', variation: AlertVariations.InlineSuccess, id: '4' },
];

export const AlertStory = () => {
  return (
    <>
      <Text font="body_md" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
        Default Alerts
      </Text>
      <Alert alerts={alerts} />

      <Text font="body_md" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
        Closable Alerts
      </Text>
      <Alert alerts={alerts.map((alert) => ({ ...alert, closable: true }))} />

      <Text font="body_md" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
        Inline Alerts
      </Text>
      <Alert alerts={inlineAlerts.map((alert) => ({ ...alert, inline: true }))} />
    </>
  );
};
