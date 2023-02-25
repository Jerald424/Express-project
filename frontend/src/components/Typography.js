import { useSelector } from "react-redux"

const Para = ({ children, style, props, className = "" }) => {
    const { colors } = useSelector(state => state.theme)
    return (
        <p className={`m-0 ${className}`} style={{ ...style, fontWeight: "light", color: colors?.textSecondary }} {...props}>{children}</p>
    )
}

const SubHeading = ({ children, style, props, className = "" }) => {
    const { colors } = useSelector(state => state.theme)
    return (
        <h5 className={`m-0 ${className}`} style={{ ...style, fontWeight: "bold", color: colors?.subHeading }} {...props}>{children}</h5>
    )
}

const HeadingText = ({ children, style, props, className = "" }) => {
    const { colors } = useSelector(state => state.theme)
    return (
        <h3 className={`m-0 ${className}`} style={{ ...style, fontWeight: "bold", color: colors?.heading }} {...props}>{children}</h3>
    )
}

export { Para, SubHeading, HeadingText };