import React, {useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {Screen, PostItem} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const flatListRef = useRef<FlatList<Post> | null>(null);
  useScrollToTop(flatListRef);
  const {error, refresh, loading, postList, fetchNextPage} = usePostList();
  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem key={item.id} post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.5}
        refreshing={loading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty error={error} loading={loading} refresh={refresh} />
        }
        contentContainerStyle={postList.length === 0 && $flatList}
      />
    </Screen>
  );
}

const $flatList: StyleProp<ViewStyle> = {
  flexGrow: 1,
  width: '100%',
  height: '100%',
};

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
