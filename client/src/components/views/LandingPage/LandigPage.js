import React,{useEffect} from "react";
import axios from "axios";

function LandigPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);
  return <div>LandigPage</div>;
}

export default LandigPage;
