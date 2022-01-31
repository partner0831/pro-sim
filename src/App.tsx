import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useUserInfo } from "businessobjects/User";
import { useEffect, useState } from "react";
import { subscribeInitReady } from "init";
// @import component
import { Loading } from "components/Loading";
// @import Layout
import AuthLayout from "Layout/auth/AuthLayout";
import MainLayout from "Layout/main/MainLayout";
// @import Auth pages

// @import Auth
const Login = React.lazy(() => import("pages/auth/Login"));
const Register = React.lazy(() => import("pages/auth/Register"));
// @import Dashboard
const Dashboard = React.lazy(() => import("pages/dashboard"));
const Transactions = React.lazy(() => import("pages/transactions"));

function App() {
  const loading = false;

  const [ready, set_ready] = useState(false);
  useEffect(() => {
    const subscription = subscribeInitReady(set_ready);
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    document.title = "SimSec User Web";
  });

  const userInfo = useUserInfo();

  function PrivateRoute(props: { path: string; element: JSX.Element }) {
    return (
      <Route
        {...props.path}
        render={({ location }) =>
          userInfo != null ? (
            props.element
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <div className="nk-app-root">
      <div className="nk-main " style={{ opacity: loading ? 0.5 : 1 }}>
        <div className="App">
          {ready && (
            <Suspense fallback={<Loading />}>
              <Router basename="/">
                <Switch>
                  <Route path="/login">
                    <AuthLayout>
                      <Login />
                    </AuthLayout>
                  </Route>
                  <Route path="/register">
                    <AuthLayout>
                      <Register />
                    </AuthLayout>
                  </Route>

                  <Route path="/">
                    <Switch>
                      <PrivateRoute
                        path="/"
                        element={
                          <MainLayout>
                            <Dashboard />
                          </MainLayout>
                        }
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        path="/Transactions"
                        element={
                          <MainLayout>
                            <Transactions />
                          </MainLayout>
                        }
                      />
                    </Switch>
                  </Route>
                </Switch>
              </Router>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
