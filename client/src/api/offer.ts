import axios from 'axios';

export const getTalentOffers = (talentId) => {
  const talentOffers = axios.get(
    `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/offers/talent/${talentId}`,
  );
  return talentOffers;
};

export const getEmployerOffers = (employerId) => {
  const employerOffers = axios.get(
    `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/offers/employer/${employerId}`,
  );
  return employerOffers;
};

export const updateOffer = (id, offer) => {
  const res = axios.patch(
    `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/offers/${id}`,
    offer,
  );
  return res;
};

export const deleteOffer = (id) => {
  axios.delete(
    `https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/offers/${id}`,
  );
};

export const createOffer = (offerData) => {
  const data = axios.post(
    'https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/offers',
    offerData,
  );
  return data;
};
