import { cn } from "@/lib/utils";
import InboxImg from "@/public/images/svgs/inbox.svg";
import * as motion from "motion/react-client";
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
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: ["0rem", "-0.75rem", "0rem"],
            }}
            transition={{
                opacity: { duration: 0.5, ease: "easeOut", delay: 1.2 },
                scale: { duration: 0.5, ease: "easeOut", delay: 1.2 },
                y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                },
            }}
            className={cn(
                "bg-white md:rounded-2xl rounded-xl md:p-5 p-3 shadow-[0px_40.51px_134.26px_-11.57px_#9AA7C140] flex items-center md:gap-5 gap-3",
                className,
            )}
        >
            <div className="md:size-12 size-7.5 grid place-content-center bg-primary rounded-full">
                <Image src={InboxImg} alt="" className="md:size-5 size-3" />
            </div>
            <div className="space-y-1 font-urbanist">
                <h6 className="font-semibold md:text-lg text-xs text-primary">
                    {heading}
                </h6>
                <p className="font-medium md:text-xs text-[7.24px]">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default HeroServiceCard;
