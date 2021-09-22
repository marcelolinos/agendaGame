import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 35,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 170
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
    },
    iconWrapper: {
        width: 56,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 2,
        borderColor: theme.colors.line
    },
    icon: {
        width: 24,
        height:18
    }

});