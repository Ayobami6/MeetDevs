import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar2';

const Talent = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('talentProfile'))
    );
    return (
        <div>
            <Navbar />
            <h2 className='text-3xl text-center my-4'>
                Welcome {user.talent.name}
            </h2>
        </div>
    );
};

export default Talent;
