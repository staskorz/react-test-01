import { withHandlers } from "recompose";
import ClickableName from "./ClickableName";

const enhance = withHandlers({
  onClick: ({
    id,
    selectedItemId,
    setSelectedItemId,
    onClick,
    ...rest
  }) => () => {
    id !== selectedItemId && setSelectedItemId(id);

    onClick && onClick({ id, ...rest });
  }
});

export default enhance(ClickableName);
