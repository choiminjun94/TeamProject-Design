//액션 타입과 함수를 만들고 리듀서 파일에 가져와 리듀서를 만들어준다.

// 액션 타입 정의
export const ADD_POSTING = 'ADD_POSTING';
export const EDIT_POSTING = 'EDIT_POSTING';
export const DELETE_POSTING = 'DELETE_POSTING';

let nextId = 2;

// 액션 생성 함수
export const addPosting = (title, description) => {
    return {
        type: ADD_POSTING,
        post: {
            id: nextId++,
            title,
            description
        }
    };
}

export const editPosting = (id) => {
    return {
        type: EDIT_POSTING,
        id
    }
}

export const deletePosting = (id) => {
    return {
        type: DELETE_POSTING,
        id
    }
}