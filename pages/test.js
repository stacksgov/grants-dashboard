import { useSession, signIn, signOut } from 'next-auth/react';
import { Octokit, App } from 'octokit';

const github = new Octokit({
	auth: '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'
});

async function response() {
	let res = await github.rest.issues.create({
		owner: 'vidiabtc',
		repo: 'dashboard-github',
		title: 'Created with API',
		body: 'Testing if i can assign DIO and add label',
		assignees: ['diopitis', 'vidiabtc'],
		labels: ['new']
	});
}

const test = () => {
	const { data: session } = useSession();

	return (
		<div>
			<h2>Testing...</h2>
			{/* <button onClick={response}>Octokit</button> */}
			{!session && (
				<button backgroundColor="grey" onClick={signIn}>
					Connect Github
				</button>
			)}
			{session && (
				<>
					<button backgroundColor="grey" onClick={signOut}>
						Sign out {JSON.stringify(session)}
					</button>
				</>
			)}
		</div>
	);
};

export default test;
