import createContextData from "./createContextData";
import jsonServer from '../api/jsonServer'
const BlogReducer = (state, action) => {
  switch (action.type) {
    case "getBlogposts":
      return action.payload;

    case "addBlogPost":
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random() * 9999)
        }
      ];
    case "deleteBlogPost":
      return state.filter(blogPost => blogPost.id !== action.payload);

    case "EditBlogPost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    // response.data were we will find (no shit) the data objects :D

    dispatch({type: "getBlogposts", payload:response.data})
  }
}

const addBlogPosts = dispatch => {
  return async (title, content, callBack) => {
    await jsonServer.post('./blogposts', {title, content})
    // dispatch({ type: "addBlogPost", payload: { title, content } });
    callBack ? callBack() : null;
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "deleteBlogPost", payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callBack) => {
    dispatch({ type: "EditBlogPost", payload: { id, title, content } });
    callBack ? callBack() : null;
  };
};

export const { Context, Provider } = createContextData(
  BlogReducer,
  { addBlogPosts, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
