import React from 'react';
import { usePosts } from 'src/hooks/usePosts';
import Row from 'src/layout/components/Row';
import Button from 'src/shared/button/Button';
import CircularPageLoader from 'src/shared/page-loader/CircularPageLoader';

import PostItem from './PostItem';

const PostList = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = usePosts();

  if (isLoading) {
    return <CircularPageLoader />;
  }
  if (error) {
    return <div>An error occurred: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }

  return (
    <div>
      <Row columns={4} gap="0.8rem">
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </React.Fragment>
        ))}
      </Row>
      <Row width="100%" centerX marginY="1rem">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          label={isFetchingNextPage ? 'さらに読み込み中...' : hasNextPage ? 'コラムをもっと見る' : 'これ以上ロードするものはありません'}
        ></Button>
      </Row>
    </div>
  );
};

export default PostList;
