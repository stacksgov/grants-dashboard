export const templateA = (formData) => {
  let fundingStream;

  switch (formData.projectType) {
    case "Open Source Starter Grant":
    case "Open Source Builder Grant":
      fundingStream = "Developer Grants";
      break;
    case "Stacks Community Builder Grant":
    case "Stacks Education Grant":
    case "Stacks Event Grant":
    case "Stacks Chapter Grant (by Region)":
      fundingStream = "Community Grants";
      break;
    case "ALEX (DeFi) Grant":
      fundingStream = "Ecosystem Partner Grant";
      break;
    case "Stacks Foundation Resident Program":
    case "Stacks Foundation Direct Investment":
      fundingStream = "Advanced Support";
      break;
    case "Stacks Web3 Startup Lab":
    case "Stacks Accelerator":
      fundingStream = "Affiliated Organization";
      break;
  }

  return `
# APPLICANT

**Type:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.applicationType || ""
  }

${
  typeof formData.email !== "undefined"
    ? `
**Email:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.email || ""
      }
`
    : ""
}

${
  typeof formData.discordUsername !== "undefined"
    ? `
**Discord:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.discordUsername || ""
      }
`
    : ""
}

${
  typeof formData.twitterUsername !== "undefined"
    ? `
**Twitter:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.twitterUsername || ""
      }
`
    : ""
}


${
  typeof formData.forumUsername !== "undefined"
    ? `
**Stacks Forum:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.forumUsername || ""
      }
`
    : ""
}

${
  typeof formData.stxAddress !== "undefined"
    ? `
**STX Address:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.stxAddress || ""
      }
`
    : ""
}

${
  typeof formData.stxMemo !== "undefined"
    ? `
**STX Memo:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.stxMemo || ""
      }
`
    : ""
}


# PROJECT BASICS


**Project Name:**&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectTitle || ""
  }

**Project Budget:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectBudget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ||
    ""
  }

**Project Duration:**hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectDuration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ||
    ""
  }

**Funding Stream:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${fundingStream}

**Project Type:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectType || ""
  }

**Project Track:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectTrack || ""
  }

**Project Goal:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectGoal || ""
  }

**Project Audience:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectAudience || ""
  }

**Specific Audience:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.specificAudience || ""
  }

${
  typeof formData.projectTeam !== "undefined"
    ? `
**Project Team:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.projectTeam || ""
      }
`
    : ""
}

${
  typeof formData.previousGrant !== "undefined"
    ? `
**Previous Grants:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.previousGrant}
`
    : ""
}

${
  typeof formData.otherEcosystemPrograms !== "undefined"
    ? `
**Ecosystem Programs:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.otherEcosystemPrograms}
`
    : ""
}

# PROJECT MISSION, IMPACT, RISKS & REFERENCE

**Project Mission:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectMission || ""
  }

**Project Impact:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectImpact || ""
  }

**Project Risks:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.projectRisks || ""
  }

${
  typeof formData.referenceLink !== "undefined"
    ? `
**[Project Link:](${
        formData.referenceLink || ""
      })**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.referenceLinkDescription || ""
      }
`
    : ""
}

# PROJECT ROADMAP & DELIVERABLES


${
  typeof formData.milestone1Deliverable !== "undefined"
    ? `
**MILESTONE 1:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone1Deliverable}
`
    : ""
}

${
  typeof formData.milestone2Deliverable !== "undefined"
    ? `
**MILESTONE 2:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone2Deliverable}
`
    : ""
}

${
  typeof formData.milestone3Deliverable !== "undefined"
    ? `
**MILESTONE 3:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone3Deliverable}
`
    : ""
}


${
  typeof formData.milestone4Deliverable !== "undefined"
    ? `
**MILESTONE 4:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone4Deliverable}
`
    : ""
}


${
  typeof formData.milestone5Deliverable !== "undefined"
    ? `
**MILESTONE 5:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone5Deliverable}
`
    : ""
}


${
  typeof formData.milestone6Deliverable !== "undefined"
    ? `
**MILESTONE 6:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone6Deliverable}
`
    : ""
}


${
  typeof formData.milestone7Deliverable !== "undefined"
    ? `
**MILESTONE 7:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone7Deliverable}
`
    : ""
}


${
  typeof formData.milestone8Deliverable !== "undefined"
    ? `
**MILESTONE 8:**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.milestone8Deliverable}
`
    : ""
}

**FINAL DELIVERABLE**

**Deliverable:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
    formData.finalDeliverable || ""
  }
`;
};

export const templateB = (formData) => `
# APPLICANT

**Type:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
  formData.applicationType || ""
}

${
  typeof formData.email !== "undefined"
    ? `
**Email:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.email || ""
      }
`
    : ""
}

${
  typeof formData.discordUsername !== "undefined"
    ? `
**Discord:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.discordUsername || ""
      }
`
    : ""
}

${
  typeof formData.twitterUsername !== "undefined"
    ? `
**Twitter:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.twitterUsername || ""
      }
`
    : ""
}


${
  typeof formData.forumUsername !== "undefined"
    ? `
**Stacks Forum:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.forumUsername || ""
      }
`
    : ""
}

${
  typeof formData.stxAddress !== "undefined"
    ? `
**STX Address:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.stxAddress || ""
      }
`
    : ""
}

${
  typeof formData.stxMemo !== "undefined"
    ? `
**STX Memo:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.stxMemo || ""
      }
`
    : ""
}

# WISHLIST IDEA

**Idea:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
  formData.wishlistIdea || ""
}
`;

export const templateC = (formData) => `
# APPLICANT

**Type:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
  formData.applicationType || ""
}

${
  typeof formData.email !== "undefined"
    ? `
**Email:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.email || ""
      }
`
    : ""
}

${
  typeof formData.discordUsername !== "undefined"
    ? `
**Discord:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.discordUsername || ""
      }
`
    : ""
}

${
  typeof formData.twitterUsername !== "undefined"
    ? `
**Twitter:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.twitterUsername || ""
      }
`
    : ""
}


${
  typeof formData.forumUsername !== "undefined"
    ? `
**Stacks Forum:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.forumUsername || ""
      }
`
    : ""
}

${
  typeof formData.stxAddress !== "undefined"
    ? `
**STX Address:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.stxAddress || ""
      }
`
    : ""
}

${
  typeof formData.stxMemo !== "undefined"
    ? `
**STX Memo:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.stxMemo || ""
      }
`
    : ""
}

# PROJECT BASICS

${
  typeof formData.wishlistGithub !== "undefined"
    ? `
**Wishlist Link:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.wishlistGithub}
`
    : ""
}


${
  typeof formData.previousGrant !== "undefined"
    ? `
**Previous Grants:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.previousGrant}
`
    : ""
}

${
  typeof formData.otherEcosystemPrograms !== "undefined"
    ? `
**Ecosystem Programs:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${formData.otherEcosystemPrograms}
`
    : ""
}

${
  typeof formData.budgetRevision !== "undefined"
    ? `
**Budget:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.budgetRevision || ""
      }
`
    : ""
}

${
  typeof formData.durationRevision !== "undefined"
    ? `
**Duration:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.durationRevision || ""
      }
`
    : ""
}

${
  typeof formData.projectRevisions !== "undefined"
    ? `
**Other:**&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&hairsp;&thinsp;${
        formData.projectRevisions || ""
      }
`
    : ""
}
`;
