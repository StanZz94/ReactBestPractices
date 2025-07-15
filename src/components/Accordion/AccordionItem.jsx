import { useAccordionContext } from "./Accordion"
import AccordionTitle from "./AccordionTitle";

export default function AccordionItem({ id, children, className, title }) {

    const {openItemId, toggleItem} = useAccordionContext();
    const isOpen = openItemId === id;

    function handleClick() {
        toggleItem(id);
    }
    return (
        <li className={className}>
            <AccordionTitle>{title}</AccordionTitle>

            <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'}>
                {children}
            </div>
        </li>
    )
}