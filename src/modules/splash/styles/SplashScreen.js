import { StyleSheet } from 'react-native';

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    options: {
        width: '100%',
        height: 160,
        justifyContent: 'space-around',
        padding: 20,
        position: 'absolute',
        bottom: 0
    },
});

export default styleSheet;