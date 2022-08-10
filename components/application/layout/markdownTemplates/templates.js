export const templateA = (formData) => {
	let fundingStream;

	switch (formData.projectType) {
		case 'Open Source Dev 1st time Grantees':
		case 'Open Source Dev Repeat Grantees':
			fundingStream = 'Developer Grants';
			break;
		case 'Stacks Community Builder Grant':
		case 'Stacks Education Grant':
		case 'Stacks Event Grant':
		case 'Stacks Chapter Grant':
			fundingStream = 'Community Grants';
			break;
		case 'ALEX Lab Foundation Grant':
			fundingStream = 'Ecosystem Partner Grant';
			break;
		case 'Stacks Foundation Resident Program':
		case 'Stacks Foundation Direct Investment':
			fundingStream = 'Advanced Support';
			break;
	}

	return `
# APPLICANT

**Type:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
		formData.applicationType || ''
	}

${
	typeof formData.email !== 'undefined'
		? `
**Email:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.email || ''
		  }
`
		: ''
}

${
	typeof formData.discordUsername !== 'undefined'
		? `
**Discord:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.discordUsername || ''
		  }
`
		: ''
}

${
	typeof formData.twitterUsername !== 'undefined'
		? `
**Twitter:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.twitterUsername || ''
		  }
`
		: ''
}


${
	typeof formData.forumUsername !== 'undefined'
		? `
**Stacks Forum:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.forumUsername || ''
		  }
`
		: ''
}

# GRANT BASICS

${
	typeof formData.projectTitle !== 'undefined'
		? `
**Grant Name:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.projectTitle || ''
		  }
`
		: ''
}

${
	typeof formData.projectBudget !== 'undefined'
		? `
**Total Budget:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.projectBudget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || ''
		  }
`
		: ''
}

${
	typeof formData.projectDuration !== 'undefined'
		? `
**Total Duration:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.projectDuration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || ''
		  }
`
		: ''
}

${
	typeof formData.fundingStream !== 'undefined'
		? `
**Funding Stream:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${fundingStream}
`
		: ''
}

${
	typeof formData.projectType !== 'undefined'
		? `
**Grant Type:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.projectType || ''
		  } 
`
		: ''
}

${
	typeof formData.projectTrack !== 'undefined'
		? `
**Grant Track:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.projectTrack || ''
		  }  
`
		: ''
}

${
	typeof formData.projectGoal !== 'undefined'
		? `
**Grant Goal:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.projectGoal || ''
		  }
`
		: ''
}

${
	typeof formData.projectAudience !== 'undefined'
		? `
**Grant Audience:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.projectAudience || ''
		  }
`
		: ''
}

${
	typeof formData.specificAudience !== 'undefined'
		? `
**Specific Audience:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.specificAudience || ''
		  }
`
		: ''
}

${
	typeof formData.projectTeam !== 'undefined'
		? `
**Grant Team:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.projectTeam || ''
		  }
`
		: ''
}

${
	typeof formData.previousGrant !== 'undefined'
		? `
**Previous Grants:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.previousGrant}
`
		: ''
}

${
	typeof formData.otherEcosystemPrograms !== 'undefined'
		? `
**Ecosystem Programs:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.otherEcosystemPrograms}
`
		: ''
}

# GRANT MISSION, IMPACT, RISKS & REFERENCE

**Grant Mission:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
		formData.projectMission || ''
	}

**Grant Impact:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
		formData.projectImpact || ''
	}

**Grant Risks:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
		formData.projectRisks || ''
	}

${
	typeof formData.referenceLink !== 'undefined'
		? `
**[Support Link:](${
				formData.referenceLink || ''
		  })**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.referenceLinkDescription || ''
		  }
`
		: ''
}

# GRANT ROADMAP & DELIVERABLES

${
	typeof formData.milestone1Deliverable !== 'undefined'
		? `
**MILESTONE 1:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone1Deliverable}
`
		: ''
}

${
	typeof formData.milestone2Deliverable !== 'undefined'
		? `
**MILESTONE 2:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone2Deliverable}
`
		: ''
}

${
	typeof formData.milestone3Deliverable !== 'undefined'
		? `
**MILESTONE 3:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone3Deliverable}
`
		: ''
}


${
	typeof formData.milestone4Deliverable !== 'undefined'
		? `
**MILESTONE 4:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone4Deliverable}
`
		: ''
}


${
	typeof formData.milestone5Deliverable !== 'undefined'
		? `
**MILESTONE 5:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone5Deliverable}
`
		: ''
}


${
	typeof formData.milestone6Deliverable !== 'undefined'
		? `
**MILESTONE 6:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone6Deliverable}
`
		: ''
}


${
	typeof formData.milestone7Deliverable !== 'undefined'
		? `
**MILESTONE 7:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone7Deliverable}
`
		: ''
}


${
	typeof formData.milestone8Deliverable !== 'undefined'
		? `
**MILESTONE 8:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone8Deliverable}
`
		: ''
}

**FINAL DELIVERABLE**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
		formData.finalDeliverable || ''
	}
`;
};

export const templateB = (formData) => `
# APPLICANT

**Type:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
	formData.applicationType || ''
}

${
	typeof formData.email !== 'undefined'
		? `
**Email:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.email || ''
		  }
`
		: ''
}

${
	typeof formData.discordUsername !== 'undefined'
		? `
**Discord:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.discordUsername || ''
		  }
`
		: ''
}

${
	typeof formData.twitterUsername !== 'undefined'
		? `
**Twitter:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.twitterUsername || ''
		  }
`
		: ''
}


${
	typeof formData.forumUsername !== 'undefined'
		? `
**Stacks Forum:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.forumUsername || ''
		  }
`
		: ''
}

# WISHLIST IDEA

**Idea:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
	formData.wishlistIdea || ''
}
`;

export const templateC = (formData) => `
# APPLICANT

**Type:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
	formData.applicationType || ''
}

${
	typeof formData.email !== 'undefined'
		? `
**Email:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.email || ''
		  }
`
		: ''
}

${
	typeof formData.discordUsername !== 'undefined'
		? `
**Discord:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.discordUsername || ''
		  }
`
		: ''
}

${
	typeof formData.twitterUsername !== 'undefined'
		? `
**Twitter:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.twitterUsername || ''
		  }
`
		: ''
}


${
	typeof formData.forumUsername !== 'undefined'
		? `
**Stacks Forum:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.forumUsername || ''
		  }
`
		: ''
}

# GRANT BASICS

${
	typeof formData.wishlistGithub !== 'undefined'
		? `
**Wishlist Link:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.wishlistGithub}
`
		: ''
}


${
	typeof formData.previousGrant !== 'undefined'
		? `
**Previous Grants:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.previousGrant}
`
		: ''
}

${
	typeof formData.otherEcosystemPrograms !== 'undefined'
		? `
**Ecosystem Programs:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.otherEcosystemPrograms}
`
		: ''
}

${
	typeof formData.budgetRevision !== 'undefined'
		? `
**Budget:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.budgetRevision || ''
		  }
`
		: ''
}

${
	typeof formData.durationRevision !== 'undefined'
		? `
**Duration:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.durationRevision || ''
		  }
`
		: ''
}

${
	typeof formData.projectRevisions !== 'undefined'
		? `
**Other:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
				formData.projectRevisions || ''
		  }
`
		: ''
}
`;
