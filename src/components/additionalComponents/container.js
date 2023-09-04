export const Container = ({ children, className }) => {
    return <div className={`px-3 md:px-16 lg:px-[120px] ${className}`}>{children}</div>;
};
