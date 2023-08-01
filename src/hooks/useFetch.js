import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const [id, setId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });
      setMethod(method);
      setId(data);
    } else if (method === "PUT") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
      setId(data.id);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        const res = await fetch(url, config);
        const json = await res.json();
        setCallFetch(json);
      } else if (method === "DELETE") {
        const urlDelete = `${url}/${id}`;
        const res = await fetch(urlDelete, config);
        const json = await res.json();
        setCallFetch(json);
      } else if (method === "PUT") {
        const res = await fetch(url, config);
        const json = await res.json();
        setCallFetch(json);
      }
    };
    httpRequest();
  }, [url, method, config, id]);

  return { data, httpConfig };
};
