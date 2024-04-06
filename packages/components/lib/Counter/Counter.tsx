import { FC } from 'react';
import { Stack, IconButton, Typography } from '@mui/material';
import {
  AddCircleOutline as AddCircleOutlineIcon,
  RemoveCircleOutline as RemoveCircleOutlineIcon,
} from '@mui/icons-material';

export type CounterProps = {
  /** カウント */
  count: number;
  /**
   * カウント変更時
   * @param newCount - 新しいカウント
   */
  onChangeCount: (newCount: number) => void;
};

export const Counter: FC<CounterProps> = ({ count, onChangeCount }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton
        onClick={() => {
          onChangeCount(count - 1);
        }}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
      <Typography>{count}</Typography>
      <IconButton
        onClick={() => {
          onChangeCount(count + 1);
        }}
      >
        <AddCircleOutlineIcon />
      </IconButton>
    </Stack>
  );
};
