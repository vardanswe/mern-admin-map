import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);
const Compare = lazy(() =>
    import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Compare")
);
const LeadsMap = lazy(() =>
    import(/*webpackChunkName:'DashboardPage'*/ "@/pages/LeadsMap")
);
const Admin = lazy(() =>
  import(/*webpackChunkName:'AdminPage'*/ "@/pages/Admin")
);

const Customer = lazy(() =>
  import(/*webpackChunkName:'CustomerPage'*/ "@/pages/Customer")
);

const Lead = lazy(() => import(/*webpackChunkName:'LeadPage'*/ "@/pages/Lead"));

const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <PrivateRoute path="/" component={Dashboard} exact />
          <PrivateRoute path="/compare" component={Compare} exact />
          <PrivateRoute path="/leads-map" component={LeadsMap} exact />
          <PrivateRoute component={Customer} path="/customer" exact />
          <PrivateRoute component={Lead} path="/lead" exact />
          <PrivateRoute component={Admin} path="/manage-admins" exact />
          <PrivateRoute component={Logout} path="/logout" exact />

          <PublicRoute path="/login" render={() => <Navigate to="/" />} />
          <Route
            path="*"
            component={NotFound}
            render={() => <Navigate to="/notfound" />}
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
