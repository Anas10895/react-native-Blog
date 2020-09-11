import React,{useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext'
const ShowPost = ({navigation}) => {
    const {state} = useContext(Context);

    const BlogPost = state.find((BlogPost) => BlogPost.id === navigation.getParam('id'))

    return <View>
    <Text>Show Post Screen - {BlogPost.title}</Text>
    </View>
}
const styles = StyleSheet.create({

})
export default ShowPost;