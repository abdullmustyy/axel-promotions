import { brands } from "@/lib/data";
import Image from "next/image";

const JoinBrands = () => {
    return (
        <section className="container space-y-6">
            <p className="text-2xl text-[#F58B3B] font-medium font-poppins text-center">
                Join the brands who are scaling with Axel Promotions
            </p>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 items-center justify-items-center md:gap-8 gap-10">
                {brands.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt=""
                        className="md:last:col-span-1 last:col-span-2"
                    />
                ))}
            </div>
        </section>
    );
};

export default JoinBrands;
