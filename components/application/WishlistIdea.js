import Input from "../Input";
import Form from "../Form";

const WishlistIdea = () => {
  const Fields = () => {
    return (
      <div>
        <Input name="wishlistIdea" maxChar={1500} height="500px" />
      </div>
    );
  };
  return (
    <Form
      title="Wishlist Idea"
      description="Tell us about your Wishlist project idea.  Please emphasize what is new & novel to Stacks and how the Stacks community will benefit from the project and highlight any potential risks the project could create."
      fields={Fields}
    />
  );
};

export default WishlistIdea;
