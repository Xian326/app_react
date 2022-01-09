import React from 'react';
import {View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from './home/Home';
import Report from './component/report';
import AddPost from './component/addPost';
import User from './component/User';

const HomeRoute = () => <Home />;
//const SearchRoute = () => <Text>Search</Text>;
const AddRoute = () => <AddPost />;
//const ShopRoute = () => <Text>Shop</Text>;
const UserRoute = () => <User />;
const ReportRoute = () => <Report />;
const data = {
  users: [
    {
      id: 1,
      name: 'A',
    },
  ],
};

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'home', icon: 'home'},
    {key: 'add', title: 'add', icon: 'sticker-plus-outline'},
    {key: 'user', title: 'user', icon: 'account'},
    {key: 'report', title: 'report', icon: ' filter-remove-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    add: AddRoute,
    user: UserRoute,
    report: ReportRoute,
  });

  return (
    <BottomNavigation
      barStyle={{backgroundColor: '#e8f1f2'}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled={false}
    />
  );
};

const App = () => {
  return <MyComponent />;
};

export default App;
