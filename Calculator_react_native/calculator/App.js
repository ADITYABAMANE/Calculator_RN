import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text } from 'react-native';
import Display from './components/display';
import { styles } from './assets/style';
import Keyboard from './components/keyboard/keyboard';

export default function App() {
  const [oldOper, setOldOper] = useState("");
  const [oper, setOper] = useState("");

  return (
    <View style={styles.container}>
      <Display
        oper={oper}
        setOper={setOper}
      />
      <Keyboard 
        oper={oper}
        setOper={setOper}
      />
      <StatusBar style="dark" />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by Aditya Bamane</Text>
      </View>
    </View>
  );
}
