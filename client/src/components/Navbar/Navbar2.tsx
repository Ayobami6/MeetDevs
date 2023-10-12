import React from 'react';

const AuthNavbar = () => {
    return (
        <>
            <div className="flex justify-between p-3 px-10 { isAuth ? border-md : '' } ">
                <div className='flex gap-10 items-center'>
                    <img src='src/assets/logo.png' alt='logo' width={160} />
                </div>
                <h2>Name</h2>
            </div>
        </>
    );
};

const Navbar2 = ({ isAuth = false }) => {
    return (
        <>
            {isAuth ? (
                <AuthNavbar />
            ) : (
                <div className='flex justify-between p-3 px-10 border-b-[2px] shadow-sm'>
                    <div className='flex gap-10 items-center'>
                        <img src='src/assets/logo.png' alt='logo' width={160} />

                        <div className='text-2xl font-medium hidden md:flex gap-6'>
                            <h2 className='hover:bg-green-700 p-3 rounded-xl'>
                                Get Ranked
                            </h2>
                            <h2 className='hover:bg-green-700 p-3 rounded-xl'>
                                Offers
                            </h2>
                        </div>
                    </div>
                    <h2>Name</h2>
                </div>
            )}
        </>
    );
};

export default Navbar2;
