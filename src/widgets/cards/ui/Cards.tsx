import {Card} from "../../../entities/card";
import {useContext} from "react";
import {ctxCardsRequest} from "../config/cardsRequestContext.ts";
import {Spinner} from "../../../shared/ui/spinner";
import {Pagination} from "../../../shared/ui/pagination";

export const Cards = () => {

    const {data, pages, currentPage, setPage, loading} = useContext(ctxCardsRequest)

    return <>
        <div data-disabled={loading} className="container-fluid">
            {data ? <div className="row mb-4">
                    {data.map((item) => <div key={item.symbol} className="col-lg-3 col-md-4 col-xs-1 mb-3">
                        <Card {...item} />
                    </div>)}
                </div> :
                <div style={{minHeight: "400px"}} className="row justify-content-center align-items-center">
                    <div className="col-auto">
                        <Spinner/>
                    </div>
                </div>
            }
            {(pages !== null && pages !== 1) && <div className="row">
                <nav aria-label="page-navigation">
                    <Pagination setPage={setPage} totalPages={pages} currentPage={currentPage}/>
                </nav>
            </div>}
        </div>
    </>
}