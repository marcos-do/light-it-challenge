import { useState, useEffect } from "react";

const useGetAllPatients = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/patient")
      .then((res) => res.json())
      .then((res: Response) => {
        setData(res);
      })
      .catch(console.log);
  }, []);

  return {
    data,
  };
};

export { useGetAllPatients };
