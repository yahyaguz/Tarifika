import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#ff9900',
        padding: 5,
    },
    title: {
        fontSize: 25,
        color: 'black',
        marginLeft: 10,

    },
    image: {
        height: 80,
        width: 80,
        marginLeft: 8,
        resizeMode: 'contain',
        overflow: 'hidden',
        borderRadius:50,
    },
    body_container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        backgroundColor:'#f0f0f5',
    },

});