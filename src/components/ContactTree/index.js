import { compose, withState } from "recompose";
import ContactTree from "./ContactTree";

const enhance = compose(
  withState("selectedItemId", "setSelectedItemId", -1),
  withState("expandedGroupIds", "setExpandedGroupIds", [])
);

export default enhance(ContactTree);
