import { useSession, signIn, signOut } from 'next-auth/react';

const Home = () => {
	const { data: session } = useSession();

	return <div>Hello</div>;
};

export default Home;
