import React from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Main from "./Main";
import Coupon from "./Coupon";
import InviteShare from "./InviteShare";
import Invite from "./Invite";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Main />} />,
      <Route path="/main" element={<Main />} />,
      <Route path="/coupon" element={<Coupon />} />,
      <Route path="/invite_share" element={<InviteShare />} />,
      <Route path="/invite" element={<Invite />} />,
    </Route>
  )
);
