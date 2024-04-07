'use client';

import { FC, useState } from 'react';

import { Counter } from '@pkg/components';

const TopPage: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      トップページ
      <div>
        <Counter count={count} onChangeCount={setCount} />
      </div>
    </div>
  );
};

export default TopPage;
