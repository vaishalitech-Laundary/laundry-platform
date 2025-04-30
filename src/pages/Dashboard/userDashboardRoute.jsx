import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDashboard from './DashboardHome';
import MyOrders from './MyOrders';
import SubscriptionPlans from './Subscription';
import TrackOrder from './TrackOrder';

const UserDashboardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserDashboard />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/subscription-plan" element={<SubscriptionPlans />} />
      <Route path="/track-order" element={<TrackOrder />} />
</Routes>
  );
};

export default UserDashboardRoute;
