import React from 'react';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  navigation,
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>PostCommentScreen</Text>
      </Box>
    </Screen>
  );
}
