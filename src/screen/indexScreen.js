import React,{useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import {Context} from '../context/BlogContext'

const IndexScreen = () => {
    const {state, addBlogPosts2} = useContext(Context);
    
    return( 
    <View >
    <Button 
        
        title='hello'
        onPress={addBlogPosts2}
    />
<Text>Index screen </Text>
        <FlatList 
            data={state}
            keyExtractor={state => state.title}
            renderItem = {({item}) => {
                return <Text>{item.title}</Text>
            }}
        />

    </View>)
}
const styles = StyleSheet.create({

})

export default IndexScreen