import { StyleSheet } from 'react-native';

const styleSheet = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10
    },
    item: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    options: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18
    }
});

export default styleSheet;