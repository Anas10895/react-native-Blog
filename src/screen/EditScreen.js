import React,{useContext,useState} from 'react'
import{View, Text, StyleSheet, TextInput} from 'react-native'
import {Context} from '../context/BlogContext'
import BlogFrom from '../component/BlogForm';

const EditScreen = ({navigation}) => {
    const {state} = useContext(Context)
    const BlogPost = state.find((BlogPost) => BlogPost.id === navigation.getParam('id'))

    return <BlogFrom/>
}
export default EditScreen;