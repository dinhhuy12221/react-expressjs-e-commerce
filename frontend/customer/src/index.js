import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { AuthProvider } from "./context/AuthProvider";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

// if (ProcessingInstruction.env.NODE_ENV === "production") {
//   disableReactDevTools();
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
