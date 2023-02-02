import { useEffect } from 'react';

import instalikeApi from '../instalikeApi';

const DiscoverView = () => {
  useEffect(() => {
    instalikeApi.posts.fetch({ cursor: null });
    // instalikeApi.users.me.fetch()
  }, []);

  return <>DiscoverView</>;
};

export default DiscoverView;
