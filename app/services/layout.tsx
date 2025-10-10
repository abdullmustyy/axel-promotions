import PageHeader from "@/components/page-header";
import React from "react";

const ServicesLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main>
            {/* ---------------------  Header  --------------------- */}
            <PageHeader page="Our Services" />
            {children}
        </main>
    );
};

export default ServicesLayout;
