import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";

function Signup() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/ready");
      const json = await res.json();
      setReady(ready);
    }
    fetchData();
  }, []);

  return <Typography> {ready ? "ok" : "waiting"} </Typography>;
}

export default Signup;
