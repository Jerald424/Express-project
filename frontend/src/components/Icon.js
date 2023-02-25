import { IoMdSwap } from 'react-icons/io';
import { useSelector } from 'react-redux';

export default function Icon({ src: Src, style, size = 20, className = "", ...props }) {
    const { colors } = useSelector(state => state.theme)
    return (
        <Src style={{ ...style, height: size, width: size, color: colors?.iconColor, cursor: "pointer" }} {...props} />
    )
}