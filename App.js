import React from 'react';
import { StyleSheet,Text,View,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text> Laksan 👨‍⚕</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent:'center',
    alignItems: 'center',
  },
});
