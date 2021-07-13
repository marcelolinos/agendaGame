import React, { useState} from 'react';
import {
    View,
    Text,
    Image

} from 'react-native'
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './style';

export function SingIn() {
    const [text, setText] = useState('Marcelo');
    return (
        <View style={styles.container}>

            <Image source={IllustrationImg } />

        </View>
    )
}