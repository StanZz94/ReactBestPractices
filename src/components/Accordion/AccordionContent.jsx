import { useAccordionContext } from "./Accordion";

export default function AccordionContent({ children, id }) {

    const { openItemId } = useAccordionContext();
    const isOpen = openItemId === id;

    return <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'}>
        {children}
    </div>
}