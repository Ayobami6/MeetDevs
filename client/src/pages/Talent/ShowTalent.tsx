// @ts-nocheck
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import TalentNav from '../../components/Navbar/TalentNav';
import { getTalent } from '../../actions/talent';
import TalentDetails from '../../components/TalentDetails';

const ShowTalent = () => {
  const { talent } = useSelector((state) => state?.talents);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTalent(setLoading, id));
  }, [id, dispatch]);

  return (
    <>
      <TalentNav />
      <div>{loading ? <Loading /> : <TalentDetails talent={talent} />}</div>
    </>
  );
};

export default ShowTalent;
