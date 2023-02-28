import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        marginRight: 8,
        marginLeft: 8,
    },
    image: {
        flex: 1,
        minWidth: 200,
        minHeight: 180,
        borderRadius: 10,
        resizeMode: 'contain',
        overflow: 'hidden',

    },
    title: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginRight:5,
        height:40,
        width:Dimensions.get('window').width*0.94,
    },
    title_container: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top: 140,
        left: 0,
        right: 0,
        bottom: 0,
        minWidth: 200,
        height:40,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    inner_container: {
        

    },
});