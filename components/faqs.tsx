import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/home";
import { cn } from "@/lib/utils";

const FAQs = ({ className }: React.ComponentProps<"div">) => {
    return (
        <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className={cn("flex flex-col gap-4.5", className)}
        >
            {faqs.map(({ answer, question }, index) => (
                <AccordionItem
                    key={question + index}
                    value={`item-${index}`}
                    className="bg-snow-haze data-[state=open]:bg-primary"
                >
                    <AccordionTrigger className="text-black data-[state=open]:text-white [&>svg]:text-slate-gray [&[data-state=open]>svg]:text-white">
                        {question}
                    </AccordionTrigger>
                    <AccordionContent className="whitespace-pre-line text-white text-base leading-[140%]">
                        {answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default FAQs;
