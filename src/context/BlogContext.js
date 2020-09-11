import createContextData from './createContextData'

const BlogReducer = (state, action) => {

    switch(action.type){
        case 'addBlogPosts2' : 
        return [...state, {title:`BlogPost #${state.length + 1}`}]

        
        default : 
        return state;
    }

}
 
const addBlogPosts = dispatch => {
    return () => {
        dispatch({type:'addBlogPost'})
    }
}

const addBlogPosts2 = dispatch => {
    return () => {
        dispatch({type:'addBlogPosts2'})
    }
}

export const {Context, Provider} = createContextData(BlogReducer, {addBlogPosts, addBlogPosts2}, []);