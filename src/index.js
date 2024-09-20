import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProfileProvider } from "./utils/ProfileContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const history = unstable_HistoryRouter();
// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.returnTo
//       ? appState.returnTo
//       : window.location.pathname
//   );
// };
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-64exgjn1nyp27dh0.us.auth0.com"
      clientId="ekmmA5lOSBO7xGPHQR9ZGf3OuvO8UOxa"
      audience="con_D4QrTAA3pOXYdoVr"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </Auth0Provider>
  </React.StrictMode>
);
