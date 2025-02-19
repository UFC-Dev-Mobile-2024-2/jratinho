import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileImage = ({source, selected = false, onSelect = () => {} }) => {
    return (
        <TouchableOpacity onPress={onSelect} activeOpacity={0.7}>
            <View style={[styles.imageContainer, selected && styles.selected]}>
                <Image source={source} style={styles.image} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    }
});

export default ProfileImage;
