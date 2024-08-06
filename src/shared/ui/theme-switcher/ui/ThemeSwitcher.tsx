import style from "./style.module.scss"

export const ThemeSwitcher = ({onClick, checked}: { onClick: () => void, checked: boolean }) => {

    return <>
        <div className={style.SwitchToggle}>
            <div className={style.ButtonCheck}>
                <input checked={checked} onChange={onClick} type="checkbox" className={style.Checkbox}/>
                <span className={style.SwitchBtn}></span>
                <span className={style.Layer}></span>
            </div>
        </div>
    </>
}