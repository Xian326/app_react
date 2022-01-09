import React from 'react';
import {Router, Stack, Scene, Drawer} from 'react-native-router-flux';
import SettingDrawer from './SettingDrawer.js';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import SettingList from './SettingList.js';

const Routes = () => {
  return (
    <Router>
      <Drawer contentComponent={SettingDrawer}>
        <Stack key="root" headerLayoutPreset="center">
          <Scene key="TodoList" component={TodoList} title="待辦事項" initial />
          <Scene key="TodoForm" component={TodoForm} title="新增待辦" back />
          <Scene
            key="SettingList"
            component={SettingList}
            title="快速設定"
            back
          />
        </Stack>
      </Drawer>
    </Router>
  );
};

export default Routes;
