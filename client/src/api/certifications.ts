// @ts-nocheck
import axios from 'axios';

export const getTalentCertifications = (talentId) => {
  const talentCertifications = axios.get(
    `https://meetdevs-api.onrender.com/certifications/talent/${talentId}`,
  );
  return talentCertifications;
};

export const updateCertification = (id, certification) => {
  const res = axios.put(
    `https://meetdevs-api.onrender.com/certifications/${id}`,
    certification,
  );
  return res;
};

export const deleteCertification = (id) => {
  axios.delete(`https://meetdevs-api.onrender.com/certifications/${id}`);
};

export const createCertification = (certificationData) => {
  const data = axios.post(
    'https://meetdevs-api.onrender.com/certifications',
    certificationData,
  );
  return data;
};
