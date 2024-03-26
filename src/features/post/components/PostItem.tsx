import { FC, ReactElement } from 'react';
import Row from 'src/layout/components/Row';
import DateTimeDisplay from 'src/shared/date-time/DateTimeDisplay';
import styled from 'styled-components';

interface PostItemProps {
  post: {
    id: string;
    tags: [];
    image: string;
    title: string;
    date: string; //yyyy-mm-dd
  };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StylePostItem = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 300px;
`;

const StyleInfoItem = styled.div`
  position: absolute;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary500};
  bottom: 0;
  left: 0;
`;

const TitlePost = styled.h2`
  color: ${({ theme }) => theme.colors.dark700};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
    text-decoration: underline;
  }
`;

const TagPost = styled.h3`
  color: ${({ theme }) => theme.colors.primary600};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PostItem: FC<PostItemProps> = ({ post }): ReactElement => {
  const { image, date, title, tags } = post;

  return (
    <Wrapper>
      <StylePostItem image={image}>
        <StyleInfoItem>
          <DateTimeDisplay dateString={date} inline />
        </StyleInfoItem>
      </StylePostItem>
      <TitlePost>{title}</TitlePost>
      <Row gap="0.5rem">
        {tags.map((tag) => (
          <TagPost>#{tag}</TagPost>
        ))}
      </Row>
    </Wrapper>
  );
};

export default PostItem;
