import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from '../../screens/SignIn/style';
import { style } from './style';

export function ButtonIcon() {
    return (
        <TouchableOpacity style={ style.contaner  }>
            <View style={ style.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>
            <Text style={style.title}>
                Entrar com Discord
            </Text>
        </TouchableOpacity>
    );
}