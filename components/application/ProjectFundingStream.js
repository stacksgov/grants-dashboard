import styles from './ProjectFundingStream.module.css';
import PersonIcon from '../../public/images/person.svg';
import TagIcon from '../../public/images/payTag.svg';
import DropIcon from '../../public/images/waterDrop.svg';
import ArrowIcon from '../../public/images/arrow.svg';
import Form from '../Form';
import Radio from '../Radio';
import { projectTypes } from '../../content';
import { getSelectedValue } from '../Form';
import { useEffect } from 'react';

const ProjectFundingStream = () => {
	useEffect(() => {
		getSelectedValue('projectType');
	});

	return (
		<Form title="Grant Type" description="Select the Grant Type below.">
			<div className={styles.fundingStreamWrapper}>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>
								<p>
									<PersonIcon />
									Name
								</p>
							</th>
							<th>
								<p>
									<TagIcon />
									MAX. $
									<ArrowIcon />
								</p>
							</th>
							<th>
								<p>
									<DropIcon />
									FUNDING STREAM
									<ArrowIcon />
								</p>
							</th>
						</tr>
					</thead>
					<tbody>
						{projectTypes.map((type) => {
							return (
								<tr style={{ position: 'relative' }} key={type.name}>
									<td>
										{type.name.toLowerCase() !== 'stacks web3 startup lab' &&
										type.name.toLowerCase() !== 'stacks accelerator' ? (
											<input type="radio" name="projectType" value={type.name} />
										) : (
											<></>
										)}
									</td>
									<td>
										<label>{type.name}</label>
									</td>
									<td>
										<span>{type.funding}</span>
									</td>
									<td>
										<span style={{ backgroundColor: `${type.color}` }} className={styles.stream}>
											{type.stream}
										</span>
									</td>
									<a href="https://github.com/stacksgov/Stacks-Grant-Launchpad/wiki/Funding-Stream-Details#funding-stream-details" target="_blank" rel="noreferrer">
									<div className={styles.icon}>{type.icon}</div>
									</a>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Form>
	);
};

export default ProjectFundingStream;
