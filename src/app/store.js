import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/topicsSlice.js";
import quizzesReducer from "../features/quizzes/quizzesSlice.js";

export default configureStore({
	reducer: {
		topics: topicsReducer,
		quizzes: quizzesReducer,
	},
});
