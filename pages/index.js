import styles from './Index.module.css';
import Rocket from '../public/images/rocket.svg';
import RocketShip from '../public/images/rocketship.svg';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import ExternalLinkIcon from '../public/images/externalLink.svg';
import { useEffect, useState, useRef } from 'react';
import { Octokit } from '@octokit/rest';
import { useRouter } from 'next/router'
import StacksLogo from '../public/images/indexStxLogo.svg';
import StacksLogoSuccess from '../public/images/stacksModalLogoSuccess.svg';
import NavHeader from '../components/NavHeader';
import InfoCard from '../components/InfoCard';
import Abstracto_005 from '../public/images/Abstracto_005.svg';
import Abstracto_007 from '../public/images/Abstracto_007.svg';
import Abstracto_008 from '../public/images/Abstracto_008.svg';

const Home = () => {
	const { data: session } = useSession();
	const router = useRouter()
	const [show, setShow] = useState(false);
	const [mobile, setMobile] = useState();
	const [highlightButton, setHighlightButton] = useState(false);
	const connectButton = useRef(null);

	useEffect(() => {
		console.log('ENV IS : - ',process.env.GITHUB_CLIENT_ID)
		async function refresh() {
			if (session) {
				const github = new Octokit({
					auth: session.accessToken
				});
				let user = await github.request('GET /user');
				console.log('Github resposne is :  - ', user);
				let filteredData = {
					id: user?.data?.id,
					name: user?.data?.name,
					login: user?.data?.login,
					type: user?.data?.type
				}
				const res = await Login(filteredData);
				console.log('Login resposne is : - ', res);
				if (res) {
					let formData = JSON.parse(localStorage.getItem("formData"));
					if (!formData) {
						localStorage.setItem("formData", JSON.stringify({}));
					}
					formData = JSON.parse(localStorage.getItem("formData"));
					formData.githubUsername = session.user.name;
					formData.email = user?.data?.email
					localStorage.setItem("formData", JSON.stringify(formData));
					saveToken(res.user.token);
					session.user.type = res.user.type
				}
			}
		}
		if (session) {
			refresh();
		}

		window.innerWidth >= 800 ? setMobile(false) : setMobile(true);
	});

	console.log('Session is : - ',session);

	const signOutUser = () => {
		localStorage.setItem('formData',JSON.stringify({}));
		signOut();
	}

	const truncateUsername = (ghUsername) => {
		if (ghUsername.length < 10) {
			return ghUsername;
		} else {
			return ghUsername.slice(0, 8) + '...';
		}
	};

	const Button = () => {
		if (mobile === true) {
			return (
				<button onClick={() => setShow(true)}>Submit your Grant Application here!</button>
			);
		} else if (!session) {
			return (
				<button onClick={() => (!session ? signIn('github') : signOut())}
				>
					<a>Submit your Grant Application here!</a>
				</button>
			);
		} else if (session) {
			return (
				<Link href="/quiz">
					<button>
						<a>Submit your Grant Application here!</a>
					</button>
				</Link>
			);
		} else {
			return null;
		}
	};

    const data = [
        {
            title: 'sBTC Protocol',
            fee: '1.25 BTC per team member',
            headingSecondary: 'Testing Team',
            awardedIn: '$BTC',
            deadline: 'June 20, 2023',
            description: 'Seeking 3-6 experienced Software Engineers to design and build sBTC-related testing infrastructure and quality assurance systems. The members of this team will be expected to work 40 hrs/wk for 12 weeks on this effort.',
            text: '',
            link: 'https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/914'
        },
        {
            title: 'Stacks Protocol',
            fee: 'Up to 100k STX',
            headingSecondary: 'Liquid STX',
            awardedIn: '$STX',
            deadline: 'June 20, 2023',
            description: 'Develop a comprehensive liquid stacking module for STX on Stacks. Provide a streamlined stacking process for users and increasing liquidity and participation in the network via automated reward conversion, stSTX token issuance, and other liquid stacking features.',
            text: '',
            link: 'https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/915'
        },
        {
            title: 'Bitcoin on Stacks',
            fee: 'Undetermined',
            headingSecondary: 'Improvements',
            awardedIn: '$BTC',
            deadline: 'June 20, 2023',
            description: 'Soliciting ideas for open-source, high-impact contributions to advance the mission of activating all L1 Bitcoin-based assets on the L2 Stacks layer via the sBTC protocol.',
            text: 'Open to proposals focused on extending sBTC at the infrastructural or application level and/or improving DevEx.',
            link: 'https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/916'
        },
        {
            title: 'Stacks & Clarity',
            fee: 'Undetermined',
            headingSecondary: 'Improvements',
            awardedIn: '$STX',
            deadline: 'June 20, 2023',
            description: 'Soliciting ideas for open-source, high-impact contributions to advance the mission of activating all L1 Bitcoin-based assets on the L2 Stacks layer via Clarity smart contracts.',
            text: 'Open to proposals focused on improving Stacks at the infrastructural or application level and/or improving DevEx',
            link: 'https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/917'
        }
    ]

	return (
		<div className={styles.bountiesBody}>
            <div style={{position: 'absolute',right: 0,bottom: 0,zIndex: 1}}>
                    <Abstracto_005/>
                </div>
			<div>
				<style>{`
					html,
					body,
					body > div:first-child,
					div#__next,
					div#__next > div {
						
					}
				`}</style>
                <div style={{position: 'absolute',top: 0,left: 0}}>
                    <Abstracto_007/>
                </div>
                

				
				<div className={styles.container}>
                
                    <NavHeader/>
                    <div className={styles.banner}>
                        <div className={styles.bannerLeft}>
                            <p className={styles.textTop}>Funding up to 12 BTC + 250k STX</p>
                            <h1>Critical Bounties</h1>
                            <p className={styles.textBottom}>Critical Bounties are RFP-style grants that support the development of a user-owned & open-source internet anchored in Bitcoin technology.</p>
                        </div>
                        <div style={{position: 'absolute',right: -150,top: -190,zIndex: -1}}>
                            <Abstracto_008/>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.active}>Open</button>
                        <button>Closed</button>
                    </div>
                    <div className={styles.cardsWrapper}>
                        {
                            data.map((item,index)=>(
                                <InfoCard key={index} title={item.title} headingSecondary={item.headingSecondary} awardedIn={item.awardedIn} fee={item.fee} deadline={item.deadline} description={item.description} text={item.text} link={item.link}/>
                            ))
                        }
                        
                    </div>
                    
                </div>
				{/* <StacksLogo className={styles.stxLogo} /> */}
			</div>
			{show === true ? (
				<div className={styles.mobileModal}>
					<StacksLogoSuccess className={styles.stxLogoModal} />

					<p>
						Looks like you are on a mobile device. For the best experience and to submit a grant
						please use a computer.
					</p>
					<p onClick={() => setShow(false)}>Dismiss</p>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Home;


const utilBtn = {
	background: 'rgba(0, 0, 0, 0.8)',
	color: '#fff',
	padding: '10px 20px',
	border: 'none',
	borderRadius: 5,
	fontSize: 10
}
