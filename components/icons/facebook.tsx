const Facebook = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M17.4609 9.44531C17.4609 5.30531 14.1009 1.94531 9.96094 1.94531C5.82094 1.94531 2.46094 5.30531 2.46094 9.44531C2.46094 13.0753 5.04094 16.0978 8.46094 16.7953V11.6953H6.96094V9.44531H8.46094V7.57031C8.46094 6.12281 9.63844 4.94531 11.0859 4.94531H12.9609V7.19531H11.4609C11.0484 7.19531 10.7109 7.53281 10.7109 7.94531V9.44531H12.9609V11.6953H10.7109V16.9078C14.4984 16.5328 17.4609 13.3378 17.4609 9.44531Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default Facebook;
