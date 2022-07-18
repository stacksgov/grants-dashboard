import styles from './ProjectData.module.css';
import Calendar from 'react-calendar';
import Link from 'next/link';
import CloseIcon from '../public/images/close.svg';
import StacksLogo from '../public/images/stacks-logo.svg';
import { useState, useEffect } from 'react';
import CalendarDropdown from '../components/calendarDropdown';

const ProjectDataExporter = () => {
	const [endDate, setEndDate] = useState(new Date());
	const [projectType, setProjectType] = useState();
	const [projectPhase, setProjectPhase] = useState();
	let pastSevenDays = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
	const [startDate, setStartDate] = useState(pastSevenDays);
	const [projectTracks, setProjectTracks] = useState();

	return (
		<div>
			<Link href="/">
				<a>
					<div className={styles.close}>
						<p>
							<CloseIcon />
							Close
						</p>
						<span></span>
					</div>
				</a>
			</Link>
			<div className={styles.projectDataWrapper}>
				<h1>Project Data Exporter</h1>
				<p className={styles.descriptor}>
					A simple widget for exporting project data from Github as a .CSV file.
				</p>
				<div className={styles.projectExportWrapper}>
					<div className={styles.dropdownWrapper}>
						<label for="selectProjectType">A. Select Project Type(s)</label>
						<select name="selectProjectType" onChange={(e) => setProjectType(e.target.value)}>
							<option value="" disabled selected>
								Drop down...
							</option>
							<option value="Open Source Starter">Open Source Starter</option>
							<option value="Open Source Builder">Open Source Builder</option>
							<option value="Community Builder">Community Builder</option>
							<option value="Education">Education</option>
							<option value="Events">Events</option>
							<option value="Chapter (by Region)">Chapter (by Region)</option>
							<option value="Alex (DeFi)">Alex (DeFi)</option>
							<option value="Resident Program">Resident Program</option>
							<option value="Direct Investment">Direct Investment</option>
						</select>
					</div>
					<div className={styles.calendarDropdownWrapper}>
						<label for="amountReceived">D. Select Start Date</label>
						<CalendarDropdown onChange={setStartDate} value={startDate} />
					</div>

					<div className={styles.dropdownWrapper}>
						<label for="selectProjectTrack">B. Select Project Track(s)</label>
						<select name="selectProjectTrack" onChange={(e) => setProjectTracks(e.target.value)}>
							<option value="" disabled selected>
								Drop down...
							</option>
							<option value="Stacks Protocol">Stacks Protocol</option>
							<option value="Stacks Interface">Stacks Interface</option>
							<option value="Stacks dApps & Clarity">Stacks dApps & Clarity</option>
							<option value="Stacks Education & Community">Stacks Education & Community</option>
							<option value="Stacks Developer Experience">Stacks Developer Experience</option>
							<option value="Stacks User Experience">Stacks User Experience</option>
							<option value="Cross-Chain & Off-Chain">Cross-Chain & Off-Chain</option>
							<option value="Bitcoin Utility via Stacks">Bitcoin Utility via Stacks</option>
						</select>
					</div>
					<div className={styles.calendarDropdownWrapper}>
						<label for="selectDate">E. Select End Date</label>
						<CalendarDropdown onChange={setEndDate} value={endDate} />
					</div>
					<div className={styles.dropdownWrapper}>
						<label for="selectProjectPhase">C. Select Project Phase</label>
						<select name="selectProjectPhase" onChange={(e) => setProjectPhase(e.target.value)}>
							<option value="" disabled selected>
								Drop down...
							</option>
							<option value="Application Phase">Application Phase</option>
							<option value="Onboarding Phase">Onboarding Phase</option>
							<option value="Milestone 1">Milestone 1</option>
							<option value="Milestone 2">Milestone 2</option>
							<option value="Milestone 3">Milestone 3</option>
							<option value="Milestone 4">Milestone 4</option>
							<option value="Milestone 5">Milestone 5</option>
							<option value="Milestone 6">Milestone 6</option>
							<option value="Milestone 7">Milestone 7</option>
							<option value="Milestone 8">Milestone 8</option>
							<option value="Milestone 9">Milestone 9</option>
							<option value="Milestone 10">Milestone 10</option>
							<option value="Final Deliverable">Final Deliverable</option>
						</select>
					</div>
					<div className={styles.buttonWrappers}>
						<button className={styles.converterButton}>Click to Export</button>
					</div>
					<div className={styles.dropdownWrapper}>
						<div>
							<p>Date Range</p>
							<p className={styles.dates}>
								{startDate
									.toLocaleString('default', {
										month: 'long',
										day: '2-digit',
										year: '2-digit'
									})
									.replace(' ', '-')
									.replace(',', '-')
									.replace(' ', '')}{' '}
								to{' '}
								{endDate
									.toLocaleString('default', {
										month: 'long',
										day: '2-digit',
										year: '2-digit'
									})
									.replace(' ', '-')
									.replace(',', '-')
									.replace(' ', '')}
							</p>
						</div>
					</div>
					<div className={styles.dropdownWrapper}>
						<div className={styles.projectsFound}>
							<p>Projects Found</p>
							<p>88</p>
						</div>
					</div>
				</div>
			</div>

			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default ProjectDataExporter;