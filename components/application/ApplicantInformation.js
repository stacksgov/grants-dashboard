import GithubIcon from "../../public/images/github.svg";
import DiscordIcon from "../../public/images/discord.svg";
import TwitterIcon from "../../public/images/twitter.svg";
import Input from "../Input";
import Form from "../Form";
import Container from "../Container";
import TextArea from "../TextArea";

const ApplicantInformation = () => {
  return (
    <Form
      title="Applicant Information"
      description="Before you submit, please tell us a bit about yourself."
    >
      <Container>
        <Input
          name="githubUsername"
          label="GitHub User Name"
          hint="(login username used)"
          image={<GithubIcon />}
          readonly={true}
        />
        <Input
          name="email"
          label="Email"
          hint="(required, will be displayed on Github)"
        />
      </Container>
      <Container>
        <Input
          name="discordUsername"
          label="Discord User Name"
          image={<DiscordIcon />}
        />
        <Input
          name="twitterUsername"
          label="Twitter User Name"
          image={<TwitterIcon />}
        />
        <Input name="forumUsername" label="Stacks Forum User Name" />
      </Container>
      <TextArea
        name="whyTeamIsQualified"
        label="Explain what makes you and your project team (if you plan to work with one) uniquely qualified to execute this project."
        maxchar={300}
        height="100px"
      />
    </Form>
  );
};

export default ApplicantInformation;
