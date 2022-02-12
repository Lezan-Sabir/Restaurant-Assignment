import { useContext } from "react"
import ModeContext from "./ModeContext"

const ModeSwitcher = () => {
    const ctx = useContext(ModeContext)
    return (
        <div>
            <h1>{ctx.isDark ? 'DARK MODE' : 'LIGHT MODE'}</h1>
            <button onClick={ctx.toggle}>SWITCH MODE</button>
        </div>
    )
}

export default ModeSwitcher;