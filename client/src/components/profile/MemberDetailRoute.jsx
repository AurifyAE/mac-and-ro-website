import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { members } from '../../data/teamMembers';
import MemberDetail from './MemberDetail';

function MemberDetailRoute() {
	const { slug } = useParams();
	const member = members.find((m) => m.slug === slug);
	
	if (!member) {
		return (
			<div className="mx-auto max-w-3xl px-4 py-12">
				<Link to="/" className="text-sm text-gray-600 hover:text-gray-800">← Back to team</Link>
				<h1 className="mt-3 text-2xl font-semibold">Member not found</h1>
			</div>
		);
	}
	
	return <MemberDetail {...member} />;
}

export default MemberDetailRoute;
