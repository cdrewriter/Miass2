import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle, InfoCaption } from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { usePopularInfoStyles } from '@mui-treasury/styles/info/popular';

const PriceCatCard = React.memo(function PopularListItem() {
  const avatarStyles = useDynamicAvatarStyles({
    height: 56,
    width: 64,
    radius: 8,
  });
  return (
    <>
      <Row gap={3}>
        <Item>
          <Avatar
            variant={'rounded'}
            classes={avatarStyles}
            src={'https://freedesignfile.com/upload/2016/03/Abstract-geometric-petals-vector-graphic-03.jpg'}
          />
        </Item>
        <Info useStyles={usePopularInfoStyles}>
          <InfoSubtitle>Design</InfoSubtitle>
          <InfoTitle>Most Awaited - Figma Launches Plugin</InfoTitle>
          <InfoCaption>14 sec ago</InfoCaption>
        </Info>
      </Row>
    </>
  );
});

export default PriceCatCard;
