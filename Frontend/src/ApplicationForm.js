import React, { useState } from 'react';
import logo from './logo.jpeg';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    nameOfAccused: '',
    applicationUnder: '',
    applicationType: '',
    firNoAndDate: '',
    offenceMentioned: '',
    policeStation: '',
    dateOfArrest: '',
    nextDateInTrial: '',
    nameOfCourt: '',
    detailsOfCustody: '',
    particularsOfBailOrder: '',
    particularsOfOtherCases: '',
    photocopiesOfAuthorities: '',
    photocopiesOfJudgments: '',
    anyOtherRelevantInformation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl border-8 border-[rgba(15,36,62,255)] mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Bail Application Form</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Name of the Accused/Applicant:</label>
            <input
              type="text"
              name="nameOfAccused"
              value={formData.nameOfAccused}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Application Under:</label>
            <select
              name="applicationUnder"
              value={formData.applicationUnder}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            >
              <option value="">Select</option>
              <option value="436">Section 436 Cr.P.C</option>
              <option value="437">Section 437 Cr.P.C</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">FIR No. and Date:</label>
            <input
              type="text"
              name="firNoAndDate"
              value={formData.firNoAndDate}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Offence mentioned in FIR:</label>
            <input
              type="text"
              name="offenceMentioned"
              value={formData.offenceMentioned}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Police Station:</label>
            <input
              type="text"
              name="policeStation"
              value={formData.policeStation}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Date of arrest:</label>
            <input
              type="date"
              name="dateOfArrest"
              value={formData.dateOfArrest}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Next D.O.H in Trial Court:</label>
            <input
              type="date"
              name="nextDateInTrial"
              value={formData.nextDateInTrial}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Name of trial Court:</label>
            <input
              type="text"
              name="nameOfCourt"
              value={formData.nameOfCourt}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Details of custody, if any, by applicant:</label>
          <textarea
            name="detailsOfCustody"
            value={formData.detailsOfCustody}
            onChange={handleChange}
            className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Particulars of orders made earlier as to dismissal of bail applications:</label>
          <textarea
            name="particularsOfBailOrder"
            value={formData.particularsOfBailOrder}
            onChange={handleChange}
            className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Particulars of other cases against applicant:</label>
          <textarea
            name="particularsOfOtherCases"
            value={formData.particularsOfOtherCases}
            onChange={handleChange}
            className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            rows="3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Photocopies of Authorities relied upon:</label>
            <input
              type="text"
              name="photocopiesOfAuthorities"
              value={formData.photocopiesOfAuthorities}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Photocopies of Judgments relied upon:</label>
            <input
              type="text"
              name="photocopiesOfJudgments"
              value={formData.photocopiesOfJudgments}
              onChange={handleChange}
              className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[rgba(15,36,62,255)] mb-1">Any other relevant information:</label>
          <textarea
            name="anyOtherRelevantInformation"
            value={formData.anyOtherRelevantInformation}
            onChange={handleChange}
            className="w-full border border-[rgba(15,36,62,255)] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-[rgba(15,36,62,255)]"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[rgba(15,36,62,255)] text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
