import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

export default function AccordionItem({ id, children, className, title }) {

    return (
        <li className={className}>
            <AccordionTitle id={id}>{title}</AccordionTitle>

            <AccordionContent id={id}>{children}</AccordionContent>
        </li>
    )
}