const NoCoin = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M5.54879 5.39253C3.85802 7.23422 2.92171 9.64443 2.92579 12.1445C2.92579 17.6675 7.40279 22.1445 12.9258 22.1445C15.3624 22.1484 17.7158 21.2589 19.5408 19.6445M22.2278 15.8225C22.6899 14.6514 22.9267 13.4035 22.9258 12.1445C22.9258 6.62153 18.4488 2.14453 12.9258 2.14453C11.6948 2.14453 10.5158 2.36753 9.42579 2.77453"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.92578 15.1445C10.5698 16.0045 11.7688 16.4945 12.9258 16.5355M12.9258 16.5355C14.0398 16.5755 15.1158 16.1995 15.6228 15.3375M12.9258 16.5355V18.6445M10.4258 9.64453C10.4258 10.8255 11.2778 11.3095 12.3118 11.6445M15.9258 8.64453C15.2408 7.95953 14.0348 7.48353 12.9258 7.45353V5.64453M3.92578 3.14453L21.9258 21.1445"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default NoCoin;
