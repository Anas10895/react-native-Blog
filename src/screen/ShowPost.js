import React,{useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext'
import { Entypo } from '@expo/vector-icons'; 
const ShowPost = ({navigation}) => {
    const {state} = useContext(Context);

    const BlogPost = state.find((BlogPost) => BlogPost.id === navigation.getParam('id'))
    console.log(BlogPost.id)
    return <View>
        <Text style={styles.title}>Title: {BlogPost.title}</Text>
        <Text style={styles.content}> Content: {BlogPost.content}</Text>

    </View>
}
ShowPost.navigationOptions = ({navigation}) => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('edit', {id:BlogPost.id})}>
          <Entypo  style={styles.icon} name="edit" size={30} />
        </TouchableOpacity>
      ),
    }; 
  }
const styles = StyleSheet.create({
    icon: {
        fontSize: 24,
        marginTop:"auto",
        marginBottom:"auto"
    },
    title: {
        fontSize: 20,
        margin:5,
        borderBottomWidth:1,
        paddingBottom:5,

      },
      content: {
        fontSize: 16,
        margin:5
      }
})

export default ShowPost;