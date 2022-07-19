import React, { useContext, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const UserProfile = React.lazy(() => import("./components/Profile/UserProfile"))
const AuthPage = React.lazy(() => import("./pages/AuthPage"))
const HomePage = React.lazy(() => import("./pages/HomePage"))

function App() {
	const authCtx = useContext(AuthContext);

	return (
		<Layout>
			<Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					{!authCtx.isLoggedIn && (
						<Route path="/auth">
							<AuthPage />
						</Route>
					)}
					{authCtx.isLoggedIn && (
						<Route path="/profile">
							<UserProfile />
						</Route>
					)}
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			</Suspense>
		</Layout>
	);
}

export default App;
