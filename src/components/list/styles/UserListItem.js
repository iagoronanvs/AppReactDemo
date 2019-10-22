import { StyleSheet } from 'react-native';

const styleSheet = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row'
    },
    info: {
        marginLeft: 10
    },
    name: {
        fontWeight: 'bold'
    },
    nameInfo: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    imageZoom: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20
    },
    imageContainer: {
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    closeContainer: {
        alignItems: 'flex-end'
    },
    close: {
        padding: 15
    },
    textCenter: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        marginBottom: 3
    },
    contentModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
});

export default styleSheet;