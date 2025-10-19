import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeamHome from '../components/profile/TeamHome';
import MemberDetailRoute from '../components/profile/MemberDetailRoute';

function Profile() {
	return (
		<Routes>
			<Route index element={<TeamHome />} />
			<Route path=":slug" element={<MemberDetailRoute />} />
		</Routes>
	);
}

export default Profile;


