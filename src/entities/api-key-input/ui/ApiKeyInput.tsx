import {useState} from "react";

export const ApiKeyInput = () => {

    const store = localStorage.getItem("apiKey")

    const [input, setInput] =
        useState({
            value: store ? store : "",
            isLocalStorage: !!store,
            editMode: false
        })

    const saveApiKey = () => {
        localStorage.setItem("apiKey", input.value)
        alert("Ключ для запросов добавлен, перезагрузить страницу?")
        location.reload()
    }

    return <>
        <div className="input-group mb-3">
            <input onChange={(e) => setInput({
                value: e.target.value,
                isLocalStorage: false,
                editMode: false
            })} value={input.value}
                   type="text"
                   disabled={input.isLocalStorage}
                   className="form-control"
                   placeholder="Добавьте свой apiKey"
                   aria-label="Recipient's username" aria-describedby="button-addon2"/>
            {input.isLocalStorage ?
                <button onClick={() => {
                    setInput({
                        value: "",
                        isLocalStorage: false,
                        editMode: true
                    })
                    localStorage.removeItem("apiKey")
                }}
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2">Изменить
                </button> :
                <button onClick={saveApiKey} disabled={input.value === ""} className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2">Сохранить
                </button>}
        </div>
    </>
}