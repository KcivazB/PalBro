import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './contexts/ThemeContext';

const PalStatsBlock = ({ stats }) => {
  const { currentTheme } = useTheme();

  const statEmojis = {
    "hp": "❤️",
    "attack": "⚔️", // Assuming you want to keep a general emoji for attack
    "defense": "🛡️",
    "speed": "🏃‍♂️",
    "stamina": "⚡",
    "melee": "⚔️", // Specific emoji for melee
    "ranged": "🏹", // Specific emoji for ranged
    "walk": "🚶‍♂️",
    "run": "🏃‍♂️",
    "ride": "🐎",
    // Add more mappings as needed
  };

  // Function to recursively flatten stats, including nested objects
  const flattenStats = (stats, prefix = '') => {
    return Object.entries(stats).reduce((acc, [key, value]) => {
      const newKey = prefix ? `${prefix} (${key})` : key; // Add prefix for nested stats
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        acc.push(...flattenStats(value, key)); // Recurse into nested object
      } else {
        acc.push([newKey, value]);
      }
      return acc;
    }, []);
  };

  const statEntries = flattenStats(stats);

  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    columnsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    statColumn: {
      flexBasis: '49%',
      padding: 5,
      marginBottom: 5,
      borderWidth: 1,
      borderColor: currentTheme.borderColor,
      borderRadius: 8,
    },
    columnWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    emojiColumn: {
      marginRight: 10,
    },
    statEmoji: {
      fontSize: 24,
    },
    statValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.textColor,
    },
    statLabel: {
      fontSize: 14,
      color: currentTheme.textColor,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.columnsContainer}>
        {statEntries.map(([key, value], index) => (
          <View key={index} style={styles.statColumn}> 
            <View style={styles.columnWrapper}>
              <Text style={styles.statEmoji}>{statEmojis[key.split(' ')[0].toLowerCase()] || "❓"}</Text>
              <View>
                <Text style={styles.statValue}>{value}</Text>
                <Text style={styles.statLabel}>{key}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PalStatsBlock;
