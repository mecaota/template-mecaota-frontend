import React, { FC, useMemo, useState } from 'react';
import { Button } from '@atoms/button';

const Component: FC = () => {
  const [count, setCount] = useState(0);
  const dispBanana = useMemo(() => {
    if (count % 3 === 0 || count.toString().includes('3')) {
      return 'バナナ';
    }
    return count.toString();
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello My page</p>
        <p>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {dispBanana}
          </Button>
        </p>
      </header>
    </div>
  );
};

const IndexPage = React.memo(Component)
export default IndexPage;
