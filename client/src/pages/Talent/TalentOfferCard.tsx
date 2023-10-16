import React from 'react';

const TalentOfferCard = ({ offer }) => {
	return (
		<>
			<div className='px-4 sm:px-10'>
				<div className='w-full sm:w-[calc(50% - 2rem)] border-2 border-gray-200 rounded-lg shadow-sm mt-4 sm:mt-9 h-[90px] bg-white'>
					<div className='grid grid-cols-1 sm:grid-cols-2'>
						<div className='flex-wrap text-sm sm:text-md my-2 p-2 sm:p-3'>
							<h1 className='text-lg sm:text-xl font-semibold'>
								Job Title: {offer.title}
							</h1>
							<p className='hidden sm:block'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<div className='flex justify-center sm:justify-end m-2 sm:m-5 sm:flex-wrap gap-2 sm:gap-3'>
							<button className='w-[4rem] sm:w-40 text-sm sm:text-xl h-[25px] md:h-[40px] border-2 shadow-md border-white rounded-full hover:bg-green-800 bg-green-600'>
								Accept
							</button>
							<button className='w-[4rem] sm:w-40 text-sm sm:text-xl h-[25px] md:h-[40px] border-2 border-white shadow-md hover:bg-red-800 rounded-full bg-red-600'>
								Reject
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TalentOfferCard;
