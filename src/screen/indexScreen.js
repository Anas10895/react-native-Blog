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
      <Button title="hello" onPress={addBlogPosts} />
      <Text>Index screen </Text>
      <FlatList
        data={state}
        keyExtractor={state => `${state.id}`}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('showPost', {id: item.id})}>
            <View style={styles.listItem} >
              <Text style={styles.title}>{item.title}</Text>
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
const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 5,
    borderWidth: 1,
    padding: 3
  },
  icon: {
    fontSize: 24
  },
  title: {
    fontSize: 20
  }
});

export default withNavigation(IndexScreen);
