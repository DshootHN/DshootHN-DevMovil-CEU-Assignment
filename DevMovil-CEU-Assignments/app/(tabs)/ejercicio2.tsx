import { StyleSheet, Button, Text, Image, Platform, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const [count, setCount] = useState(0);

  const handlePress = () => {

    setCount(prevCount => {
      const newCount = prevCount + 1;

      if (newCount % 5 === 0) {
        Alert.alert("Información", `El número ${newCount} es múltiplo de cinco`);
      }

      return newCount;
    });

  };

  useEffect(() => {
    console.log(`El contador cambió: ${count}`);

    if (count !== 0 && count % 5 === 0) {
      console.log(`El número ${count} es múltiplo de cinco`);
    }
  }, [count]);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Ionicons style={styles.headerIcon} name="keypad" size={32} color="#fff" />
          <Text style={styles.headerText}>Contador de Clicks</Text>
          <Text style={styles.headerText}>{count}</Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={{ color: '#000', fontWeight: 'bold' }}>¡ CLICK !</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFF',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
  },
  header: {
      width: '100%',
      backgroundColor: '#364FC7',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
  },
  headerIcon: {
      marginBottom: 10,
  },
  headerText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10
  },
  headerInputText: {
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: "#fff",
      fontSize: 16,
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  }
})