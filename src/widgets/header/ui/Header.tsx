import style from "./style.module.scss"
import {useContext} from "react";
import {ctxTheme} from "../../../processes/themeContext.ts";
import {ThemeSwitcher} from "../../../shared/ui/theme-switcher";

export function Header() {

    const {toggleTheme, currentTheme} = useContext(ctxTheme)

    return (
        <header className={style.Header}>
            <div className="row">
                <div className="col-12 justify-content-center d-flex">
                    <h1 className={style.Title}>
                        Список акций на бирже
                    </h1>
                </div>
                <div className={"col-auto" + " " + style.SwitcherWrapper}>
                    <ThemeSwitcher checked={currentTheme === "dark-theme"} onClick={toggleTheme}/>
                </div>
            </div>
        </header>
    )
}