import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: { // verificar o layout de tela do iphone, utilize a biblioteca "react-native-iphone-x-helper"
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,

    }
});