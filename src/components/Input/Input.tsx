import React from 'react';
import { Control, useController } from 'react-hook-form';
import { LogBox, TextInput as TextInputBase, TextInputProps } from 'react-native';
import { Container, ErrorMessage, TextInput } from './styles';

/**
 * Extrai o generico do control
 */
type ExtractGeneric<P> = P extends Control<infer T> ? T : never;

/**
 * Devolve os nomes baseado no tipo do control
 */
type Names<T> = keyof ExtractGeneric<T>;

type BaseControl = Control<any, any>;

type Props<ControlType> = {
  control: ControlType;
  inputRef?: React.Ref<TextInputBase>;
  name: Names<ControlType>;
  inputSize?: number | string;
} & TextInputProps;

/**
 *
 * @param control Control recebido do useForm
 * @param name Name do input
 * @param inputRef Ref do input
 *
 * @see
 * Para mudar a estilização da Input basta alterar no {@link TextInput} e no {@link Container}
 */
const Input = <ControlType extends BaseControl>({
  control,
  name,
  inputRef,
  inputSize = '100%',
  ...props
}: Props<ControlType>) => {
  if (!control) {
    throw new Error('Control não foi passado como prop');
  }

  if (!name) {
    throw new Error('Name não foi passado como prop');
  }

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name: String(name),
  });

  return (
    <Container inputSize={inputSize}>
      <TextInput
        ref={inputRef ?? field.ref}
        onChangeText={field.onChange}
        value={field.value}
        onBlur={field.onBlur}
        error={error}
        {...props}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};

export default Input;
