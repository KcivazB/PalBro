// SwitchButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from './contexts/ThemeContext';

const SwitchButton = ({ onPress, isUsingCapturedPals }) => {
  const { currentTheme } = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: currentTheme.secondaryColor, // You can change the color as needed
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: currentTheme.textColor,
      fontWeight: 'bold',
    },
  });
  
  const buttonText = isUsingCapturedPals ? "Switch to All Pals" : "Switch to My Pals";

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>
      {buttonText}
    </Text>
    </TouchableOpacity>
    
  );

};

export default SwitchButton;
