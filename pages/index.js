import { useSession, signIn, signOut } from 'next-auth/react';
3;
import { IoIosRocket } from 'react-icons/io';

const Home = () => {
	const { data: session } = useSession();

	return <div>Hello</div>;
};

export default Home;
