import GithubIcon from '../../public/images/github.svg';
import DiscordIcon from '../../public/images/discord.svg';
import TwitterIcon from '../../public/images/twitter.svg';
import Input from '../Input';
import Form from '../Form';
import { useSession } from 'next-auth/react';

const ProjectUserInfoOne = () => {
	let style = { display: 'flex', gap: '20px' };
	const { data: session } = useSession();

	const Fields = () => {
		return (
			<div>
				<div style={style}>
					<Input
						name="githubUsername"
						label="GitHub User Name"
						labelSpan="(login username user)"
						pageWidth="half"
						labelSize="12px"
						image={<GithubIcon />}
						readOnly={true}
					/>
					<Input
						name="email"
						label="Email *"
						labelSpan="(required, will be displayed on Github)"
						pageWidth="half"
						labelSize="12px"
						paddingBottom="50px"
					/>
				</div>
				<div style={style}>
					<Input
						name="discordUsername"
						label="Discord User Name"
						labelSpan="(optional)"
						pageWidth="half"
						labelSize="12px"
						image={<DiscordIcon />}
					/>
					<Input
						name="twitterUsername"
						label="Twitter User Name"
						labelSpan="(optional)"
						pageWidth="half"
						labelSize="12px"
						image={<TwitterIcon />}
					/>
				</div>
			</div>
		);
	};
	return (
		<Form
			title="User Information (1 of 2)"
			description="Tell us a bit about yourself."
			fields={Fields}
		/>
	);
};

export default ProjectUserInfoOne;
