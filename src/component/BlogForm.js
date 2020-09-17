import React,{useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'

const BlogFrom = () => {

    const [Title, SetTitle] = useState('')
    const [Content, SetContent] = useState('')

    return <View>
    <Text style={style.lable}>Enter Title</Text>
    <TextInput style={style.input} value={Title} onChangeText={(text) => SetTitle(text)}/>
    <Text style={style.lable}>Enter Content</Text>
    <TextInput style={style.input} value={Content} onChangeText={(text) => SetContent(text)}/>

    <Button 
    title="Save Blog Post"
    onPress={
        () => console.log('gellp')
                 
        }  
          disabled={Title.length < 4  || Content.length < 4 ? true : false  } />
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

export default BlogFrom;