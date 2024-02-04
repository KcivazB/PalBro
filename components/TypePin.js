import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const TypePin = ({ type }) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center', // Center content vertically and horizontally
            margin: 2,
        },
        badge: {
            alignItems: 'center',
            justifyContent: 'center', // Center content vertically and horizontally
            width: 36, // Adjust the size as needed
            height: 36, // Adjust the size as needed
            borderRadius: 18, // Make it round
            backgroundColor: getTypeColor(type),
            margin: 4,
        },
        typeIcon: {
            width: 20,
            height: 20,
            alignItems: 'center', // Center the image inside the badge
            justifyContent: 'center', // Center the image inside the badge
        },
        typeName: {
            color: 'white',
            fontWeight: 'bold',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.badge}>
                <Image style={styles.typeIcon} source={getTypeIcon(type)} />
            </View>
        </View>
    );
};

const getTypeColor = (type) => {
    const typeColors = {
        "Ground": '#E0C068',
        "Fire": '#F08030',
        "Dragon": '#7038F8',
        "Water": '#6890F0',
        "Electric": '#F8D030',
        "Grass": '#78C850',
        "Normal": '#A8A878',
        "Dark": '#705848',
        "Ice": '#98D8D8',
        // Add more types and colors as needed
    };

    return typeColors[type] || 'gray';
};

const getTypeIcon = (type) => {
    const typeIcons = {
        "Ground": require('../assets/images/types/Ground_icon_small.png'),
        "Fire": require('../assets/images/types/Fire_icon_small.png'),
        "Dragon": require('../assets/images/types/Dragon_icon_small.png'),
        "Water": require('../assets/images/types/Water_icon_small.png'),
        "Electric": require('../assets/images/types/Electric_icon_small.png'),
        "Grass": require('../assets/images/types/Grass_icon_small.png'),
        "Normal": require('../assets/images/types/Normal_icon_small.png'),
        "Dark": require('../assets/images/types/Dark_icon_small.png'),
        "Ice": require('../assets/images/types/Ice_icon_small.png'),
    };

    return typeIcons[type];
};

export default TypePin;
