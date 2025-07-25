import { useAccordionContext } from "./Accordion"
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ children, className }) {

    const { toggleItem } = useAccordionContext();
    const id = useAccordionItemContext();

    function handleClick() {
        toggleItem(id);
    }

    return <h3 className={className} onClick={handleClick}>{children}</h3>
}