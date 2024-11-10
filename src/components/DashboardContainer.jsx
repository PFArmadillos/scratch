// serve as the main container, displaying the user’s subscriptions, trials, budget, and profile info.

import React from 'react';
import TrialContainer from './TrialContainer.jsx';
import SubscriptionContainer from './SubscriptionContainer.jsx';
import AddNewContainer from './AddNewContainer.jsx';
import BudgetContainer from './BudgetContainer.jsx';
import UserProfileDropdown from './UserProfileDropdown.jsx';
import Icony from './Icony.jsx';

const DashboardContainer = () => {
	return (
		<div className='flex flex-col items-center bg-gray-100 min-h-screen p-4'>
			{/* Header with Icon and User Info */}
			<header className='w-full flex justify-between items-center bg-white p-4 rounded shadow-md'>
				<Icony />
				<h1 className='text-2xl font-bold text-indigo-600'>ArmaDollar Saver</h1>
				<UserProfileDropdown />
			</header>

			{/* Budget and Add Subscription Button */}
			<div className='w-full flex justify-between items-center mt-4'>
				<BudgetContainer />
				<AddNewContainer />
			</div>

			{/* Subscription and Trial Lists */}
			<div className='w-full flex flex-col md:flex-row gap-4 mt-6'>
				<SubscriptionContainer />
				<TrialContainer />
			</div>
		</div>
	);
};

export default DashboardContainer;

// import React from 'react';
// import TrialContainer from './TrialContainer.jsx';
// import SubscriptionContainer from './SubscriptionContainer.jsx';
// import AddNewContainer from './AddNewContainer.jsx';

// const DashboardContainer = () => {
//   return (
//     <div className='border border-indigo-600'>
//       <h1>DashboardContainer</h1>
//       <AddNewContainer />
//       <SubscriptionContainer />
//       <TrialContainer />
//     </div>
//   );
// };

// export default DashboardContainer;