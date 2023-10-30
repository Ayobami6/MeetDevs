import axios from 'axios';

export const getTalentCertifications = (talentId) => {
  const talentCertifications = axios.get(
    `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/certifications/talent/${talentId}`,
  );
  return talentCertifications;
};

export const updateCertification = (id, certification) => {
  const res = axios.put(
    `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/certifications/${id}`,
    certification,
  );
  return res;
};

export const deleteCertification = (id) => {
  axios.delete(
    `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/certifications/${id}`,
  );
};

export const createCertification = (certificationData) => {
  const data = axios.post(
    'https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/certifications',
    certificationData,
  );
  return data;
};
