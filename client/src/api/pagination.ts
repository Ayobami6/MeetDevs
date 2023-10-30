import axios from 'axios';

export const talentsPerPage = (pageNo) => {
  const talents = axios.get(`https://organic-bassoon-677rjg69p99hr77q-3000.app.github.dev/api/talents?page=${pageNo}`);
  return talents;
};
