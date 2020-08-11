import { ADD_POSTING, DELETE_POSTING } from "../actions";
import { combineReducers } from "redux";
import posts from "./posts";

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
// 루트 리듀서를 만들어주고 이제 만든 리듀서를 적용해주자

const initialState = [
  {
    id: 1,
    title: " This is First Post",
    description: "포스팅 1",
  },
];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTING:
      return state.concat(action.post);
    case DELETE_POSTING:
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};

export default posts;

//concat 과 filter 메서드를 사용해서 포스팅을 추가하고 삭제하는 기능을 구현했다.
//두 메서드 모두 사본을 반환하기 때문에 원래 상태에 영향을 주지 않는다
