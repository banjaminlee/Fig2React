import React, { useEffect, useState, useCallback } from 'react';
import Collection from './index';
import styled from 'styled-components';
import * as iPhoneData from '../../@utils/iphone.json';

export default {
  title: 'Components/Collection',
  argTypes: {},
};

const defaultModelVaule = {
  iPhone12: false,
  iPhone13: false,
  iPhone14: false,
  iPhone14Pro: false,
};

const defaultColorVaule = {
  red: false,
  green: false,
  yellow: false,
};

const defaultConditionVaule = {
  Excellent: false,
  Good: false,
  Fair: false,
};

const siderbarTitleData = ['Model', 'Color', 'Condition'];

const modelData = [
  {
    id: 1,
    title: 'iPhone 12',
  },
  {
    id: 2,
    title: 'iPhone 13',
  },
  {
    id: 3,
    title: 'iPhone 14',
  },
  {
    id: 4,
    title: 'iPhone 14 Pro',
  },
];

const colorData = [
  {
    id: 1,
    title: 'red',
  },
  {
    id: 2,
    title: 'green',
  },
  {
    id: 3,
    title: 'yellow',
  },
];

const conditionData = [
  {
    id: 1,
    title: 'Excellent',
  },
  {
    id: 2,
    title: 'Good',
  },
  {
    id: 3,
    title: 'Fair',
  },
];

const selectedItems = ['iPhone 14', 'Unlocked', 'Red', 'Black', 'Green'];

const dropdownData = [
  {
    id: 1,
    title: 'Best sellers',
  },
  {
    id: 2,
    title: 'iPhone 14',
  },
];

const actionColor = [
  {
    id: 1,
    color: '#FFFFFF',
  },
  {
    id: 2,
    color: '#000000',
  },
  {
    id: 3,
    color: '#4BC189',
  },
  {
    id: 4,
    color: '#2C88FF',
  },
  {
    id: 5,
    color: '#8F00FF',
  },
  {
    id: 6,
    color: '#C94403',
  },
];

const additionalData = {
  image: './branding/svg/bestselleriPhone.svg',
  bestSellerBtn: [
    {
      title: 'Best Seller',
      image: './branding/svg/bestsellerstar.svg',
    },
  ],
  favoriteImage: './branding/svg/bestsellerheart.svg',
  previousPrice: '$324.99',
  innerContent: 'As low as $14/mo or 0% APR with',
  actionColor: actionColor,
  footerlink: 'Prequalify now.',
};

export const Story = () => {
  const initialData = iPhoneData.data;

  const onToggle = useCallback((state: boolean) => {}, []);

  const [filteringDevice, setFilteringDevice] = useState(initialData);
  const [filteringPrice, setFilteringPrice] = useState(initialData);
  const [filteringColor, setFilteringColor] = useState(initialData);
  const [filteringCondition, setFilteringCondition] = useState(initialData);
  const [filteringStorage, setFilteringStorage] = useState(initialData);
  const [filteringCarrier, setFilteringCarrier] = useState(initialData);

  const [valueModel, setValueModel] = useState<any>(defaultModelVaule);
  const [valueColor, setValueColor] = useState<any>(defaultColorVaule);
  const [valueCondition, setValueCondition] = useState<any>(defaultConditionVaule);

  const [deviceTags, setDeviceTags] = useState('');
  const [deviceColorTags, setDeviceColorTags] = useState('');
  const [deviceConditionTags, setDeviceConditionTags] = useState('');

  const [itemNumbers, setItemNumbers] = useState(initialData.length);
  const [filteringTotal, setFilteringTotal] = useState(initialData);

  const [mobileFilter, setMobileFilter] = useState(false);

  useEffect(() => {
    setFilteringTotal(
      intersection(
        filteringDevice,
        filteringPrice,
        filteringColor,
        filteringCondition,
        filteringStorage,
        filteringCarrier,
      ),
    );
  }, [
    filteringDevice,
    filteringPrice,
    filteringColor,
    filteringCondition,
    filteringStorage,
    filteringCarrier,
  ]);

  useEffect(() => {
    setItemNumbers(filteringTotal.length);
  }, [filteringTotal]);

  function intersection(arr1: any, arr2: any, arr3: any, arr4: any, arr5: any, arr6: any) {
    var object = {
        filterA: arr1,
        filterB: arr2,
        filterC: arr3,
        filterD: arr4,
        filterE: arr5,
        filterF: arr6,
      },
      result = Object.values(object).reduce((a, b) => b.filter(Set.prototype.has, new Set(a)));

    return result;
  }

  const handleCheckboxModelClick = (title: string) => {
    const newFilterValue = {
      ...defaultModelVaule,
      [title.replace(/\s/g, '')]: !valueModel[title.replace(/\s/g, '')],
    };
    setValueModel(newFilterValue);
    const newFiltered = initialData.filter((auto) =>
      auto.title.toLocaleLowerCase().includes(title.toLowerCase()),
    );
    setFilteringDevice(newFiltered);
    setDeviceTags(title);
    if (valueModel[title.replace(/\s/g, '')] == true) {
      setFilteringDevice(initialData);
      setDeviceTags('');
    }
  };

  const handleCheckboxColorClick = (title: string) => {
    const newFilterValue = {
      ...defaultColorVaule,
      [title.replace(/\s/g, '')]: !valueColor[title.replace(/\s/g, '')],
    };
    setValueColor(newFilterValue);
    const newFilteredColor = initialData.filter((x) =>
      x.variants.some((g) => g.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())),
    );

    setFilteringColor(newFilteredColor);
    setDeviceColorTags(title);
    if (valueColor[title.replace(/\s/g, '')] == true) {
      setFilteringColor(initialData);
      setDeviceColorTags('');
    }
  };

  const handleCheckboxConditionClick = (title: string) => {
    const newFilterValue = {
      ...defaultConditionVaule,
      [title.replace(/\s/g, '')]: !valueCondition[title.replace(/\s/g, '')],
    };
    setValueCondition(newFilterValue);
    const newFilteredCondition = initialData.filter((x) =>
      x.variants.some((g) => g.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())),
    );

    setFilteringCondition(newFilteredCondition);
    setDeviceConditionTags(title);
    if (valueCondition[title.replace(/\s/g, '')] == true) {
      setFilteringCondition(initialData);
      setDeviceConditionTags('');
    }
  };

  const clearHandle = () => {
    setFilteringDevice(initialData);
    setFilteringPrice(initialData);
    setFilteringColor(initialData);
    setFilteringCondition(initialData);
    setFilteringStorage(initialData);
    setFilteringCarrier(initialData);
    setDeviceTags('');
    setDeviceColorTags('');
    setDeviceConditionTags('');
    setValueModel(defaultModelVaule);
    setValueColor(defaultColorVaule);
    setValueCondition(defaultConditionVaule);
  };

  const filterHandle = () => {
    setMobileFilter(!mobileFilter);
  };

  return (
    <>
      <Collection
        resultNum={itemNumbers}
        deviceTags={deviceTags}
        deviceColorTags={deviceColorTags}
        deviceConditionTags={deviceConditionTags}
        selectedItems={selectedItems}
        clearHandle={clearHandle}
        dropdownData={dropdownData}
        filterHandle={filterHandle}
        mobileFilter={mobileFilter}
        onToggle={onToggle}
        siderbarTitleData={siderbarTitleData}
        modelData={modelData}
        valueModel={valueModel}
        handleModelClick={handleCheckboxModelClick}
        colorData={colorData}
        valueColor={valueColor}
        handleColorClick={handleCheckboxColorClick}
        conditionData={conditionData}
        valueCondition={valueCondition}
        handleConditionClick={handleCheckboxConditionClick}
        filteredData={filteringTotal}
        additionalData={additionalData}
      />
    </>
  );
};
