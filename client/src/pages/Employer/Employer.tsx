import TalentCard from '../../components/TalentCard';
import TalentNav from '../../components/Navbar/TalentNav';
import Search from '../../components/util/Search';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getTalents, getTalentsPerPage } from '../../actions/talent';
// import { talentsPerPage } from '../../api/pagination';

const Employer = () => {
  // const { talents } = useSelector((state) => state.talents);
  const { pagination } = useSelector((state) => state.talents);
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getTalentsPerPage(setLoading, page));
    // dispatch(getTalents(setLoading));
  }, [page]);

  const prevPage = () => setPage((cur) => cur - 1);
  const nextPage = () => setPage((cur) => cur + 1);
  return (
    <>
      <TalentNav />

      <div className='bg-gray-100 min-h-screen p-5'>
        <div className='flex mx-10 justify-end'>
          <Search />
        </div>
        <h1 className='text-3xl font-bold mb-5'>Available Talents</h1>
        {!loading ? (
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {pagination.talents.map((talent) => (
                <TalentCard
                  name={talent.name}
                  key={talent._id}
                  jobRole={talent.jobRole}
                  location={talent.location}
                  bio={talent.bio}
                  github={talent.github}
                  profileImg={talent.profileImg}
                  id={talent._id}
                  rank={talent.rank}
                />
              ))}
            </div>
            <div className='flex justify-left gap-2'>
              <button
                disabled={page === 1}
                className='w-[70px] hover:border-green-200 h-[30px] rounded-md my-5 border-[1px] border-green-400 text-sm'
                onClick={prevPage}
              >
                Prev
              </button>
              <button
                disabled={page === pagination.totalPages}
                className='w-[70px] hover:border-green-200 h-[30px] rounded-md my-5 border-[1px] border-green-400 text-sm'
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Employer;
