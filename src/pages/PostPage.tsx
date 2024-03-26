import CategoryList from 'src/features/post/components/CategoryList';
import PostList from 'src/features/post/components/PostList';
import { device } from 'src/theme';
import styled from 'styled-components';

const PostWrapper = styled.div`
  width: 100%;

  padding: 15px 10%;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media ${device.small} {
    padding: 15px 5%;
  }

  @media ${device.medium} {
    padding: 15px 10%;
  }

  @media ${device.large} {
    padding: 15px 10%;
  }
`;

const PostPage = () => {
  return (
    <PostWrapper>
      <CategoryList />
      <PostList />
    </PostWrapper>
  );
};

export default PostPage;
