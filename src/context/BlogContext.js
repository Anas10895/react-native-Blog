import React,{useReducer} from 'react';
import { Switch } from 'react-native-gesture-handler';

const BlogContext = React.createContext();

const BlogReducer = (state, action) => {

    switch(action.type){
        case 'addBlogPost' : 
        return [...state, {title:`BlogPost #${state.length + 1}`}]

        
        default : 
        return state;
    }

}
 

export const BlogProvider = ({children}) => {
    const [BlogPosts, Dispatch] = useReducer(BlogReducer , [])

    const addBlogPosts = () => {
        Dispatch({type:'addBlogPost'})
    }
    return <BlogContext.Provider value={{data : BlogPosts, addBlogPosts}} >
        {children}
    </BlogContext.Provider>

};

export default BlogContext