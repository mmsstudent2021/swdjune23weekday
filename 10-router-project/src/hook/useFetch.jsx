import { useEffect, useState } from "react";

const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setData((pre) => {
          return {
            error: null,
            loading: false,
            data: data,
          };
        });
      } catch (e) {
        setData((pre) => {
          return {
            error: e.message,
            loading: false,
            data: null,
          };
        });
      }
    })();
  }, []);

  return data;
};

export default useFetch;
