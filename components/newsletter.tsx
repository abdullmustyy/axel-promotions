"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SectionHeader from "./section-header";

import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const newsletterSchema = z.object({
    email: z.email("Please enter a valid email address."),
});
type newsletterFormType = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
    const form = useForm<newsletterFormType>({
        resolver: zodResolver(newsletterSchema),
    });

    function onSubmit(values: newsletterFormType) {
        console.log(values);
    }

    return (
        <div className="bg-[url('@/public/images/pngs/wavy-vector-newsletter.png'),linear-gradient(0deg,#F07119,#F07119)] bg-no-repeat md:bg-position-[center_65%] bg-bottom flex justify-center md:px-0 px-4 md:py-26.5 py-15">
            <SectionHeader
                tag="Newsletter"
                heading={
                    <span>
                        Subscribe for
                        <br className="md:hidden" /> digital growth
                        <br className="md-br" /> tips & updates
                    </span>
                }
                className="gap-12.5 [&_[data-slot='tag']]:text-white [&_[data-slot='heading']]:text-white"
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex items-start gap-2.5"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter email address"
                                            className="focus-visible:ring-0 h-16 bg-snow-haze rounded-xxl border-cloud-gray focus-visible:border-cloud-gray placeholder:text-black/30 md:placeholder:text-xl placeholder:text-base md:text-xl text-base caret-primary pl-5"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-snow-haze" />
                                </FormItem>
                            )}
                        />
                        <Button
                            variant="accent"
                            size="lg"
                            type="submit"
                            className="md:text-xl text-base"
                        >
                            Subscribe
                        </Button>
                    </form>
                </Form>
            </SectionHeader>
        </div>
    );
};

export default Newsletter;
