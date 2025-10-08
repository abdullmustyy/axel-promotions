import { cn } from "@/lib/utils";
import Star2 from "@/public/images/svgs/star-2.svg";
import Image from "next/image";

interface ISectionHeader extends React.ComponentProps<"div"> {
    heading: React.ReactNode;
    tag: React.ReactNode;
}

const SectionHeader = ({
    className,
    children,
    heading,
    tag,
}: ISectionHeader) => {
    return (
        <div className={cn("flex flex-col", className)}>
            <div className="space-y-2.5">
                <div
                    data-slot="tag"
                    className="flex items-center justify-center gap-2"
                >
                    <Image src={Star2} alt="" className="md:size-7.5 size-5" />
                    <span className="text-primary md:text-3xl text-base">
                        {tag}
                    </span>
                </div>
                <h2
                    data-slot="heading"
                    className="font-poppins font-medium md:text-[3.125rem]/[60px] text-3xl text-center whitespace-pre-line"
                >
                    {heading}
                </h2>
            </div>

            {children}
        </div>
    );
};

export default SectionHeader;
