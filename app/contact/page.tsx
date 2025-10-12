"use client";

import ControlledFieldWrapper from "@/components/controlled-fields/field-wrapper";
import Star from "@/components/icons/star";
import { Button } from "@/components/ui/button";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string("Please enter your name.").min(1, "Please enter your name."),
    email: z.email("Please enter a valid email address."),
    companyName: z
        .string("Please enter your company name.")
        .min(1, "Please enter your company name."),
    country: z
        .string("Please select a country.")
        .min(1, "Please select a country."),
    message: z
        .string("Please enter your message.")
        .min(1, "Please enter your message."),
});

type contactFormType = z.infer<typeof contactSchema>;

const Contact = () => {
    const form = useForm<contactFormType>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            companyName: "",
            name: "",
            email: "",
            country: "",
            message: "",
        },
    });

    function onSubmit(values: contactFormType) {
        console.log(values);
    }

    return (
        <main className="md:py-25 py-15 lg:px-0 px-4 flex flex-col items-center xl:gap-10 md:gap-5 gap-15 md:bg-[url('@/public/images/pngs/contact-bg.png')] bg-no-repeat bg-top bg-size-[100%_auto]">
            <div className="md:space-y-7.5 space-y-2 text-center">
                <div className="md:hidden flex items-center justify-center gap-2 text-primary mb-4">
                    <Star className="size-5" />
                    <span className="text-base">Contact Us</span>
                </div>

                <h2 className="md:text-[3.5rem] text-3xl leading-17 font-semibold md:text-white">
                    Contact our sales team
                </h2>
                <p className="md:text-3xl text-xl md:text-white text-accent">
                    If you need our help, have question about how to use our
                    platform
                    <br className="md-br" /> or are experiencing technical
                    difficulties, please do not hesitate to
                    <br className="md-br" /> contact us
                </p>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="md:w-[66%] min-h-dvh bg-white md:p-8"
                >
                    <div className="grid md:grid-cols-2 items-start gap-8">
                        <ControlledFieldWrapper
                            control={form.control}
                            name="name"
                            label="Your name*"
                            className="[&_[data-slot='form-label']]:text-base [&_[data-slot='form-label']]:text-[#5A7184] [&_[data-slot='form-message']]:text-primary"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Your name"
                                    className="focus-visible:ring-0 h-14 border-[#C3CAD9] focus-visible:border-[#C3CAD9] placeholder:text-[#959EAD] placeholder:text-base text-base caret-primary aria-invalid:border-primary"
                                />
                            )}
                        />
                        <ControlledFieldWrapper
                            control={form.control}
                            name="email"
                            label="Contact email*"
                            className="[&_[data-slot='form-label']]:text-base [&_[data-slot='form-label']]:text-[#5A7184] [&_[data-slot='form-message']]:text-primary"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="you@example.com"
                                    className="focus-visible:ring-0 h-14 border-[#C3CAD9] focus-visible:border-[#C3CAD9] placeholder:text-[#959EAD] placeholder:text-base text-base caret-primary aria-invalid:border-primary"
                                />
                            )}
                        />
                        <ControlledFieldWrapper
                            control={form.control}
                            name="companyName"
                            label="Company name*"
                            className="[&_[data-slot='form-label']]:text-base [&_[data-slot='form-label']]:text-[#5A7184] [&_[data-slot='form-message']]:text-primary"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Company name"
                                    className="focus-visible:ring-0 h-14 border-[#C3CAD9] focus-visible:border-[#C3CAD9] placeholder:text-[#959EAD] placeholder:text-base text-base caret-primary aria-invalid:border-primary"
                                />
                            )}
                        />
                        <ControlledFieldWrapper
                            control={form.control}
                            name="country"
                            label="Country*"
                            className="[&_[data-slot='form-label']]:text-base [&_[data-slot='form-label']]:text-[#5A7184] [&_[data-slot='form-message']]:text-primary relative"
                            render={({ field }) => (
                                <CountryDropdown
                                    placeholder="Your country"
                                    defaultValue={field.value}
                                    onChange={(country) => {
                                        field.onChange(country.alpha3);
                                    }}
                                />
                            )}
                        />
                        <ControlledFieldWrapper
                            control={form.control}
                            name="message"
                            label="Your message*"
                            className="md:col-span-2 [&_[data-slot='form-label']]:text-base [&_[data-slot='form-label']]:text-[#5A7184] [&_[data-slot='form-message']]:text-primary"
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    placeholder="Type your message…."
                                    className="resize-none h-34.5 focus-visible:ring-0 border-[#C3CAD9] focus-visible:border-[#C3CAD9] placeholder:text-[#959EAD] placeholder:text-base text-base caret-primary aria-invalid:border-primary"
                                />
                            )}
                        />
                    </div>

                    <p className="text-[#5A7184] mt-4 md:text-left text-center">
                        By submitting this form you agree to our terms and
                        conditions and our Privacy Policy which explains how we
                        may collect, use and disclose your personal information
                        including third parties.
                    </p>

                    <Button
                        type="submit"
                        className="text-base mt-10 h-12 md:w-fit w-full"
                    >
                        Contact sales
                    </Button>
                </form>
            </Form>
        </main>
    );
};

export default Contact;
