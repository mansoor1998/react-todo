

export default function todoListReducre(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'UPDATE_TODO':
            const { todo, priority, deadline, description, status } = action.payload;
            return state.map((item) => {
                if (item === todo) {
                    item.priority = priority ? priority : item.priority;
                    item.deadline = deadline ? deadline : item.deadline;
                    item.description = description ? description : item.description;
                    item.status = status ? status : item.status;
                }
                return item;
            });
        default:
            return state;
    }
}