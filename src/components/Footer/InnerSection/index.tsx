import { InnerSectionProps } from './types';
import Text from 'components/Text';
import { RouteLink } from 'components/Link';

const InnerSection = ({ data }: InnerSectionProps) => {
  const itemCase = (item: any) => {
    return (
      <>
        {item.case &&
          item.case.map((cases: any, index: number) => {
            return (
              <div key={index}>
                <RouteLink size="Medium" path={cases.link}>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginBottom: 10,
                    }}
                  >
                    {cases.titlecase}
                  </Text>
                </RouteLink>
              </div>
            );
          })}
      </>
    );
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Text
              font="bodyMain"
              style={{
                fontSize: 20,
                color: '#5870FF',
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              {item.title}
            </Text>
            {itemCase(item)}
          </div>
        );
      })}
    </>
  );
};

export default InnerSection;
