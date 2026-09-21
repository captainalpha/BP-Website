import connect from "@/lib/db";
import Job from "@/lib/db/models/job";
import React from "react";
import List from "./component/List";

const Jobs = async () => {
  await connect();
  const jobs: any = await Job.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "addedBy",
        foreignField: "_id",
        as: "addedByObj",
      },
    },
    {
      $unwind: {
        path: "$addedByObj",
        preserveNullAndEmptyArrays: true,
      },
    },
  ]);
  return (
    <div className="h-[87vh] flex  justify-center">
      <List jobs={JSON.parse(JSON.stringify(jobs))} />;
    </div>
  );
};

export default Jobs;
