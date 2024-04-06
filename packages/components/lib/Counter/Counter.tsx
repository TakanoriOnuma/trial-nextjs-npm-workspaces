import { FC } from 'react';

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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        onClick={() => {
          onChangeCount(count - 1);
        }}
      >
        -
      </button>
      <span style={{ padding: '0 5px' }}>{count}</span>
      <button
        onClick={() => {
          onChangeCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
