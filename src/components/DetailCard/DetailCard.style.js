import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    image: {
        maxWidth: Dimensions.get('window').width,
        minHeight: 285,
    },
    title: {
        color: '#6e1713',
        fontWeight: 'bold',
        fontSize:26,
        
    },
    country: {
        color: '#6e1713',
        fontWeight: 'bold',
        fontSize:20,

    },
    divider:{
        borderWidth:0.2,
        width:Dimensions.get('screen').width,
        right:5,
        marginTop:5,
        marginBottom:5,
    },
    instructions: {
        color: "black",
        fontSize:13,
        lineHeight:16,
    },
    button: {
        backgroundColor:'red',
        color:'white',
        padding:10,
        borderRadius:5,
        margin:5,
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center'

    },
    inner_container:{
        margin:5,
    }
});