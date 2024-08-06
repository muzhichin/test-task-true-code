import {useContext} from "react";
import {ctxCardsRequest} from "../../../widgets/cards/config/cardsRequestContext.ts";
import {SortRealTimePrice} from "../../../widgets/cards/config/types.ts";

export const CardSelect = () => {
    const {setSort} = useContext(ctxCardsRequest)

    return <>
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="standard-select">Сортировать по:</label>
                <select className="form-select form-select-sm" defaultValue={""} onChange={(event) => setSort(event.target.value as SortRealTimePrice)}>
                    <option disabled value="">----</option>
                    <option value="bidPrice">Bit Price</option>
                    <option value="-bidPrice">-Bit Price</option>
                    <option value="lastUpdated">Last Updated</option>
                    <option value="-lastUpdated">-Last Updated</option>
                </select>
            </div>
    </>
}