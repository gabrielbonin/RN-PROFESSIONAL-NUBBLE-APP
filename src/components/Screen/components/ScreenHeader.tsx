import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;

const ICON_SIZE = 20;

export function ScreenHeader({title, canGoBack}: Props) {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb="s24">
      {canGoBack && (
        <TouchableOpacityBox flexDirection="row" onPress={navigation.goBack}>
          <Icon name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
