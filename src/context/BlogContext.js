import createContextData from "./createContextData";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      return [
        ...state,
        {
          title: action.payload.title,
          content:action.payload.content,
          id: Math.floor(Math.random() * 9999)
        }
      ];
      case 'deleteBlogPost':
          return state.filter(blogPost => blogPost.id !== action.payload)

          case 'EditBlogPost':
            return state.find(blogPost => blogPost.id )
    default:
      return state;

      
  }
};

const addBlogPosts = dispatch => {
  return (title, content, callBack) => {
    dispatch({ type: "addBlogPost" , payload:{title, content} });
    callBack();
  };
};

const deleteBlogPost = dispatch => {
    return (id) => {
      dispatch({ type: "deleteBlogPost", payload:id });
    };
  };

export const { Context, Provider } = createContextData(
  BlogReducer,
  { addBlogPosts,deleteBlogPost },
  [{title:"Test Post" , content:"this is the test content for the test Post", id:221}]
);
