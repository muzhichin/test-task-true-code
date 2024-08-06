import axios, {AxiosResponse} from "axios";
import {IFullRealTimePrice} from "../config/types.ts";

const urlRequest =
    "https://financialmodelingprep.com/api/v3/stock/full/real-time-price?apikey=8642EySRM9pClNI3TWzeJj8RRyJxjWMN"


export const apiStockFullRealTimePrice = async () => {
    const response: AxiosResponse<Array<IFullRealTimePrice>> = await axios.get(urlRequest);
    return response.data
}