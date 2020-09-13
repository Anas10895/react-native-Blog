import React,{useState, useContext} from 'react'
import {TextInput, View, Text, StyleSheet, Button} from 'react-native'
import {Context} from '../context/BlogContext'
const CreatePost = ({navigation}) => {
    const { addBlogPosts} = useContext(Context);

    const [Title, SetTitle] = useState('')
    const [Content, SetContent] = useState('')


     
    return <View>
        <Text style={style.lable}>Enter Title</Text>
        <TextInput style={style.input} value={Title} onChangeText={(text) => SetTitle(text)}/>
        <Text style={style.lable}>Enter Content</Text>
        <TextInput style={style.input} value={Content} onChangeText={(text) => SetContent(text)}/>

        <Button 
        title="add a Post"
        onPress={
            () => {addBlogPosts(Title,Content)
                     navigation.navigate("index")}
            }  
              disabled={Title.length < 5  || Content.length < 5 ? true : false  } />
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
export default CreatePost;