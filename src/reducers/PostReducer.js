const PostReducer = (state = { posts: null, loading: false, error: false, uploading: false, }, action) => {
    switch (action.type) {
        case "UPLOAD_START":
            return { ...state, uploading: true, error: false }
        case "UPLOAD_SUCCESSED":
            return { ...state, posts: [...state.posts,action.data.data], uploading: false, error: false };
        case "UPLOAD_FAILED":
            return { ...state, uploading: false, error: true }
        default:
            return state;
    }
}

export default PostReducer;