import React from 'react';
import { useUser } from '../../hooks/useUser';

const BuddyFinderPage = () => {
  const { user } = useUser();

  return <div>BuddyFinderPage</div>;
};

export default BuddyFinderPage;
