import Loader from "./Loader";

export default function Container({ children, isLoading, style }) {
    return (
        <div style={style}>
            {
                isLoading &&
                <Loader />
            }
            {children}
        </div>
    )
}