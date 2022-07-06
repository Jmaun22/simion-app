import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;

const GameRoute = () => <Text>Game</Text>;

const ScoreRoute = () => <Text>Score</Text>;

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