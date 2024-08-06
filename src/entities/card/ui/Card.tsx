import styles from "./style.module.scss"
import {useEffect, useState} from "react";
import {IFullRealTimePrice} from "../../../widgets/cards/config/types";
// import stub from "../api/stub.ts";
import {IFullQuote} from "../api/types.ts";
import {apiFullQuote} from "../api/fullQuote.ts";

export const Card = ({bidPrice, symbol, lastUpdated}:
                         Pick<IFullRealTimePrice, 'bidPrice' | 'symbol' | 'lastUpdated'>) => {

    const [fullQuote, setFullQuote] = useState<null | IFullQuote>(null)

    useEffect(() => {

        const controller = new AbortController();

        const request = async () => {
            const data = await apiFullQuote(symbol, controller)
            // const data = stub as [IFullQuote]
            setFullQuote(data[0])
        }

        request()

        const timer = setInterval(request, 30000);

        return () => {
            controller.abort()
            clearInterval(timer)
        }

    }, [symbol])

    return <div className={styles.Card}>
        <div className="row justify-content-between">
            <div className="col-auto">
                <b>
                    Company name
                </b>
            </div>
            <div className="col-auto">
                <span>{fullQuote ? fullQuote.name : "-"}</span>
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col-auto">
                <b>
                    Changes Percentage
                </b>
            </div>
            <div className="col-auto">
                <span>{fullQuote ? fullQuote.changesPercentage : "-"}</span>
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col-auto">
                <b>
                    Last Updated
                </b>
            </div>
            <div className="col-auto">
                <span>{new Date(lastUpdated).toLocaleString()}</span>
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col-auto">
                <b>
                    Symbol
                </b>
            </div>
            <div className="col-auto">
                <span>{symbol}</span>
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col-auto">
                <b>
                    Bid Price/Quote Price
                </b>
            </div>
            <div className="col-auto">
                <span>{fullQuote?.price || bidPrice}</span>
            </div>
        </div>
    </div>
}