import React, {useRef} from 'react';
import {Pressable} from 'react-native';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {$textInputStyle} from '../TextInput/TextInput';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: () => void;
  value?: string;
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  const sendIsDisabled = value?.trim().length === 0;

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Pressable onPressIn={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        backgroundColor="gray5">
        <RNTextInput
          autoCapitalize="none"
          value={value}
          placeholder="Adicione um comentário"
          ref={inputRef}
          {...rnTextInputProps}
          style={[$textInputStyle, {color: colors.gray1}]}
        />
        <Pressable disabled={sendIsDisabled} onPress={onPressSend}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
