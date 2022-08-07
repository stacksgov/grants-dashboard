import TextArea from "../TextArea";
import Form from "../Form";

const WishlistIdea = () => {
  return (
    <Form
      title="Wishlist Idea"
      description="Tell us about your Wishlist grant idea.  Please emphasize what is new & novel to Stacks and how the Stacks community will benefit from the grant and highlight any potential risks the grant could create."
    >
      <TextArea name="wishlistIdea" maxchar={1500} height="500px" />
    </Form>
  );
};

export default WishlistIdea;
