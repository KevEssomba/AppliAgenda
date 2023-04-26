import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Vue (View) verticale
 */
const VStack = ({ children, style }) => {
    return (
        <View style={[styles.vstack, style]}>
            {children}
        </View>
    );
}

export default VStack;

const styles = StyleSheet.create({
    vstack: {
        flexDirection: 'column',
    }
});
