import createContextData from "./createContextData";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      return [
        ...state,
        {
          title: `BlogPost #${state.length + 1}`,
          id: Math.floor(Math.random() * 9999)
        }
      ];
      case 'deleteBlogPost':
          return state.filter(blogPost => blogPost.id !== action.payload)
    default:
      return state;
  }
};

const addBlogPosts = dispatch => {
  return () => {
    dispatch({ type: "addBlogPost" });
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
  []
);
