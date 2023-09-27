import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id != action.payload);
        case 'add_blogpost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 9999),
                    subject: action.payload.subject,
                    content: action.payload.content,
                    day: action.payload.day,
                    month: action.payload.month,
                    time: action.payload.time,
                    room: action.payload.room
                },
            ];
        case 'edit_blogpost':
            return state.map(blogPost => blogPost.id === action.payload.id? action.payload : blogPost);
        case 'sort_blogpost':
            const currentDate = new Date();
            const sortedPosts = [...state].sort((a, b) => {
                const dateA = new Date(`${currentDate.getFullYear()}-${a.month}-${a.day}`);
                const dateB = new Date(`${currentDate.getFullYear()}-${b.month}-${b.day}`);
                const timeDifferenceA = Math.abs(dateA - currentDate);
                const timeDifferenceB = Math.abs(dateB - currentDate);
                return timeDifferenceA - timeDifferenceB;
            });
            return sortedPosts;
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (subject, content, day, month, time, room) => {
        dispatch({
            type: 'add_blogpost',
            payload: { subject, content, day, month, time, room }
        });
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) =>
        dispatch({
            type: 'delete_blogpost',
            payload: id
        });
};

const editBlogPost = (dispatch) => {
    return (id, subject, content, day, month, time, room) => {
        dispatch({
            type: 'edit_blogpost',
            payload: { id, subject, content, day, month, time, room }
        });
    };
};

const sortBlogPost = (dispatch) => {
    return (id, subject, content, day, month, time, room) => {
        dispatch({
            type: 'sort_blogpost',
            payload: { id, subject, content, day, month, time, room }
        });
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, sortBlogPost }, []
);
