import connect from "@/lib/db";
import User from "@/lib/db/models/user";
import React from "react";
import List from "./components/List";

const UserPage = async () => {
  await connect();

  const users: any = await User.find({}).select("-password");
  return (
    <div className="h-[87vh] flex  justify-center">
      <List users={JSON.parse(JSON.stringify(users))} />;
    </div>
  );
};

export default UserPage;
