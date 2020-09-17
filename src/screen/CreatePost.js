import React,{ useContext} from 'react'
import {TextInput, View, Text, StyleSheet, Button} from 'react-native'
import {Context} from '../context/BlogContext'
import BlogFrom from '../component/BlogForm';

const CreatePost = ({navigation}) => {
    const { addBlogPosts} = useContext(Context);


return <BlogFrom/>
     
    
}

export default CreatePost;