import React,{useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const {data, addBlogPosts} = useContext(BlogContext);
    
    return( 
    <View >
    <Button 
        
        title='hello'
        onPress={addBlogPosts}
    />
<Text>Index screen </Text>
        <FlatList 
            data={data}
            keyExtractor={data => data.title}
            renderItem = {({item}) => {
                return <Text>{item.title}</Text>
            }}
        />

    </View>)
}
const styles = StyleSheet.create({

})

export default IndexScreen