import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SolarEclipseImage from '../assets/full-solar-eclipse.png'; // Adjust the path as needed
import { useTheme } from './contexts/ThemeContext';

const TopBar = ({ title, navigation }) => {
  const { toggleTheme, currentTheme } = useTheme(); // Get current theme

  const [loading, setLoading] = useState(false); // State to track loading

  const handleThemeToggle = () => {
    if (!loading) {
      setLoading(true); // Set loading state to true
      toggleTheme(); // Toggle theme after a delay
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <View style={[styles.topBar]}>
      {title ? (
        <>
          <Text style={[styles.title, { color: currentTheme.textColor }]}>{title}</Text>
          <TouchableOpacity style={styles.icon} onPress={handleThemeToggle}>
            {loading ? (
              <ActivityIndicator color={currentTheme.textColor} />
            ) : (
              <Image source={SolarEclipseImage} style={[styles.eclipseImage, { tintColor: currentTheme.textColor }]} />
            )}
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={24} color={currentTheme.textColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={handleThemeToggle}>
            {loading ? (
              <ActivityIndicator color={currentTheme.textColor} />
            ) : (
              <Image source={SolarEclipseImage} style={[styles.eclipseImage, { tintColor: currentTheme.textColor }]} />
            )}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    marginTop: 40, // Adjust the marginTop to account for the status bar
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Use space-between to separate the icons
    height: 60, // Set a fixed height for the top bar
    width: '100%',
  },
  title: {
    alignContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  eclipseImage: {
    width: 40, // Adjust the width as needed
    height: 40, // Adjust the height as needed
  },
});

export default TopBar;
