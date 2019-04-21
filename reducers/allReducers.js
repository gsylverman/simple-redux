import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";

import userReducer from "./usersReducer";

const allReducers = combineReducers({
    users: userReducer,
    selected: detailsReducer
});

export default allReducers;