const IssueTemplate = (issue) => {
  // let selectedValues = issue.filter((val) => console.log('VALL', val));

  let selectedValues = Object.keys(issue).map((key) => {
    return issue[key]?.choice;
  });

  selectedValues = selectedValues.filter((e) => e);

  // let template = `# PROJECT BASICS
  // **Grant Name:** ${issue.name}
  // **Grant Budget:** ${issue.budget}
  // **Grant Duration:** ${issue.duration}
  // **Funding Stream:** ${selectedValues[0]}
  // **Grant Type:** ${selectedValues[1]}
  // **Grant Track:** ${selectedValues[2]}
  // **Grant Goal:** ${selectedValues[3]}
  // **Grant Audience:** ${selectedValues[4]}
  // **Grant Team Members:** ${issue.team}

  // # PROJECT ROADMAP & DELIVERABLES
  // **Final Deliverable:** ${issue.final}
  // **Milestone Deliverable 1:** ${issue.milestoneOne}

  // # PROJECT MISSION & LINKS

  // **[${issue.firstLink}](url):** ${issue.firstLinkDescription}
  // **[${issue.secondLink}](url):** ${issue.secondLinkDescription}
  // **Grant Mission:** ${issue.mission}
  // `;

  let template = `
  
# PROJECT BASICS

**Grant Name:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;IIIIIThirty Character Long Grant Name

**Grant Budget:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&thinsp;IIIIINumber of $USD

**Grant Duration:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&thinsp;IIIIINumber of Hours

**Funding Stream:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&thinsp;IIIIIDeveloper Grant

**Grant Type:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&#8202;&thinsp;IIIIIOpen Source Starter Grant

**Grant Track:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&#8202;&thinsp;IIIIIStacks Protocol

**Grant Goal:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&thinsp;IIIIIImprove Existing Technology

**Grant Audience:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&#8202;&thinsp;IIIIIDevelopers

**Specific Audience:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;IIIIIVdkfhvdjkfvnl;dfnvldnvofd

**Grant Team Members:**&#8202;&#8202;&#8202;&thinsp;IIIII??????

**Previous Grants:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8202;&thinsp;IIIIILink to Issue

**Ecosystem Programs:** &nbsp;&nbsp;&nbsp;&#8202;&#8202;&#8202;&thinsp;IIIII80 Character Description - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.


# PROJECT MISSION, IMPACT, RISKS & REFERENCE

**Grant Mission:** &nbsp;&nbsp;&nbsp;&thinsp;IIIII1,296 Grant Mission Statement -- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.

Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.

Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis m

**Grant Impact:** &nbsp;&nbsp;&nbsp;&thinsp;IIIII1,296 Grant Mission Statement -- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.

**Grant Risks:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;IIIII1,296 Grant Mission Statement -- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.

**[Support Link:](link)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;IIIII1,296 Grant Mission Statement -- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.

# PROJECT ROADMAP & DELIVERABLES
**MILESTONE {number}:**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;IIIII1,296 Grant Mission Statement -- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

**Acceptance Criteria:** &thinsp;IIIII1,296 Grant Mission Statement -- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

**FINAL DELIVERABLE**

**Deliverable:** &nbsp;&nbsp;&nbsp;&thinsp;IIIII1,296 Grant Mission Statement -- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

**Acceptance Criteria:** &thinsp;IIIII1,296 Grant Mission Statement -- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 


**
  `;

  let csv = {};
  const regex = /(?<=&thinsp;)([\s\S]*?)(?=\*\*)/g;
  const lines = template
    .match(regex)
    .map((line) => line.replace("\n", "").replace("\n", "").trim());

  // when parsing values we need to add a double ** to the end of the template so we can parse final value. Can remove this after
  csv.projectName = lines[0];
  csv.projectBudget = lines[1];
  csv.projectDuration = lines[2];
  csv.fundingStream = lines[3];
  csv.projectType = lines[4];
  csv.projectTrack = lines[5];
  csv.projectGoal = lines[6];
  csv.projectAudience = lines[7];
  csv.specificAudience = lines[8];
  csv.projectTeamMembers = lines[10];
  csv.previousGrants = lines[11];
  csv.ecosystemPrograms = lines[12];
  csv.projectMission = lines[13];

  return template;
};

export default IssueTemplate;
