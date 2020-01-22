import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { VideoResourcesList } from './VideoResourcesList';
import { VideoUpNextList } from './VideoUpNextList';

export const VideoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Tabs
        variant="standard"
        value={activeTab}
        onChange={(event, newValue) => setActiveTab(newValue)}
      >
        <Tab label="Resources" />
        <Tab label="Up Next" />
      </Tabs>

      <SwipeableViews
        axis="x"
        index={activeTab}
        onChangeIndex={(index: number) => setActiveTab(index)}
      >
        <VideoResourcesList />
        <VideoUpNextList />
      </SwipeableViews>
    </>
  );
};
