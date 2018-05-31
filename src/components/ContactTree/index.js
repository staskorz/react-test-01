import { compose, withState } from "recompose";
import ContactTree from "./ContactTree";

const enhance = compose(withState("selectedItemId", "setSelectedItemId", -1));

export default enhance(ContactTree);
