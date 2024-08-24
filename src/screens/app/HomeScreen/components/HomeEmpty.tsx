import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refresh: () => void;
}

export function HomeEmpty({error, loading, refresh}: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      Não há publicações no seu feed!
    </Text>
  );
  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }
  if (error) {
    component = (
      <>
        <Text bold mb="s16" preset="paragraphMedium">
          Não foi possível carregar o feed
        </Text>
        <Button onPress={refresh} title="Tentar novamente" preset="outline" />
      </>
    );
  }
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      {component}
    </Box>
  );
}
