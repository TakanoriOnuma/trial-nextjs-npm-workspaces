import { FC } from 'react';
import { Button, Box } from '@mui/material';
import NextLink from 'next/link';

const PlainPage: FC = () => {
  return (
    <Box>
      <Box>プレーンTOPページ</Box>
      <Button LinkComponent={NextLink} variant="contained" href="/">
        トップページへ
      </Button>
    </Box>
  );
};

export default PlainPage;
