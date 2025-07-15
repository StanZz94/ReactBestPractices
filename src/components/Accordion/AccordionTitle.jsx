import { useAccordionContext } from "./Accordion"

export default function AccordionTitle({ children, className, id }) {

    const { toggleItem } = useAccordionContext();

    function handleClick() {
        toggleItem(id);
    }

    return <h3 className={className} onClick={handleClick}>{children}</h3>
}