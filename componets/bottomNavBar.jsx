import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import SimionGame from './simionGame';
import HomePage from './homeScreen';
import AddTermPage from "./addTermDef";
// import Draggable from './dropArea';
import DragAndDrop from './dragAndDrop'

const HomeRoute = () => <HomePage/>;

const GameRoute = () => <AddTermPage/>;

const ScoreRoute = () => <DragAndDrop/>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'game', title: 'Game', icon: 'gamepad' },
    { key: 'score', title: 'HighScore', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    game: GameRoute,
    score: ScoreRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;