import React from 'react';
import Text from '../Text';
import Breadcrumb from './index';

export default {
  title: 'Components/Breadcrumb',
  argTypes: {},
};

export const BreadcrumbStory: React.FC = () => {
  const initprops = [
    {
      displayName: 'Home',
      redirect: (index, arLength) => {
        const newProps = arLength.slice(0, (arLength.length - (index + 1)) * -1);
        setProps(newProps);
      },
      id: 1,
    },
    {
      displayName: 'Categories',
      redirect: (index, arLength) => {
        const newProps = arLength.slice(0, (arLength.length - (index + 1)) * -1);
        setProps(newProps);
      },
      id: 2,
    },
    {
      displayName: 'Mobile Phones',
      redirect: (index, arLength) => {
        const newProps = arLength.slice(0, (arLength.length - (index + 1)) * -1);
        setProps(newProps);
      },
      id: 3,
    },
    {
      displayName: 'All iPhones',
      redirect: (index, arLength) => {
        const newProps = arLength.slice(0, (arLength.length - (index + 1)) * -1);
        setProps(newProps);
      },
      id: 4,
    },
    {
      displayName: 'iPhone 14',
      redirect: (index, arLength) => undefined,
      id: 5,
    },
  ];

  const [props, setProps] = React.useState<any>([]);

  React.useEffect(() => {
    setProps(initprops);
  }, []);

  return (
    <>
      <Text font="heading_md" color="text_primary" mt="10px" mb="10px">
        Breadcrumb
      </Text>
      <Breadcrumb breadcrumbs={props} />
    </>
  );
};
