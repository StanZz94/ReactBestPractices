import { useAccordionContext } from "./Accordion"

export default function AccordionTitle({ children, id }) {

    const { toggleItem } = useAccordionContext();

    function handleClick() {
        toggleItem(id);
    }

    return <h3 onClick={handleClick}>{children}</h3>
}