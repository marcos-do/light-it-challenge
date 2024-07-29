import React, { useState } from "react";
import "../styles.css";
import Modal from "../components/modals/Modal";
import { usePostPatient } from "../hooks/patientService";
import { PatientRequest } from "../types/patient";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

interface FormError {
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  photo?: string;
}

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState<any>(null);
  const [errors, setErrors] = useState<FormError>({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const patientHook = usePostPatient();

  const validateForm = () => {
    const newErrors: FormError = {};
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name must contain only letters.";
    }
    if (!/^[\w.%+-]+@gmail\.com$/.test(email)) {
      newErrors.email = "Email must be a valid @gmail.com address.";
    }
    if (!/^\d+$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must contain only numbers.";
    }
    if (photo && !photo.name.match(/\.(jpg|jpeg)$/)) {
      newErrors.photo = "Document photo must be an image.";
    }
    return newErrors;
  };

  const addPatient = (patient: PatientRequest) => {
    patientHook.postPatient(patient).then(console.log);
  };

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const newPatient = {
        name,
        email,
        address,
        phoneNumber: parseInt(phoneNumber),
      };
      addPatient(newPatient);
      setName("");
      setEmail("");
      setAddress("");
      setPhoneNumber("");
      setPhoto(null);
      setErrors({});
      setModalTitle("Great!");
      setModalMessage("Patient added successfully!");
      setShowModal(true);
    } else {
      setErrors(newErrors);
      setModalTitle("Oops");
      setModalMessage("There are errors in your submission.");
      setShowModal(true);
    }
  };

  const loadFile = (file: any) => {
    if (file && file.type === "image/jpeg") {
      setPhoto(file);
      setErrors((prev) => ({ ...prev, photo: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        photo: "Document photo must be a .jpg image.",
      }));
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    loadFile(file);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    loadFile(file);
  };

  return (
    <>
      <h1>Add Patient</h1>
      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber}</span>
          )}
        </div>
        <div className="form-group">
          <label>Document Photo:</label>
          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <input type="file" onChange={handleFileChange}></input>
            {photo ? (
              <img
                src={URL.createObjectURL(photo)}
                alt="Document"
                className="photo-preview"
              />
            ) : (
              <span>
                Drag and drop a .jpg file here, or click to select a file
              </span>
            )}
          </div>
          {errors.photo && <span className="error">{errors.photo}</span>}
        </div>
        <PrimaryButton type="submit">Add</PrimaryButton>
        <Modal
          show={showModal}
          title={modalTitle}
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      </form>
      <SecondaryButton onClick={() => navigate("/")}>Back</SecondaryButton>
    </>
  );
};

export default Form;
