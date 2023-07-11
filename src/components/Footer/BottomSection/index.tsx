import { BottomSectionProps } from './types';
import Text from 'components/Text';

const BottomSection = ({ data }: BottomSectionProps) => {
  return (
    <>
      {data.map((txt: any, index: number) => (
        <Text
          font="bodyMain"
          style={{
            fontSize: 14,
            color: '#FCF7ED',
            fontWeight: 400,
            marginBottom: 16,
            textAlign: 'center',
          }}
          key={index}
        >
          {txt}
        </Text>
      ))}
    </>
  );
};
export default BottomSection;
