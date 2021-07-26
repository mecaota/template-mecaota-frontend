import React, { FC, useMemo, useState } from 'react';
import { ButtonGroup } from '@chakra-ui/react';
import Button from '@atoms/button';

const BananaButton: FC = () => {
  const [count, setCount] = useState(0);
  const dispBanana = useMemo(() => {
    if (count % 3 === 0 || count.toString().includes('3')) {
      return 'バナナ';
    }
    return count.toString();
  }, [count]);

  return (
    <ButtonGroup>
      <Button w="120px" h="24px" type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {dispBanana}
      </Button>
    </ButtonGroup>
  );
}

export default BananaButton;