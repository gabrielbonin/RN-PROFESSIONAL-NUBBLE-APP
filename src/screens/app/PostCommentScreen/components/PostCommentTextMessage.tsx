import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface PostCommentTextMessageProps {
  postId: number;
}

export function PostCommentTextMessage({postId}: PostCommentTextMessageProps) {
  const [message, setMessage] = useState('');
  const {createComment} = usePostCommentCreate(postId);
  async function onPressSend() {
    await createComment(message);
    setMessage('');
    Keyboard.dismiss();
  }

  return (
    <TextMessage
      value={message}
      onChangeText={setMessage}
      onPressSend={onPressSend}
    />
  );
}
