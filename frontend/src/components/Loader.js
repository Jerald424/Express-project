import { useSelector } from "react-redux"

export default function Loader() {
    const { colors } = useSelector(s => s.theme)
    return <div className="loader-container">
        <div class="spinner-border " style={{ color: colors?.iconColor }} role="status" />
    </div>

}