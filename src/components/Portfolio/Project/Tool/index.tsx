// import interface for tool
import { ToolItem } from "../../../../utils/interfaces";

// import styled components
import { ToolBubble } from "./styles";

// create interface for props
interface ToolProps {
	info: ToolItem;
}

const Tool: React.FC<ToolProps> = ({ info }) => {
	return <ToolBubble>{info.name}</ToolBubble>;
};

export default Tool;
