import React,{useState, useContext} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import { Context } from '../context/BlogContext'

const BlogFrom = ({  navigation, onSubmit, initalValue}) => {
    const {state, addBlogPosts} = useContext(Context)
    const [Title, SetTitle] = useState(initalValue.title)
    const [Content, SetContent] = useState(initalValue.content)
   
    return <View>
    <Text style={style.lable}> Title</Text>
    <TextInput style={style.input} value={Title}  onChangeText={(text) => SetTitle(text)}/>
    <Text style={style.lable}> Content</Text>
    <TextInput style={style.input} value={Content} onChangeText={(text) => SetContent(text)}/>

    <Button 
    title="Save Blog Post"
    onPress={
        () => onSubmit(Title, Content) 
          
        }  
          disabled={Title.length < 4  || Content.length < 4 ? true : false } 

          />
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
BlogFrom.defaultProps = {
    initalValue:{
        title:'',
        content:''
    }
}
export default BlogFrom;