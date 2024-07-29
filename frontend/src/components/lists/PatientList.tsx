import React from "react";
import PatientCard from "../cards/PatientCard";
import { Patient } from "../../types/patient";
import { useNavigate } from "react-router-dom";
import "./PatientList.css";

interface PatientListProps {
  patients: Patient[];
}

const PatientList: React.FC<PatientListProps> = ({ patients }) => {
  const navigate = useNavigate();
  const navigateToForm = () => {
    navigate("/form");
  };
  return (
    <div className="patient-list-container">
      <button className="add-patient-button" onClick={navigateToForm}>
        Add patient
      </button>
      {patients.length === 0 ? (
        <div className="empty-state">No patients available. Click "Add patient" to create one.</div>
      ) : (
        <div className="patient-list">
          {patients.map((patient: Patient, index: number) => (
            <PatientCard key={index} patient={patient} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientList;
