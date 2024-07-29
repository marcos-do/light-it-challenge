import React, { useState } from 'react';
import './PatientCard.css';
import { Patient } from '../../types/patient';

interface PatientCardProps {
    patient: Patient
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="patient-card">
            <div className="patient-card-header" onClick={() => setIsExpanded(!isExpanded)}>
                <img src={patient.photoPath} alt={`${patient.name}`} className="patient-photo" />
                <span>{patient.name}</span>
            </div>
            {isExpanded && (
                <div className="patient-card-body">
                    <p>Email: {patient.email}</p>
                    <p>Phone: {patient.phoneNumber}</p>
                </div>
            )}
        </div>
    );
};

export default PatientCard;
