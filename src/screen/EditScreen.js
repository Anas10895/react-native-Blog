import React,{useContext,useState} from 'react'
import{View, Text, StyleSheet, TextInput} from 'react-native'
import {Context} from '../context/BlogContext'
import BlogFrom from '../component/BlogForm';

const EditScreen = ({navigation}) => {
    const {state,editBlogPost} = useContext(Context)
    const id = navigation.getParam('id')
    const BlogPost = state.find((BlogPost) => BlogPost.id === id)
    
    return (
    <BlogFrom initalValue={{title:BlogPost.title , content:BlogPost.content}} 
    onSubmit={(title, content) =>
    editBlogPost(id, title, content, () => navigation.pop())
    }/>
    )
}
export default EditScreen;