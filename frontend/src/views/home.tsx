import React from "react";
import { useGetAllPatients } from "../hooks/patientService";
import PatientList from "../components/lists/PatientList";

const Home: React.FC = () => {
  const { data: patients } = useGetAllPatients();
  return (
    <>
      <h1>Home</h1>
      <PatientList patients={patients}></PatientList>
    </>
  );
};

export default Home;
