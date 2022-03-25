import { FieldError } from 'react-hook-form';
import styled from 'styled-components/native';

interface InputContainerProps {
  inputSize: number | string;
}

interface TextInputProps {
  error?: FieldError;
  value: string;
}

interface BorderColorProps {
  error?: FieldError;
  value: string;
}

const handleBorderColor = ({ value, error }: BorderColorProps) => {
  if (error) {
    return '#ff0000';
  }
  if (value) {
    return '#27AD3D';
  }
  return '#cfcfcf';
};

export const Container = styled.View<InputContainerProps>`
  width: ${({ inputSize }) => (typeof inputSize === 'number' ? `${inputSize}px` : inputSize)};
  margin-bottom: 15px;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  background-color: #cfcfcf42;
  border-radius: 4px;
  padding: 10px 20px;
  border-width: 1px;
  border-color: ${handleBorderColor};
`;

export const ErrorMessage = styled.TextInput`
  color: #f00;
  /* elevation: 10; */
`;
