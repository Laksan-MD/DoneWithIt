import React from 'react';
import { StyleSheet,Text,View,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text>Laksan 👨‍⚕</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent:'center',
    alignItems: 'center',
  },
});
