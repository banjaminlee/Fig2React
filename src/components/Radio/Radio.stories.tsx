import React, { useEffect, useState } from 'react';
import Text from '../Text';
import { RadioInput } from './index';
import styled from 'styled-components';
import GridLayout from '../GridLayout';

export default {
  title: 'Components/Radio',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

const Section = styled.div``;

export const Story = () => {
  const [animal, setAnimal] = useState('');
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  return (
    <>
      <Text font="heading2" color="text_primary" pt={20} pb={15}>
        Radio
      </Text>
      <Text font="bodyMain" color="text_primary" pb={10}>
        Use a radio when the user can select one option from a list of possible options.
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <GridLayout>
          <Section>
            <Text font="bodyMain" color="text_primary" pb={10}>
              Single Selection
            </Text>
            <RadioInput label="Tiger" value="Tiger" checked={animal} setter={setAnimal} />
            <RadioInput label="Lion" value="Lion" checked={animal} setter={setAnimal} />
            <RadioInput label="Elephant" value="Elephant" checked={animal} setter={setAnimal} />
          </Section>
          <Section>
            <Text font="bodyMain" color="text_primary" pb={10}>
              Multiple Selection
            </Text>
            <RadioInput label="Male" value="male" checked={gender} setter={setGender} />
            <RadioInput label="Female" value="female" checked={gender} setter={setGender} />
            <RadioInput label="Admin" value="admin" checked={role} setter={setRole} />
            <RadioInput label="Guest" value="guest" checked={role} setter={setRole} />
            <RadioInput label="25" value="25" checked={age} setter={setAge} />
            <RadioInput label="35" value="35" checked={age} setter={setAge} />
            <RadioInput label="45" value="45" checked={age} setter={setAge} />
          </Section>
        </GridLayout>
      </CardDiv>
      <Text font="heading2" color="text_primary" mt={30}>
        Sizes
      </Text>
      <Text font="bodyMain" color="text_primary" pb={10}>
        Radio has two sizes: Small and Large. The default size is small.
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Text font="bodyMain" color="text_primary" mt={10}></Text>
        <RadioInput
          label="Panda"
          value="Panda"
          checked={animal}
          setter={setAnimal}
          style={{ marginBottom: 5 }}
        />
        <RadioInput
          customsize="Large"
          label="Monkey"
          value="Monkey"
          checked={animal}
          setter={setAnimal}
        />
      </CardDiv>
      <Text font="heading2" color="text_primary" mt={30}>
        States
      </Text>
      <Text font="bodyMain" color="text_primary" pb={10}>
        Radio can be checked or unchecked. Radio have idle and disabled states.
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <RadioInput
          customsize="Large"
          label="Rabbit"
          value="Rabbit"
          checked={animal}
          setter={setAnimal}
          style={{ marginBottom: 5 }}
        />
        <RadioInput
          customsize="Large"
          label="Dog"
          value="Dog"
          checked={animal}
          setter={setAnimal}
          disabled
        />
      </CardDiv>
    </>
  );
};
