import React, {type PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

const App: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View>
      <Text>hello, world</Text>
    </View>
  );
};

export default App;
