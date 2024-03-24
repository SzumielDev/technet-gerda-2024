export const Text = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-black dark:text-white">
            {children}
        </p>
    )
}