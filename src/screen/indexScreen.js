import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import {withNavigation} from 'react-navigation'

import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
const IndexScreen = ({navigation}) => {
  const { state, addBlogPosts, deleteBlogPost } = useContext(Context);
  return (
    <View>
      {/* <Button title="hello" onPress={addBlogPosts} /> */}
      <Text>Index screen </Text>
      <FlatList
        data={state}
        keyExtractor={state => `${state.id}`}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('showPost', {id: item.id})}>
            <View style={styles.listItem} >
              <View style={styles.post}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
              </View>

              <TouchableOpacity  onPress={() => deleteBlogPost(item.id)}>
                <Feather
                  style={styles.icon}
                  name="trash"
                 
                />
              </TouchableOpacity>
            </View>
            </TouchableOpacity>
          ;
        }}
      />
    </View>
  );
};
IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('create')}>
        <Feather  style={styles.icon} name="plus" size={30} />
      </TouchableOpacity>
    ),
  }; 
}

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    borderWidth: 1,
    padding: 3,
    
  },
  post:{
display:'flex',
flexDirection:'column'
  },
  icon: {
    fontSize: 24,
    marginTop:"auto",
    marginBottom:"auto"
},
  title: {
    fontSize: 20
  },
  content: {
    fontSize: 16
  }
});

export default withNavigation(IndexScreen);


