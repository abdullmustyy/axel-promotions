const ChartColumnLow = ({
    className,
    ...rest
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M7.75 4.82031C12.219 12.2727 21.855 14.8048 27.125 15.1539"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25.8335 11.2773L27.125 15.1523L23.25 17.7353"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24.5415 22.9023H28.4165V28.0688H24.5415V22.9023ZM14.2085 28.0688H18.0835V20.3188H14.2085V28.0688ZM3.875 28.0688H7.75V15.1523H3.875V28.0688Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChartColumnLow;
