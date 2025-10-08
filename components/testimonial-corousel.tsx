import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Quotes from "@/public/images/svgs/quotes.svg";
import Image from "next/image";
import FiveStar from "./five-star";

const TestimonialCorousel = ({
    className,
}: React.ComponentProps<typeof Carousel>) => {
    return (
        <Carousel
            opts={{
                loop: true,
            }}
            className={cn(
                "[&_[data-slot='carousel-content']]:h-full",
                className,
            )}
        >
            <CarouselContent className="h-full">
                {Array.from({ length: 5 }, (_, index) => (
                    <CarouselItem key={index}>
                        <div className="relative h-full bg-[#F9F9F9] rounded-xxl p-7.5 flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <FiveStar className="gap-1.5 [&_svg]:size-5" />
                                <span className="font-poppins font-medium text-xl">
                                    5.0
                                </span>
                            </div>

                            <div className="flex flex-col h-full justify-between gap-7.5">
                                <div className="space-y-7.5">
                                    <p>
                                        &quot;When we first connected with Axcel
                                        Promotion, I&apos;ll be honest — I
                                        thought we just needed better ad
                                        creatives. Our sales had plateaued, and
                                        I figured some flashy content might give
                                        us a boost. But in our very first
                                        strategy call, they made it clear: the
                                        problem wasn&apos;t just our visuals —
                                        it was the full funnel.&quot;
                                    </p>
                                    <p>
                                        &quot;They did a full audit of our brand
                                        messaging, offer positioning, customer
                                        journey, and even backend email flows.&quot;
                                    </p>
                                </div>

                                <div className="space-y-1 font-poppins">
                                    <h5 className="font-medium text-xl">
                                        Dami A
                                    </h5>
                                    <span className="text-[#A2A2A2]">
                                        Founder of Vinta Skin Co.
                                    </span>
                                </div>
                            </div>

                            <Image
                                src={Quotes}
                                alt=""
                                className="absolute -top-15 -right-7.5"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="absolute bottom-7.5 right-7.5 flex items-center gap-5">
                <CarouselPrevious className="static -translate-y-0 size-10 bg-primary hover:bg-primary/90 text-white hover:text-white" />
                <CarouselNext className="static -translate-y-0 size-10 bg-primary hover:bg-primary/90 text-white hover:text-white" />
            </div>
        </Carousel>
    );
};

export default TestimonialCorousel;
