import styles from './ProjectLinks.module.css';

const ProjectLinks = () => {
	return (
		<div className={styles.projectLinkWrapper}>
			<h1>Project Links</h1>
			<div className={styles.subtitle}>
				<p>
					This is an optional step, but one that can really help your odds of approval. The best
					types of links are to pitch decks and code repositories. If you provide a pitch deck, it
					is helpful if you include testimonial (tweets, etc) from the community indicating that
					your project will fill a need in the community. We also love 1 to 2 min videos and/or
					voice memo’s of you explaining your project and why it should be approved.
				</p>
				<p>
					If you do provide links to files, please be sure that access is set so that anyone on the
					web can view it.
				</p>
			</div>

			<div>
				<div className={styles.inputSectionWrapper}>
					<div className={styles.inputSection}>
						<label for="supportLink1">Support Link 1</label>
						<input id="supportLink1" type="text" placeholder="Type Here..." />
					</div>
					<div className={styles.inputSection}>
						<label for="supportLink1Description">Description</label>
						<input id="supportLink1Description" type="text" placeholder="Type Here..." />
						<div className={styles.progressBarWrapper}>
							<p>60 Characters</p>
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
				</div>
				<div className={styles.inputSectionWrapper}>
					<div className={styles.inputSection}>
						<label for="supportLink2">Support Link 2</label>
						<input id="supportLink2" type="text" placeholder="Type Here..." />
					</div>
					<div className={styles.inputSection}>
						<label for="supportLink2Description">Description</label>
						<input id="supportLink2Description" type="text" placeholder="Type Here..." />
						<div className={styles.progressBarWrapper}>
							<p>60 Characters</p>
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
				</div>
			</div>
		</div>
	);
};

export default ProjectLinks;
