import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterView() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    fatherName: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    phone: "",
    state: "",
    pinCode: "",
    constituency: "",
    address: "",
    photo: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("memberData", JSON.stringify(formData));
    navigate("/preview");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h2 className="col-span-2 text-center text-2xl font-bold text-red-500 mb-4">
          Member Registration
        </h2>

        <div className="col-span-2 flex justify-center">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto}
            className="text-white"
          />
        </div>

        <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
        <Input label="Designation" name="designation" value={formData.designation} onChange={handleChange} required />
        <Input label="Location/Area" name="location" value={formData.location} onChange={handleChange} required />
        <Input label="Father's Name" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={["Male", "Female", "Other"]} required />
        <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} required />
        <Select label="Blood Group" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]} required />
        <Input label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        <Select label="State" name="state" value={formData.state} onChange={handleChange} options={["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana", "Maharashtra", "Delhi", "West Bengal"]} required />
        <Input label="Pin Code" name="pinCode" value={formData.pinCode} onChange={handleChange} required />
        <Input label="Assembly Constituency" name="constituency" value={formData.constituency} onChange={handleChange} />
        <Textarea label="Full Address" name="address" value={formData.address} onChange={handleChange} required />

        <button
          type="submit"
          className="col-span-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          Generate ID Card
        </button>
      </form>
    </div>
  );
}

function Input({ label, name, value, onChange, required = false, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 mt-1"
        required={required}
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 mt-1"
        required={required}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, name, value, onChange, required = false }) {
  return (
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 mt-1"
        rows={3}
        required={required}
      />
    </div>
  );
}
