import TextArea from "../TextArea";
import Form from "../Form";

const WishlistIdea = () => {
  return (
    <Form
      title="Wishlist Idea"
      description="Tell us about your Wishlist project idea.  Please emphasize what is new & novel to Stacks and how the Stacks community will benefit from the project and highlight any potential risks the project could create."
    >
      <TextArea name="wishlistIdea" maxchar={1500} height="500px" />
    </Form>
  );
};

export default WishlistIdea;
