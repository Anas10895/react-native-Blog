import React,{useContext,useState} from 'react'
import{View, Text, StyleSheet, TextInput} from 'react-native'
import {Context} from '../context/BlogContext'
const EditScreen = ({navigation}) => {
    const {state} = useContext(Context)
    const [Title, SetTitle] = useState('')
    const [Content, SetContent] = useState('')

        console.log(navigation.getParam('id'))
    return <View>
            <Text style={style.lable}>Edit Title</Text>
            <TextInput style={style.input} value={Title} onChangeText={(text) => SetTitle(text)}/>
            <Text style={style.lable}>Edit Content</Text>
            <TextInput style={style.input} value={Content} onChangeText={(text) => SetContent(text)}/> 
        </View>
}
const style = StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5

    },
    lable:{
        fontSize:20,
        marginBottom:5,
        padding:5,
        margin:5

    }

})
export default EditScreen;