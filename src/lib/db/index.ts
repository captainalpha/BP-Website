import mongoose from "mongoose";

const MONGODB_URI =
  process.env.NEXT_PUBLIC_CONFIG === "LOCAL"
    ? process.env.MONGODB_URI_LOCAL
    : process.env.NEXT_PUBLIC_CONFIG === "PROD"
    ? process.env.MONGODB_URI_PROD
    : null;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting ...");
    return;
  }
  try {
    if (!MONGODB_URI)
      throw new Error(`Failed to find MONGODB_URI ${MONGODB_URI}`);

    const conn = await mongoose.connect(MONGODB_URI, {
      dbName: "bpaas",
      bufferCommands: true,
    });

    console.log(`Mongodb connected at ${conn?.connection?.host}`);
  } catch (error: any) {
    console.log(`Mongodb connection Error: ${error?.message}`);
    throw new Error(error);
  }
};

export default connect;
