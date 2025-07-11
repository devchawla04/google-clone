import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react";

export interface StateProviderProps<S, A> {
  reducer: React.Reducer<S, A>;
  initialState: S;
  children: ReactNode;
}

export const StateContext = createContext<[any, Dispatch<any>] | undefined>(
  undefined,
);

export function StateProvider<S, A>({
  reducer,
  initialState,
  children,
}: StateProviderProps<S, A>) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateValue<S, A>() {
  const context = useContext(StateContext);
  if (!context)
    throw new Error("useStateValue must be used within a StateProvider");
  return context as [S, Dispatch<A>];
}
