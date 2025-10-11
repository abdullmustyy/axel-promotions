const Inbox = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...rest}>
            <path d="M2 8.5L12.5 15.5L23 8.5M7.5 18.5H2C1.44772 18.5 1 18.0523 1 17.5V3.5C1 2.94772 1.44772 2.5 2 2.5H23C23.5523 2.5 24 2.94772 24 3.5V17.5C24 18.0523 23.5523 18.5 23 18.5H17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 18.5H17.5V21.5C17.5 22.6046 16.6046 23.5 15.5 23.5H9.5C8.39543 23.5 7.5 22.6046 7.5 21.5V18.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default Inbox;