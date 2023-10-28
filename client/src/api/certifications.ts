// @ts-nocheck
import axios from 'axios';

export const getTalentCertifications = (talentId) => {
  const talentCertifications = axios.get(
    `http://localhost:3000/certifications/talent/${talentId}`,
  );
  return talentCertifications;
};

export const updateCertification = (id, certification) => {
  const res = axios.put(
    `http://localhost:3000/certifications/${id}`,
    certification,
  );
  return res;
};

export const deleteCertification = (id) => {
  axios.delete(`http://localhost:3000/certifications/${id}`);
};

export const createCertification = (certificationData) => {
  const data = axios.post(
    'http://localhost:3000/certifications',
    certificationData,
  );
  return data;
};
