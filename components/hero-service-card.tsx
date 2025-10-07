import { cn } from "@/lib/utils";
import InboxImg from "@/public/images/svgs/inbox.svg";
import Image from "next/image";

interface IHeroServiceCard extends React.ComponentProps<"div"> {
    heading: string;
    description: string;
}

const HeroServiceCard = ({
    className,
    description,
    heading,
}: IHeroServiceCard) => {
    return (
        <div
            className={cn(
                "bg-white md:rounded-2xl rounded-xl md:p-5 p-3 shadow-[0px_40.51px_134.26px_-11.57px_#9AA7C140] flex items-center md:gap-5 gap-3",
                className,
            )}
        >
            <div className="md:size-12 size-7.5 grid place-content-center bg-primary rounded-full">
                <Image src={InboxImg} alt="" className="md:size-5 size-3" />
            </div>
            <div className="md:space-y-2 space-y-1 font-urbanist">
                <h6 className="font-semibold md:text-lg text-xs text-primary">
                    {heading}
                </h6>
                <p className="font-medium md:text-xs text-[7.24px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HeroServiceCard;
