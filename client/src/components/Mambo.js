import React, { useState, useEffect } from "react";

import { TextField, Button } from "@material-ui/core";

function Signup() {
  const [ready, setReady] = useState(false);
  const [jambo, setJambo] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/buggify"); //don't modify this line
      const json = await res.json();
      setReady(json.ready);
    }
    fetchData();
  }, []);

  const doMambo = () => {
    let result;
    fetch("/mambo", {
      body: JSON.stringify({ jambo }),
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }
    }) //don't modify this signature
      .then(res => {
        result = res.result;
      });
    setJambo(result);
  };
  return ready ? (
    <div>
      <TextField value={jambo} onChange={e => setJambo(e)}></TextField>
      <Button onClick={doMambo}>domambo</Button>
    </div>
  ) : (
    <h1>Waiting</h1>
  );
}

export default Signup;
