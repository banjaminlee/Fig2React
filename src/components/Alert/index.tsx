import React, { useState } from 'react';
import styled from 'styled-components';
import { AlertProps, AlertVariations } from './types';
import { Error, Warning, Info, Success, Close } from '../Svgs';

const AlertDiv = styled.div<{ bgColor: AlertVariations; inline?: boolean }>`
  padding: 15px 20px 15px 20px;
  background-color: ${({ bgColor, inline }) => (bgColor && !inline ? bgColor : 'white')};
  margin: 15px 0 15px 0;
  border-radius: 10px;
  display: flex;
`;

const CloseDiv = styled.div`
  flex-grow: 1;
  justify-content: end;
  display: flex;
  cursor: pointer;
`;

const TextDiv = styled.div<{ textColor: AlertVariations; inline?: boolean }>`
  flex-grow: 4;
  padding-top: 6.5px;
  font-family: 'Roc Grotesk Bold';
  color: ${({ textColor, inline }) => (textColor && inline ? textColor : 'White')}; ;
`;

const IconDiv = styled.div`
  flex-grow: 0.1;
  align-items: center;
  justify-content: start;
  svg {
    padding-top: 5px;
  }
`;

const Alert: React.FC<AlertProps> = ({ alerts }) => {
  const icons = {
    [AlertVariations.Danger]: <Error color="ui_error" />,
    [AlertVariations.Warning]: <Warning color="ui_pending" />,
    [AlertVariations.Info]: <Info color="info" />,
    [AlertVariations.Success]: <Success color="ui_success" />,
    [AlertVariations.InlineDanger]: <Error color={AlertVariations.InlineDanger} />,
    [AlertVariations.InlineWarning]: <Warning color={AlertVariations.InlineWarning} />,
    [AlertVariations.InlineInfo]: <Info color={AlertVariations.InlineInfo} />,
    [AlertVariations.InlineSuccess]: <Success color={AlertVariations.InlineSuccess} />,
  };

  const [alertsArray, setAlerts] = useState(alerts);

  const closeAlert = (id: string) => setAlerts(alertsArray.filter((a) => a.id !== id));

  return (
    <>
      {alertsArray.map((alert) => (
        <AlertDiv
          bgColor={alert.variation}
          inline={alert.inline}
          key={alert.id}
          data-testid="alert"
        >
          <IconDiv>{icons[alert.variation]}</IconDiv>
          <TextDiv inline={alert.inline} textColor={alert.variation}>
            {alert.text}
          </TextDiv>

          {alert.closable && (
            <CloseDiv data-testid="closeBtn" onClick={() => closeAlert(alert.id)}>
              <IconDiv>
                <Close color="white" />
              </IconDiv>
            </CloseDiv>
          )}
        </AlertDiv>
      ))}
    </>
  );
};

export default Alert;
