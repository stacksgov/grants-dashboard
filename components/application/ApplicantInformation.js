import GithubIcon from "../../public/images/github.svg";
import DiscordIcon from "../../public/images/discord.svg";
import TwitterIcon from "../../public/images/twitter.svg";
import Input from "../Input";
import Form from "../Form";

const ApplicantInformation = () => {
  let style = { display: "flex", gap: "20px" };

  const Fields = () => {
    return (
      <div>
        <div style={style}>
          <Input
            name="githubUsername"
            label="GitHub User Name"
            labelSpan="(login username used)"
            pageWidth="half"
            labelSize="12px"
            image={<GithubIcon />}
            readOnly={true}
          />
          <Input
            name="email"
            label="Email *"
            labelSpan="(required, will be displayed on Github)"
            pageWidth="half"
            labelSize="12px"
            paddingBottom="50px"
          />
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "-35px" }}>
          <Input
            name="discordUsername"
            label="Discord User Name"
            pageWidth="third"
            labelSize="12px"
            image={<DiscordIcon />}
          />
          <Input
            name="twitterUsername"
            label="Twitter User Name"
            pageWidth="third"
            labelSize="12px"
            image={<TwitterIcon />}
          />
          <div style={{ paddingTop: "48px" }}>
            <Input
              name="forumUsername"
              label="Stacks Forum User Name"
              pageWidth="third"
              labelSize="12px"
              paddingBottom="50px"
            />
          </div>
        </div>
        <Input
          name="whyTeamIsQualified"
          label="Explain what makes you and your project team (if you plan to work with one) uniquely qualified to execute this project."
          labelSize="12px"
          labelColor="rgba(255, 255, 255, 0.24)"
          maxChar={300}
          height="100px"
        />
      </div>
    );
  };
  return (
    <Form
      title="Applicant Information"
      description="Before you submit, please tell us a bit about yourself."
      fields={Fields}
    />
  );
};

export default ApplicantInformation;
