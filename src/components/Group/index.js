import { withHandlers } from "recompose";
import Group from "./Group";

const enhance = withHandlers({
  onClick: ({ id, expandedGroupIds, setExpandedGroupIds }) => () => {
    if (expandedGroupIds.includes(id)) {
      setExpandedGroupIds(
        expandedGroupIds.filter(existingId => id !== existingId)
      );
    } else {
      setExpandedGroupIds([...expandedGroupIds, id]);
    }
  }
});

export default enhance(Group);
