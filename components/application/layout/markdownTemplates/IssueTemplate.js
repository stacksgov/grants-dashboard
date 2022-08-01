export const generateTemplate = (flow, formData) => {
	let template;
	if (flow == 'C') {
		template = `
  
  # PROJECT BASICS

  **Application Type:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp; ${
		formData.applicationType || ''
	}
  
  **Wishlist Submission:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp; [Link to Issue](${
		formData.wishlistGithub || ''
	})
  
  
  **Applicant Credentials:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&thinsp;${
		formData.wishlistTeamFit || ''
	}
  
  
  # PROJECT MISSION, IMPACT, RISKS & REFERENCE

  ${
		typeof formData.budgetRevision !== 'undefined'
			? `
  **Budget:**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;${formData.budgetRevision || ''}
  `
			: ''
	}
  
  ${
		typeof formData.durationRevision !== 'undefined'
			? `
  **Duration:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.durationRevision || ''}
  `
			: ''
	}
  
  ${
		typeof formData.projectRevisions !== 'undefined'
			? `
  **Other:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;${
		formData.projectRevisions || ''
	}
  `
			: ''
	}
  `;
	} else {
		let fundingStream;
		switch (formData.projectType) {
			case 'Open Source Starter Grant':
			case 'Open Source Builder Grant':
				fundingStream = 'Developer Grants';
				break;
			case 'Stacks Community Builder Grant':
			case 'Stacks Education Grant':
			case 'Stacks Event Grant':
			case 'Stacks Chapter Grant (by Region)':
				fundingStream = 'Community Grants';
				break;
			case 'ALEX (DeFi) Grant':
				fundingStream = 'Ecosystem Partner Grant';
				break;
			case 'Stacks Foundation Resident Program':
			case 'Stacks Foundation Direct Investment':
				fundingStream = 'Advanced Support';
				break;
			case 'Stacks Web3 Startup Lab':
			case 'Stacks Accelerator':
				fundingStream = 'Affiliated Organization';
				break;
		}

		template = `
  # PROJECT BASICS
  
  **Project Name:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;${
		formData.projectTitle || ''
	}

   **Application Type:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp; ${
			formData.applicationType || ''
		}
  
  **Project Budget:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&thinsp;${
		formData.projectBudget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || ''
	}
  
  **Project Duration:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&thinsp;${
		formData.projectDuration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || ''
	}
  
  **Funding Stream:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&thinsp;${fundingStream}
  
  **Project Type:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&#8202;&thinsp;${
		formData.projectType || ''
	}
  
  **Project Track:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&#8202;&thinsp;${
		formData.projectTrack || ''
	}
  
  **Project Goal:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&thinsp;${
		formData.projectGoal || ''
	}
  
  **Project Audience:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&#8202;&thinsp;${
		formData.projectAudience || ''
	}
  
  **Specific Audience:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;${
		formData.specificAudience || ''
	}
  
  **Project Openness:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&#8202;&thinsp;${
		formData.projectOpenness || ''
	}
  
  **Project Team Members:**&#8202;&#8202;&#8202;&thinsp;${formData.projectTeam || ''}
  
    ${
			typeof formData.previousGrant !== 'undefined'
				? `
**Previous Grants:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&thinsp;${formData.previousGrant}

**Ecosystem Programs:** &nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&thinsp;${formData.otherEcosystemPrograms}
    `
				: ''
		}
  
  
  # PROJECT MISSION, IMPACT, RISKS & REFERENCE
  
  **Project Mission:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.projectMission || ''}
  
  **Project Impact:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.projectImpact || ''}
  
  **Project Risks:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;${formData.projectRisks || ''}
  
  **[Project Link:](${
		formData.referenceLink || ''
	})** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;${formData.referenceLinkDescription || ''}
  
  # PROJECT ROADMAP & DELIVERABLES
  
  
  ${
		typeof formData.milestone1Deliverable !== 'undefined'
			? `
**MILESTONE 1:**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.milestone1Deliverable}
  `
			: ''
	}
  
  ${
		typeof formData.milestone2Deliverable !== 'undefined'
			? `
**MILESTONE 2:**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.milestone2Deliverable}
    `
			: ''
	}
  
    ${
			typeof formData.milestone3Deliverable !== 'undefined'
				? `
**MILESTONE 3:**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.milestone3Deliverable}
    `
				: ''
		}
  
    
    ${
			typeof formData.milestone4Deliverable !== 'undefined'
				? `
**MILESTONE 4:**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.milestone4Deliverable}
    `
				: ''
		}
  
  
    ${
			typeof formData.milestone5Deliverable !== 'undefined'
				? `
**MILESTONE 5:**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.milestone5Deliverable}
    `
				: ''
		}
  
    
    ${
			typeof formData.milestone6Deliverable !== 'undefined'
				? `
**MILESTONE 6:**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.milestone6Deliverable}
    `
				: ''
		}
  
    
    ${
			typeof formData.milestone7Deliverable !== 'undefined'
				? `
**MILESTONE 7:**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.milestone7Deliverable}
    `
				: ''
		}
  
    
    ${
			typeof formData.milestone8Deliverable !== 'undefined'
				? `
**MILESTONE 8:**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.milestone8Deliverable}
    `
				: ''
		}
  
**FINAL DELIVERABLE**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;${formData.finalDeliverable || ''}
    `;
	}

	return template;
};
