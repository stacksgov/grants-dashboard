import Input from "../Input";
import Form from "../Form";

const ProjectUserInfoCTwo = () => {
  const Fields = () => {
    return (
      <div>
        <Input
          name="wishlistTeamFit"
          label="Explain what makes you and your project team (if you plan to work with one) uniquely qualified to execute this Wishlist project."
          labelSize="12px"
          labelColor="rgba(255, 255, 255, 0.24)"
          maxchar={400}
          height="100px"
        />
      </div>
    );
  };
  return (
    <Form
      title="User Information (2 of 2)"
      description="Tell us a bit about yourself."
      fields={Fields}
    />
  );
};

export default ProjectUserInfoCTwo;
