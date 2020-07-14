import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';

const App: React.FC = () => (
  <View style={{ backgroundColor: '#F0F0F5', flex: 1 }}>
    <AppContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F0F5" />
      <Routes />
    </AppContainer>
  </View>
);

export default App;
