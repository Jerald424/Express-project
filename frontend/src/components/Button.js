export default function Button({ children, variant = "primary", isLoading = false, size = "sm", className = "" }) {
    return (
        <button className={`btn btn-${variant} dajc btn-${size} ${className}`}>
            {
                isLoading && <div class="spinner-border  spinner-border-sm me-2" role="status" />

            }
            {children}
        </button>
    )
}