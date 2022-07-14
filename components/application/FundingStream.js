import styles from './FundingStream.module.css';
import PersonIcon from '../../public/images/person.svg';
import TagIcon from '../../public/images/payTag.svg';
import DropIcon from '../../public/images/waterDrop.svg';
import ArrowIcon from '../../public/images/arrow.svg';
import { projectTypes } from '../../content';

import Input from '../Input';

const FundingStream = ({ form }) => {
	return (
		<div className={styles.fundingStreamWrapper}>
			<h1>Funding Stream & Project Type</h1>
			<p className={styles.subtitle}>
				Select the Project Type below. If you have questions about Project Types, click here.
			</p>
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
							<tr>
								<td>
									<Input
										type="radio"
										name="projectType"
										value={type.name}
										form={form}
										checked={type.name == form.formData['projectType']}
									/>
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
								{type.icon}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default FundingStream;
