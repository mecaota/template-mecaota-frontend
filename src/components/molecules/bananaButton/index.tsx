import { css } from '@linaria/core';
import React, { FC, useMemo, useState } from 'react';

const bananaButton = css`
  color: green;
  min-width: 200px;
`;

const BananaButton: FC = () => {
  const [count, setCount] = useState(0);
  const dispBanana = useMemo(() => {
    if (count % 3 === 0 || count.toString().includes('3')) {
      return 'バナナ';
    }
    return count.toString();
  }, [count]);

  return (
    <div>
      <button
        className={bananaButton}
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {dispBanana}
      </button>
    </div>
  );
};

export default BananaButton;
