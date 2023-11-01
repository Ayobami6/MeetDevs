// @ts-nocheck
import axios from 'axios';

export const talentsPerPage = (pageNo) => {
  const talents = axios.get(
    `https://meetdevs-api.onrender.com/api/talents?page=${pageNo}`,
  );
  return talents;
};
