import { useState, useEffect } from "react";
import { PatientRequest } from "../types/patient";

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

const usePostPatient = () => {
  const postPatient = async (patient: PatientRequest) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    };
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/patient", config);
    return await response.json();
  };

  return {
    postPatient,
  };
};

export { useGetAllPatients, usePostPatient };
