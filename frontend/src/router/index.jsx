import {
    Route, Routes
} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import {Layout} from "antd";
import Navigation from "@/layout/Navigation";
import PageLoader from "@/components/PageLoader";
import {AnimatePresence} from "framer-motion";
import Login from "@/pages/Login";

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


const Index = () => {
    return <Layout style={{minHeight: "100vh"}}>
        <Navigation/>
        <Layout style={{minHeight: "100vh"}}>
            <Suspense fallback={<PageLoader/>}>
                <AnimatePresence initial={false}>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/compare" element={<Compare/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/sales-leads" element={<LeadsMap/>}/>
                        <Route path="/customer" element={<Customer/>}/>
                        <Route path="/lead" element={<Lead/>}/>
                        <Route path="/manage-admins" element={<Admin/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>;
                </AnimatePresence>
            </Suspense>
        </Layout>
    </Layout>

};

export default Index;