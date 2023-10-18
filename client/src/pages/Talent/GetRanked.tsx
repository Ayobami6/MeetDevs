import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TalentNav from '../../components/Navbar/TalentNav';
import { getScoresTalent, ScoreUpdate } from '../../actions/score';
import { useDispatch, useSelector } from 'react-redux';
import { talentPatch, getTalent } from '../../actions/talent';

const GetRanked = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [notify, setNotify] = useState(false);
    const { talent } = JSON.parse(localStorage.getItem('talentProfile'));
    const scores = useSelector((state) => state.score.talentScores);
    const talentUser = useSelector((state) => state.talents.talent);
    const talentId = talent._id;

    const getGithubData = async (githubUsername) => {
        const res = await axios.get(
            `https://api.github.com/users/${githubUsername}`
        );
        return res;
    };

    useEffect(() => {
        dispatch(getTalent(setLoading, talentId));
        dispatch(getScoresTalent(setLoading));
    }, [dispatch, talentId]);

    const calculatePercentile = async () => {
        let score = 0;
        let percentile = 0;
        if (talentUser.github) {
            const result = await getGithubData(talentUser.github);
            if (result.data.public_repos <= 30) score += 30;
            else if (
                result.data.public_repos > 30 &&
                result.data.public_repos <= 70
            )
                score += 70;
            else score += 100;

            const updatedDate = new Date(result.data.updated_at);
            const createdDate = new Date(result.data.created_at);

            const timeDifference = updatedDate - createdDate;

            const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
            const yearsOfExperience = timeDifference / millisecondsInYear;

            const roundedYears = Math.round(yearsOfExperience);
            if (roundedYears <= 3) score += 30;
            else if (yearsOfExperience > 3 && yearsOfExperience <= 7)
                score += 70;
            else score += 100;

            if (result.data.followers <= 30) score += 30;
            else if (result.data.followers > 30 && result.data.followers <= 70)
                score += 70;
            else score += 100;

            if (scores.length <= 1) {
                percentile = 100;
            } else {
                scores.sort((a, b) => a - b);
                const lesserScores = scores.filter((item) => item < score);
                const lesserScoreLen = lesserScores.length;
                if (lesserScoreLen <= 1) percentile = 100;
                else percentile = (lesserScoreLen / scores.length) * 100;
            }
            console.log(percentile);
            return [score, percentile];
        }
        return [score, percentile];
    };

    const handleClick = async () => {
        const [score, percentile] = await calculatePercentile();
        const scoreData = {
            talentId,
            score,
        };
        const talentData = {
            rank: percentile,
            github: 'Ayobami6',
        };
        await dispatch(ScoreUpdate(talentId, scoreData, setLoading));
        await dispatch(talentPatch(talentId, talentData));
        setNotify(true);
        console.log(score);
    };

    console.log(scores);

    return (
        <div>
            <TalentNav />
            <h1 className='text-3xl text-center m-8 font-bold font-serif'>
                {' '}
                Welcome {talent.name}
            </h1>
            {/* <div className='flex border-[1px] p-4 border-green-200 rounded-md w-[300px] m-10 justify-start text-2xl font-bold'>
                Experimental Feature
            </div> */}
            {talentUser && (
                <div className='border-[1px] border-green-200 p-4 h-[100%] w-[90%] rounded-md mx-auto'>
                    <h1 className='text-center font-md text-2xl'>
                        Get Ranked Experimental
                    </h1>
                    <h3 className='text-center text-md font-serif mt-5 mb-20'>
                        This is an experimental feature that calculates rank
                        percentiles base on your years of experience, skills,
                        and collaborations
                    </h3>
                    <h3 className='border-[1px] py-4 rounded-md w-[60%] mx-auto text-center text-xl font-medium mb-5'>
                        {notify
                            ? `Your New Percentile is ${talentUser.rank}%`
                            : `Your Current Percentile is ${talentUser.rank}%`}
                    </h3>
                    <h4 className='text-center text-md '>
                        Please before you click on test make sure to add your
                        github social account
                    </h4>
                    <div className='flex justify-center mt-3'>
                        {loading ? (
                            <div className='w-10 h-10 border-t-2 border-green-500 border-solid rounded-full animate-spin'></div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className='flex justify-center m-10'>
                        <button
                            className='bg-green-500 animate-bounce text-xl hover:bg-green-700 rounded-xl w-[140px] h-[40px]'
                            onClick={handleClick}
                        >
                            Test
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetRanked;
