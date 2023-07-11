import React, { FC, forwardRef, useState, useEffect, useCallback, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Flex from '../Flex';
import Image from '../Image';
import Text from '../Text';
import { InputProps, InputWithIconProps } from './types';
import validator from 'validator';

const moveUp = keyframes`
  from {
    top: 0px;
    transform : scale(1);
  }
  50% {
    top: -10px;
    transform : scale(0.95);
  } 
  to {
    top: -22px;
    transform : scale(0.9);
  }
`;

const MainWrapper = styled.div`
  position: relative;
`;

export const InputLabel = styled(Text)<{
  isFocus: boolean;
  isError?: boolean;
  showUp?: boolean;
  disabled?: boolean;
}>`
  position: absolute;
  z-index: 2;
  margin: 12px 11px;
  background: ${({ disabled, theme }) => (disabled ? theme.colors.background_primary : 'white')};
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
  padding-bottom: 1px;
  border-opacity: 0.1;
  border-radius: 10px;
  ${(props) =>
    props.showUp
      ? css`
          animation: ${moveUp} 0.1s linear;
          animation-fill-mode: forwards;
        `
      : css`
          animation: none;
        `};

  margin-bottom: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ isError, isFocus, theme }) =>
    isError ? theme.colors.error : isFocus ? theme.colors.periwinkle : theme.colors.text_primary};
`;

export const StyledInput = styled.input<{
  width?: number;
  height?: number;
  bg?: string;
  radius?: number;
  isIcon?: boolean;
  isError?: boolean;
  disabled?: boolean;
}>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  padding: ${({ isIcon }) => (isIcon ? '12px 12px 12px 36px' : '14px 12px')};
  background: ${({ bg }) => (bg ? bg : 'transparent')};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : '4px')};
  border: ${({ isError, theme }) =>
    isError ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.grays}`};
  box-sizing: border-box;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  border: 0.5px solid #5870ff;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.text_primary};

  &:active {
    background: ${({ bg }) => (bg ? bg : 'transparent')};
    border: ${({ isError, theme }) =>
      isError ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.periwinkle}`};
  }

  &:hover {
    background: ${({ bg }) => (bg ? bg : 'transparent')};
    border: ${({ isError, theme }) =>
      isError ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.periwinkle_light}`};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.background_secondary};
    border: ${({ theme }) => `1px solid ${theme.colors.grays}`};
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.grays};
  }

  &:focus-visible {
    background: ${({ bg }) => (bg ? bg : 'transparent')};
    border: ${({ isError, theme }) =>
      isError ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.periwinkle}`};
    outline: ${({ isError, theme }) =>
      isError ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.periwinkle}`};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.text_primary};
    font-size: 11px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: ${({ width }) => (width ? width : '311px')};
  }
`;

export const InputText = styled(Text)<{ isFocus: boolean; isError?: boolean }>`
  margin-top: 6px;
  color: ${({ isError, isFocus, theme }) =>
    isError ? theme.colors.error : isFocus ? theme.colors.periwinkle : theme.colors.text_primary};
`;

export const Input: FC<InputProps> = ({
  id,
  label,
  name,
  value,
  type = 'text',
  placeholder = '',
  hint,
  isError,
  error,
  disabled,
  cbHandler,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isError || error) setHasError(true);
    else setHasError(false);
  }, [error, isError]);

  const changeHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (cbHandler) {
        cbHandler({
          name: e.target.name,
          value: e.target.value,
        });
      }
    },
    [cbHandler],
  );

  const focusHandler = useCallback((state) => {
    setIsFocus(state);
  }, []);

  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    if (isFocus && value == '') setIsClick(true);
    else if (value != '') setIsClick(true);
    else setIsClick(false);
  }, [isFocus, value]);

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!disabled) {
      ref.current?.focus();
      setIsFocus(true);
    }
  };

  return (
    <MainWrapper>
      {label && (
        <InputLabel
          font="body_md"
          isFocus={isFocus}
          isError={hasError}
          showUp={isClick}
          disabled={disabled}
          onClick={handleClick}
        >
          {label}
        </InputLabel>
      )}

      <StyledInput
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        isError={hasError}
        disabled={disabled}
        {...props}
        onMouseDown={() => focusHandler(true)}
        onBlur={() => focusHandler(false)}
        onChange={changeHandler}
        ref={ref}
      />
      {(hint || error) && (
        <InputText font="body_md_bold" isFocus={isFocus} isError={hasError}>
          {hint || error}
        </InputText>
      )}
    </MainWrapper>
  );
};

const InputByRef = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      name,
      value,
      type = 'text',
      placeholder = '',
      hint,
      isError,
      error,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [isFocus, setIsFocus] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      if (isError || error) setHasError(true);
      else setHasError(false);
    }, [error, isError]);

    const changeHandler = useCallback((e) => {
      e.preventDefault();
    }, []);

    const focusHandler = useCallback((state) => {
      setIsFocus(state);
    }, []);

    const [isClick, setIsClick] = useState(false);

    useEffect(() => {
      if (isFocus && value == '') setIsClick(true);
      else if (value != '') setIsClick(true);
      else setIsClick(false);
    }, [isFocus, value]);

    return (
      <>
        {label && (
          <InputLabel
            font="body_md"
            isFocus={isFocus}
            isError={hasError}
            showUp={isClick}
            disabled={disabled}
          >
            {label}
          </InputLabel>
        )}
        <StyledInput
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          isError={hasError}
          ref={ref}
          disabled={disabled}
          {...props}
          onMouseDown={() => focusHandler(true)}
          onBlur={() => focusHandler(false)}
          onChange={changeHandler}
        />
        {(hint || error) && (
          <InputText font="body_md_bold" isFocus={isFocus} isError={hasError}>
            {hint || error}
          </InputText>
        )}
      </>
    );
  },
);
InputByRef.displayName = 'InputByRef';

export { InputByRef };

const Wrapper = styled(Flex)`
  position: relative;
`;

const ImageIcon = styled(Image)`
  position: absolute;
  left: 12px;
`;

export const InputWithIcon: FC<InputWithIconProps> = ({
  name,
  value,
  placeholder,
  icon,
  cbHandler,
}) => {
  const changeHandler = useCallback(
    (data) => {
      cbHandler({
        name: data.name,
        value: data.value,
      });
    },
    [cbHandler],
  );

  return (
    <Wrapper>
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        isIcon
        required
        cbHandler={changeHandler}
      />
      <ImageIcon src={icon} alt="Icon" />
    </Wrapper>
  );
};

export const PhoneInput: FC<InputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  isError,
  error,
  disabled,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isError || error) setHasError(true);
    else setHasError(false);
  }, [error, isError]);

  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function formatPhoneNumber(value: string) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }

  const focusHandler = useCallback((state) => {
    setIsFocus(state);
  }, []);

  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    if (isFocus && inputValue == '') setIsClick(true);
    else if (inputValue != '') setIsClick(true);
    else setIsClick(false);
  }, [isFocus, inputValue]);

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!disabled) {
      ref.current?.focus();
      setIsFocus(true);
    }
  };

  return (
    <MainWrapper>
      {label && (
        <InputLabel
          font="body_md"
          isFocus={isFocus}
          isError={hasError}
          showUp={isClick}
          onClick={handleClick}
        >
          {label}
        </InputLabel>
      )}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        isError={hasError}
        disabled={disabled}
        {...props}
        onMouseDown={() => focusHandler(true)}
        onBlur={() => focusHandler(false)}
        onChange={(e) => handleInput(e)}
        value={inputValue}
        ref={ref}
      />
      <InputText font="body_md_bold" isFocus={isFocus} isError={hasError}>
        (123)-456-7890
      </InputText>
    </MainWrapper>
  );
};

export const EmailInput: FC<InputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  hint,
  disabled,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hasError, setHasError] = useState(false);

  const focusHandler = useCallback((state) => {
    setIsFocus(state);
  }, []);

  const [message, setMessage] = useState('');
  const [error, setError] = useState<string>('');

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
      setHasError(true);
    } else {
      setError('');
      setHasError(false);
    }

    setMessage(event.target.value);
  };

  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    if (isFocus && message == '') setIsClick(true);
    else if (message != '') setIsClick(true);
    else setIsClick(false);
  }, [isFocus, message]);

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!disabled) {
      ref.current?.focus();
      setIsFocus(true);
    }
  };

  return (
    <MainWrapper>
      {label && (
        <InputLabel
          font="body_md"
          isFocus={isFocus}
          isError={hasError}
          showUp={isClick}
          onClick={handleClick}
        >
          {label}
        </InputLabel>
      )}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
        onMouseDown={() => focusHandler(true)}
        onBlur={() => focusHandler(false)}
        value={message}
        onChange={handleChange}
        isError={hasError}
        ref={ref}
      />
      {error ? (
        <InputText font="caption_md_bold" isFocus={isFocus} isError={hasError}>
          {error}
        </InputText>
      ) : (
        hint && (
          <InputText font="caption_md_bold" isFocus={isFocus} isError={hasError}>
            {hint}
          </InputText>
        )
      )}
    </MainWrapper>
  );
};

export const FieldInput: FC<InputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  disabled,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  const focusHandler = useCallback((state) => {
    setIsFocus(state);
    setIsSkipped(true);
  }, []);

  const [message, setMessage] = useState('');
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value == '' && isSkipped == true) {
      setError('This field is required');
      setHasError(true);
    } else {
      setError('');
      setHasError(false);
    }

    setMessage(event.target.value);
  };

  useEffect(() => {
    if (message == '' && isSkipped) {
      setError('This field is required');
      setHasError(true);
    }
  }, [isSkipped, message]);

  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    if (isFocus && message == '') setIsClick(true);
    else if (message != '') setIsClick(true);
    else setIsClick(false);
  }, [isFocus, message]);

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!disabled) {
      ref.current?.focus();
      setIsFocus(true);
    }
  };

  return (
    <MainWrapper>
      {label && (
        <InputLabel
          font="body_md"
          isFocus={isFocus}
          isError={hasError}
          showUp={isClick}
          onClick={handleClick}
        >
          {label}
        </InputLabel>
      )}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
        onMouseDown={() => focusHandler(true)}
        onBlur={() => focusHandler(false)}
        value={message}
        onChange={handleChange}
        isError={hasError}
        ref={ref}
      />
      {error && (
        <InputText font="caption_md_bold" isFocus={isFocus} isError={hasError}>
          {error}
        </InputText>
      )}
    </MainWrapper>
  );
};

const MainPasswordWrapper = styled.div`
  position: relative;
`;

const ShowHideWrapper = styled.div`
  position: absolute;
  top: 13px;
  left: 275px;
  & .btn-outline-primary {
    border: unset;
    background: unset;
  }
`;

export const PasswordInput: FC<InputProps> = ({
  id,
  label,
  placeholder = '',
  hint,
  disabled,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hasError, setHasError] = useState(false);

  const focusHandler = useCallback((state) => {
    setIsFocus(state);
  }, []);

  const [error, setError] = useState<string>('');

  const [isClick, setIsClick] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!disabled) {
      ref.current?.focus();
      setIsFocus(true);
    }
  };

  const [passwordType, setPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
    if (
      validator.isStrongPassword(event.target.value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError('');
      setHasError(false);
    } else {
      setHasError(true);
    }
  };
  const togglePassword = () => {
    setIsClick(true);
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  useEffect(() => {
    if (isFocus && passwordInput == '') setIsClick(true);
    else if (passwordInput != '') setIsClick(true);
    else setIsClick(false);
  }, [isFocus, passwordInput]);

  return (
    <MainWrapper>
      {label && (
        <InputLabel
          font="body_md"
          isFocus={isFocus}
          isError={hasError}
          showUp={isClick}
          onClick={handleClick}
        >
          {label}
        </InputLabel>
      )}
      <MainPasswordWrapper>
        <StyledInput
          id={id}
          type={passwordType}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
          onMouseDown={() => focusHandler(true)}
          onBlur={() => focusHandler(false)}
          value={passwordInput}
          onChange={handlePasswordChange}
          isError={hasError}
          ref={ref}
        />
        <ShowHideWrapper>
          <button className="btn btn-outline-primary" onClick={togglePassword}>
            {passwordType === 'password' ? (
              <Image src={'./branding/svg/password-eye-slash.svg'} className="eyeSlash" />
            ) : (
              <Image src={'./branding/svg/password-eye.svg'} className="eye" />
            )}
          </button>
        </ShowHideWrapper>
      </MainPasswordWrapper>

      {error ? (
        <InputText font="caption_md_bold" isFocus={isFocus} isError={hasError}>
          {error}
        </InputText>
      ) : (
        hint && (
          <InputText font="caption_md_bold" isFocus={isFocus} isError={hasError}>
            {hint}
          </InputText>
        )
      )}
    </MainWrapper>
  );
};
