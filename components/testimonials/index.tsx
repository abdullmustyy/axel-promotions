import FiveStar from "@/components/five-star";
import TestimonialCorousel from "@/components/testimonials/testimonial-corousel";
import { cn } from "@/lib/utils";
import SectionHeader from "../section-header";

interface ITestimonialsProps extends React.ComponentProps<"section"> {
    heading: React.ReactNode;
}

const Testimonials = ({ className, heading }: ITestimonialsProps) => {
    return (
        <section className={cn(className)}>
            <div className="w-contain py-20 md:space-y-25 space-y-12.5">
                <SectionHeader tag="Testimonials" heading={heading} />

                <div className="flex md:flex-row flex-col gap-7.5">
                    <div className="md:w-3/10 hidden md:flex flex-col gap-7.5 p-12.5 rounded-xxl bg-primary text-white">
                        <div className="space-y-2.5">
                            <h4 className="font-poppins font-semibold text-[3.125rem] text-center">
                                4.9
                            </h4>
                            <FiveStar className="gap-2" />
                        </div>
                        <div className="space-y-5 text-center">
                            <h5 className="text-2xl font-medium">
                                70+ Reviews
                            </h5>
                            <p className="text-xl text-silver-mist">
                                Great relationships with clients that speak for
                                itself
                            </p>
                        </div>
                    </div>

                    <TestimonialCorousel className="md:w-7/10" />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
