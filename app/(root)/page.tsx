import React from "react";

import { auth } from "@/auth";

const HomePage = async () => {
  const session = await auth();

  console.log(session);

  return <div>HomePage</div>;
};

export default HomePage;
