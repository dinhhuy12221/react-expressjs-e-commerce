import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { AuthProvider } from "./context/AuthProvider";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import { store } from "./components/Client/app/store";
import { Provider } from "react-redux";

// if (ProcessingInstruction.env.NODE_ENV === "production") {
//   disableReactDevTools();
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  // </AuthProvider>
);
