import styles from './ProjectRoadmap.module.css';
import Link from 'next/link';
import { useState } from 'react';

const ProjectRoadmap = ({ updateIssue }) => {
	const [milestone, setMilestone] = useState(1);

	const MilestoneComponent = (props) => {
		return (
			<>
				<div className={styles.firstSection}>
					<label for="milestone{props.id}">Milestone {props.number}</label>

					<div className={styles.inputWrapper}>
						<input id="milestone{props.id}" placeholder="Type here..." />
						<button>
							<svg
								width="11"
								height="10"
								viewBox="0 0 11 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.875 1.49959L3.75 8.49959L1.125 5.87459"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Ok
						</button>
					</div>
					<div className={styles.progressBarWrapper}>
						<p>80 Characters</p>
						<div className={styles.progressBar}>
							<span
								style={{
									background: '#718096',
									width: '30%',
									height: '100%',
									display: 'block'
								}}
							></span>
						</div>
					</div>
				</div>
				<div className={styles.milestoneStepsWrapper}>
					<div className={styles.milestoneSteps}>
						<button onClick={() => setMilestone(milestone - 1)}>
							<svg
								width="11"
								height="10"
								viewBox="0 0 11 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.172 8.9376L1.2345 5.0001L5.172 1.0626"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1.78137 5.00011H9.76574"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Back
						</button>
						<div>
							<p>1</p>
							<p>2</p>
							<p>3</p>
							<p>4</p>
							<p>5</p>
							<p>6</p>
							<p>7</p>
							<p>8</p>
							<p>9</p>
							<p>10</p>
							<p>11</p>
							<p>12</p>
						</div>
					</div>
					<div>
						<button onClick={() => setMilestone(milestone + 1)}>
							Next{' '}
							<svg
								width="12"
								height="10"
								viewBox="0 0 12 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.32812 1.0625L10.2656 5L6.32812 8.9375"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M9.71887 5.00029H1.7345"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.secondSection}>
					<div>
						<label>Final Deliverable</label>
						<div className={styles.progressBarWrapper}>
							<p>300 Characters</p>
							<div className={styles.progressBar}>
								<span
									style={{
										background: '#718096',
										width: '30%',
										height: '100%',
										display: 'block'
									}}
								></span>
							</div>
						</div>
					</div>
					<input id="final" placeholder="Type here..." />
				</div>
			</>
		);
	};

	const CurrentMilestone = () => {
		switch (milestone) {
			case 1:
				return <MilestoneComponent number={1} id={'one'} />;
			case 2:
				return <MilestoneComponent number={2} id={'two'} />;
			case 3:
				return <MilestoneComponent number={3} id={'three'} />;
			case 4:
				return <MilestoneComponent number={4} id={'four'} />;
			case 5:
				return <MilestoneComponent number={5} id={'five'} />;

			case 6:
				return <MilestoneComponent number={6} id={'six'} />;

			case 7:
				return <MilestoneComponent number={7} id={'seven'} />;

			case 8:
				return <MilestoneComponent number={8} id={'eight'} />;

			case 9:
				return <MilestoneComponent number={9} id={'nine'} />;

			case 10:
				return <MilestoneComponent number={10} id={'ten'} />;
			case 11:
				return <MilestoneComponent number={11} id={'eleven'} />;
			case 12:
				return <MilestoneComponent number={12} id={'twelve'} />;
		}
	};

	return (
		<div className={styles.projectRoadmapWrapper}>
			<h1>Project Roadmap</h1>
			<p className={styles.subtitle}>
				Select the Project Type below. If you have questions about Project Types, click{' '}
				<Link href="/">
					<a>here</a>
				</Link>
				.
			</p>
			<h2>Milestone Deliverable</h2>
			<CurrentMilestone />
			{/* <MilestoneComponent number={8} id={'eight'} /> */}
		</div>
	);
};

export default ProjectRoadmap;
