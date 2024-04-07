import type { SvgIcon } from '@mui/material';

export type NavigationItem = {
  /** アイコン */
  Icon?: typeof SvgIcon;
  /** タイトル */
  title: string;
  /** 遷移先 */
  href: string;
  /** 完全にURLマッチした時にactiveにするか */
  exactPath?: boolean;
};
