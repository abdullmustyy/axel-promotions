const NoSchedule = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...rest}>
            <path d="M1 1L24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.5 19.5L17.5 17.5M5.5 9.5H9.5V5.5M10.5 14.5C10.5 15.8807 11.6193 17 13 17C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12C11.6193 12 10.5 13.1193 10.5 14.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.5 14.5C21.5 18.366 18.366 21.5 14.5 21.5C12.5841 21.5 10.8314 20.7015 9.5 19.5M3.5 14.5C3.5 10.634 6.63401 7.5 10.5 7.5C11.5334 7.5 12.5034 7.72432 13.366 8.13802" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default NoSchedule;