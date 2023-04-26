import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Vue (View) horizontale
 */
const HStack = ({ children, style }) => {
    return (
        <View style={[styles.hstack, style]}>
            {children}
        </View>
    );
}

export default HStack;

const styles = StyleSheet.create({
    hstack: {
        flexDirection: 'row',
    }
});
