import React from "react";
import HeaderWrap from "../components/HeaderWrap";
import InviteWrap from "../components/InviteWrap";

const InviteShare = () => {
  return (
    <>
      <HeaderWrap />
      <InviteWrap
        teamShareBolean={true}
        snsShareBolean={false}
      />
    </>
  );
};

export default InviteShare;
