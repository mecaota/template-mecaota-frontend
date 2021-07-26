import React, { FC } from 'react';
import BananaButton from '@organisms/bananaButton';

const Component: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello My page</p>
        <BananaButton />
      </header>
    </div>
  );
};

const IndexPage = React.memo(Component)
export default IndexPage;
