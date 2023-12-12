import React from "react";
import HeaderWrap from "../components/HeaderWrap";
import InviteWrap from "../components/InviteWrap";
import "../styles/invite.css";

const Invite = () => {
  return (
    <>
      <HeaderWrap />
      <InviteWrap
        teamShareBolean={false}
        snsShareBolean={true}
      />
    </>
  );
};

export default Invite;
