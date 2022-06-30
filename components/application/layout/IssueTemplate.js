const IssueTemplate = (issue) => {
	console.log('ISSUE', issue);
	console.log('selected values ', selectedValues);

	// let selectedValues = issue.filter((val) => console.log('VALL', val));

	let selectedValues = Object.keys(issue).map((key) => console.log(issue[key].length));

	console.log('selected values before: ', selectedValues);

	selectedValues = selectedValues.filter((e) => e);

	console.log('selected values after: ', selectedValues);

	let template = `
    
    # PROJECT BASICS

    **Project Name:** ${issue.name}
    **Project Budget:** ${issue.budget}
    **Project Duration:** ${issue.duration}
    **Funding Stream:** ${selectedValues[0]}
    **Project Type:** ${selectedValues[1]}
    **Project Track:** ${selectedValues[2]}
    **Project Goal:** ${selectedValues[3]}
    **Project Audience:** ${selectedValues[4]}
    **Project Openness:** ${selectedValues[5]}


    ## This line will be converted into an H2 tag.

    _This is an example of a line of text rendered in italics_

    [This is text to be rendered into a link](url)

    `;

	console.log('template ', template);

	return template;
};

export default IssueTemplate;
