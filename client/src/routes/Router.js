import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from '../layouts';
import {
    Home,
    Contact,
    Post,
    NoMatch,
    Login,
    Registration,
    PrivacyPolicy,
    Other,
    About,
    Portfolio,
} from '../pages/publicPage';
import {
    Dashboard,
    Posts,
    Tasks,
    Profile,
    Settings,
    Messages,
    PrivatPrivacyPolicy,
} from '../pages/privatePage';
import { AuthContext } from '../context/auth';

import '../assets/css/style.scss';
import ForgotPassword from '../pages/publicPage/ForgotPassword';

function Router() {
    const { user } = useContext(AuthContext);
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/other" element={<Other />} />
                {!user ? (
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                ) : null}
                <Route path="*" element={<NoMatch />} />
            </Route>
            {user ? (
                <Route element={<PrivateLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route
                        path="/privacy-policy"
                        element={<PrivatPrivacyPolicy />}
                    />
                </Route>
            ) : null}
        </Routes>
    );
}

export default Router;
