import { StyleSheet, Button, Text, Image, Platform, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handlePress = () => {

    if (!name.trim()) {
      Alert.alert("Error", "Por favor ingrese su nombre.");
      return;
    }

    if (!age.trim()) {
      Alert.alert("Error", "Por favor ingrese su edad.");
      return;
    }
    
    if (!/^\d+$/.test(age)) {
      Alert.alert("Error", "La edad solo debe contener números.");
      return;
    }

    Alert.alert("Bienvenido", `Hola, ${name}. \n Tienes ${age} años.`);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Ionicons style={styles.headerIcon} name="information-circle-outline" size={32} color="#fff" />
          <Text style={styles.headerText}>Informacion</Text>
          <TextInput
            style={styles.headerInputText}
            placeholder="Nombre Completo"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.headerInputText}
            placeholder="Edad"
            value={age}
            onChangeText={setAge}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={{ color: '#000', fontWeight: 'bold' }}>Siguiente</Text>
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