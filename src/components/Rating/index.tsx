import React, { Fragment } from 'react';
import styled from 'styled-components';
import { RatingProps } from './types';
import Text from '../Text';

const RatingBody = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const RatingWrap = styled.div`
  max-width: 480px;
  text-align: center;
`;

const CenterDiv = styled.div`
  width: auto;
`;

const FieldSet = styled.fieldset`
  border: none;
  float: right;
  width: auto;
`;

type ExtraLabelProp = {
  isHalf: boolean;
  disabled: boolean;
  size?: number;
};
let RatingInput = styled.input``;

const RatingLabel = styled.label<ExtraLabelProp>`
  &:before {
    content: '\f005';
    font-family: FontAwesome;
    margin: ${({ size }) => (size ? '2px' : '5px')};
    font-size: ${({ size }) => (size ? `${size}rem` : '1rem')};
    display: inline-block;
    cursor: pointer;
  }
  &:hover {
    color: #5e75f7;
  }
  ${({ isHalf }) =>
    isHalf &&
    `&:before {
        content: '\f089';
        position: absolute;
        cursor: pointer;
    }
    &:hover {
        color: #5870ff
    }
    `}
  color: #ddd;
  float: right;
  cursor: pointer;
  &:hover ~ ${RatingInput}:checked {
    color: #5870ff;
  }
  &:hover ~ ${RatingInput}:not(:checked) {
    color: #5e75f7;
  }
  ${({ disabled }) => disabled && `pointer-events: none`}
`;

RatingInput = styled.input`
  display: none;
  &:checked ~ ${RatingLabel} {
    color: #5e75f7;
  }
  &:not(:checked) > ${RatingLabel}:hover {
    color: #5e75f7;
  }
  &:not(:checked) > ${RatingLabel}:hover ~ ${RatingLabel} {
    color: #5e75f7;
  }
  &:checked + ${RatingLabel}:hover {
    color: #5870ff;
  }
  &:checked ~ ${RatingLabel}:hover {
    color: #5870ff;
  }
  &:checked ~ ${RatingLabel}:hover ~ ${RatingLabel} {
    color: #5870ff;
  }
`;

const Breadcrumb: React.FC<RatingProps> = ({ disabled, onChange, size, value = 0 }) => {
  const ratingArray = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1];

  const changeHandler = (rating: number) => {
    if (onChange) {
      onChange(rating);
    }
  };

  return (
    <RatingBody>
      <RatingWrap>
        <CenterDiv>
          <FieldSet>
            {ratingArray.map((ratingArr, index) => (
              <Fragment key={ratingArr}>
                <RatingInput
                  type="radio"
                  id={`star${ratingArray[ratingArray.length - 1 - index]}`}
                  name="rating"
                  onClick={() => {
                    changeHandler(ratingArr);
                  }}
                  disabled={disabled}
                />
                <RatingLabel
                  htmlFor={`star${ratingArray[ratingArray.length - 1 - index]}`}
                  disabled={disabled as boolean}
                  isHalf={index % 2 !== 0}
                  size={size}
                />
              </Fragment>
            ))}
            {value > 0 && (
              <Text
                font="headingMedium5"
                color="text_primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Your Rating is {value}
              </Text>
            )}
          </FieldSet>
        </CenterDiv>
      </RatingWrap>
    </RatingBody>
  );
};

export default Breadcrumb;
