export interface State {
  term: string | null;
}

export const initialState: State = {
  term: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

export interface Action {
  type: string;
  term?: string;
}

const reducer = (state: State, action: Action): State => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term ?? null,
      };
    default:
      return state;
  }
};

export default reducer;
