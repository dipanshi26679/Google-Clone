import React, { useEffect, useState } from "react";
import API_KEY from "./Keys";

const CONTEXT_KEY = "02f83b3813357464c";

const useGoogleSearch = (term ) => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
fetch(
        `https://www.googleapis.com/customsearch/v1?&key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      ).then((response)=> response.json()).then((result)=>{
        setData(result);
      })
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;









