import axios from 'axios';

export const talentsPerPage = (pageNo) => {
  const talents = axios.get(`http://localhost:3000/api/talents?page=${pageNo}`);
  return talents;
};
