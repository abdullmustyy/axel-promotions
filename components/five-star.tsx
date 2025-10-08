import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const FiveStar = ({ className }: React.ComponentProps<"div">) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} className="text-[#FFD407] fill-[#FFD407]" />
            ))}
        </div>
    );
};

export default FiveStar;
