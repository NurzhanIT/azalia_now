import { createContext } from "react";
import MainNavigator from "./navigation/MainStackNav";
import store from "./store";
import { Provider } from "react-redux";
export const Context = createContext(null);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
