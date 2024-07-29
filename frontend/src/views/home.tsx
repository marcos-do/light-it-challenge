import React from "react";
import { useGetAllPatients } from "../hooks/patientService";

const Home: React.FC = () => {
  const { data } = useGetAllPatients();
  console.log(data);
  return <h1>Home</h1>;
};

export default Home;
