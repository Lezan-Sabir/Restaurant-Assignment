import { createContext } from "react";

const ModeContext = createContext({ isDark: false, SwitchMode: () => { } });

export default ModeContext;