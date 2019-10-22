import { StyleSheet } from 'react-native';

const styleSheet = StyleSheet.create({
    default: {
        padding: 15,
        alignItems: 'center',
        marginBottom: 10
    },
    border: {
        borderWidth: 2,
        borderColor: 'black'
    },
    rounded: {
        borderRadius: 15
    },
    dark: {
        backgroundColor: '#1a73e8'
    },
    uppercase: {
        textTransform: 'uppercase'
    },
    textLigth: {
        color: 'white'
    }
});

export default styleSheet;