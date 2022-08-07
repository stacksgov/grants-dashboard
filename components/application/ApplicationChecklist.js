import Checkbox from '../Checkbox';
import Form from '../Form';
import { useEffect } from 'react';

const ApplicationChecklist = () => {
	useEffect(() => {
		let formData = JSON.parse(localStorage.getItem('formData'));
		if (formData.agreedToChecklist) {
			let checklist = Array.from(document.getElementsByName('guidelines'));
			checklist.map((item) => {
				item.checked = true;
			});
		}
	});

	return (
		<Form
			title="Application Checklist"
			description="Please confirm you acknowledge the following before proceeding with the rest of your application."
		>
			<Checkbox
				name="guidelines"
				id="guideline1"
				value={
					<p>
						I have read and understood the{' '}
						<a href="https://github.com/stacksgov/Stacks-Grant-Launchpad/wiki/Process#milestone--final-deliverable-delivery-guidelines">
							application guidelines
						</a>{' '}
						and the{' '}
						<a
							target="_blank"
							rel="external noopener noreferrer"
							href="https://github.com/stacksgov/Stacks-Grant-Launchpad/wiki/Terms-and-Conditions"
						>
							terms and conditions
						</a>
						.
					</p>
				}
			/>
			<Checkbox
				name="guidelines"
				id="guideline2"
				value={
					<p>
						I have read the{' '}
						<a
							target="_blank"
							rel="external noopener noreferrer"
							href="https://github.com/stacksgov/Stacks-Grant-Launchpad/wiki/Process#a-application-review-phase"
						>
							application review schedule
						</a>{' '}
						and understand when to expect feedback on my application.
					</p>
				}
			/>
			<Checkbox
				name="guidelines"
				id="guideline3"
				value={
					<p>
						I understand that if I have any questions regarding the application and/or grant they
						should be asked either as a comment to my grant application Github issue or in the
						Grants Github{' '}
						<a
							target="_blank"
							rel="external noopener noreferrer"
							href="https://github.com/stacksgov/Stacks-Grant-Launchpad/discussions/categories/q-a"
						>
							discussion board.
						</a>
					</p>
				}
			/>
			<Checkbox
				name="guidelines"
				id="guideline4"
				value="I understand any software, code, or community resources produced with support from the Stacks Foundation must be released under an open-source license."
			/>
			<Checkbox
				name="guidelines"
				id="guideline5"
				value="I understand all payments are contingent on satisfactory completion of each deliverable described by me in this application."
			/>
			<Checkbox
				name="guidelines"
				id="guideline6"
				value="I understand that in order for a deliverable to be reviewed I must add a comment to my grant application Github issue and provide a link to the deliverable requiring review."
			/>
		</Form>
	);
};

export default ApplicationChecklist;
