import React, { useState} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './style';

export function SingIn() {
    const [text, setText] = useState('Marcelo');
    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={ styles.title}>
                    Organize{`\n`}
                    suas jogatinas{`\n`}
                    facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos
                </Text>

            </View>
        </View>
    )
}