const NoSales = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...rest}>
            <path d="M1 1L24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 8.5C7.96667 9.03333 7.5 9.66667 7.5 10.5C7.5 12.1667 8.83333 13.5 10.5 13.5C11.3333 13.5 12 13.0333 12.5 12.5M10.5 10.5L12.5 8.5M16.5 16.5C17.0333 15.9667 17.5 15.3333 17.5 14.5C17.5 12.8333 16.1667 11.5 14.5 11.5C13.6667 11.5 13 11.9667 12.5 12.5M14.5 14.5L12.5 12.5M12.5 12.5L10.5 10.5M21.5 14.5C21.5 18.3667 18.3667 21.5 14.5 21.5C10.6333 21.5 7.5 18.3667 7.5 14.5C7.5 13 7.83333 11.5 8.5 10.5M16.5 8.5C18.1667 9.16667 19.5 10.5 20.1667 12.1667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default NoSales;