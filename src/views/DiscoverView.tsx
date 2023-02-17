import { useEffect } from 'react';

import Menu from '../component/Menu';
import instalikeApi from '../instalikeApi';

const DiscoverView = () => {
  useEffect(() => {
    instalikeApi.posts.fetch({ cursor: null });
    // instalikeApi.users.me.fetch()
  }, []);

  return (
    <>
      <Menu></Menu>
      DiscoverViewdsqsd
    </>
  );
};

export default DiscoverView;
