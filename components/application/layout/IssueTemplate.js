const IssueTemplate = (issue) => {
  console.log("ISSUE", issue);
  console.log("selected values ", selectedValues);

  // let selectedValues = issue.filter((val) => console.log('VALL', val));

  let selectedValues = Object.keys(issue).map((key) => {
    console.log("CHOICE:", issue[key]);
    return issue[key]?.choice;
  });

  console.log("selected values before: ", selectedValues);

  selectedValues = selectedValues.filter((e) => e);

  console.log("selected values after: ", selectedValues);
  console.log("ISSSUEEEEEE ", issue);

  let template = `# PROJECT BASICS
  **Project Name:** ${issue.name}
  **Project Budget:** ${issue.budget}
  **Project Duration:** ${issue.duration}
  **Funding Stream:** ${selectedValues[0]}
  **Project Type:** ${selectedValues[1]}
  **Project Track:** ${selectedValues[2]}
  **Project Goal:** ${selectedValues[3]}
  **Project Audience:** ${selectedValues[4]}
  **Project Openness:** ${selectedValues[5]}
  **Project Team Members:** ${issue.team}
  
  # PROJECT ROADMAP & DELIVERABLES
  **Final Deliverable:** ${issue.final}
  **Milestone Deliverable 1:** ${issue.milestoneOne}
  
  # PROJECT MISSION & LINKS
  
  **[${issue.firstLink}](url):** ${issue.firstLinkDescription}
  **[${issue.secondLink}](url):** ${issue.secondLinkDescription}
  **Project Mission:** ${issue.mission}
  `;

  console.log("template ", template);

  return template;
};

export default IssueTemplate;
