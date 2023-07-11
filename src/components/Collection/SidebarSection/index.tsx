import styled from 'styled-components';
import { SidebarSectionProps, CheckboxGroupProps } from './types';
import Text from 'components/Text';
import { Card } from 'components';
import ToggleButton from 'components/ToggleButton';
import Dropdown from 'components/Dropdown';
import Checkbox from 'components/Checkbox';

const SideBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Container = styled.div`
  & .maindropdown {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: unset;
    border-right: unset;
    border-left: unset;
    & .headerWrapper {
      padding-left: 16px;
      padding-right: 16px;
    }
    background: #ffffff;
    & .icon {
      color: #c94403;
    }
    & p {
      margin-top: 8px;
      margin-bottom: 8px;
      font-size: 16px;
    }
    & .dropdown-body {
      padding-right: 16px;
      padding-left: 16px;
    }
    & .icon.open {
      transform: rotate(-90deg);
    }
  }
`;

const Wrapper = styled.span`
  margin-left: 10px;
  font-family: 'Roc Grotesk Regular';
`;

const SidebarSection = ({ onToggle, siderbarTitleData, ...props }: SidebarSectionProps) => {
  return (
    <Container>
      <Card style={{ margin: 12, paddingTop: 16, paddingBottom: 16 }}>
        <SideBarHeader>
          <Text
            font="body_md"
            color="#000000"
            style={{ fontSize: 14, fontWeight: 400, marginBottom: 16, marginTop: -2 }}
          >
            Only show in-stock items
          </Text>
          <ToggleButton
            status
            cbHandler={onToggle}
            type="simple"
            primaryColor="#FFFFFF"
            secondaryColor="#C94403"
          />
        </SideBarHeader>
        {siderbarTitleData.map((item, index) => {
          return (
            <div key={index}>
              <Dropdown headerTitle={item} className="maindropdown">
                {index == 0 && (
                  <CheckboxGroup
                    groupData={props.modelData}
                    value={props.valueModel}
                    handleClick={props.handleModelClick}
                  />
                )}
                {index == 1 && (
                  <CheckboxGroup
                    groupData={props.colorData}
                    value={props.valueColor}
                    handleClick={props.handleColorClick}
                  />
                )}
                {index == 2 && (
                  <CheckboxGroup
                    groupData={props.conditionData}
                    value={props.valueCondition}
                    handleClick={props.handleConditionClick}
                  />
                )}
              </Dropdown>
            </div>
          );
        })}
      </Card>
    </Container>
  );
};

export default SidebarSection;

const CheckboxGroup = ({ groupData, value, handleClick }: CheckboxGroupProps) => {
  return (
    <>
      {groupData && (
        <>
          {groupData.map((data, index: number) => {
            const newTitle = data.title.toString();
            const newValue = value[data.title.replace(/\s/g, '')];
            return (
              <div key={index} style={{ paddingLeft: 23, paddingRight: 23, paddingBottom: 16 }}>
                <Checkbox
                  checked={newValue}
                  onClick={() => {
                    handleClick(newTitle);
                  }}
                >
                  <Wrapper>{data.title}</Wrapper>
                </Checkbox>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
