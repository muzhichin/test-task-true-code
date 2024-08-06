import Main from "../pages/Main";
import {Header} from "../widgets/header";
import {ThemeProvider} from "./ThemeProvider";
import {Cards} from "../widgets/cards";
import {CardsRequestProvider} from "../widgets/cards/model/CardsRequestProvider.tsx";
import {CardSelect} from "../entities/cards-select";
import {ApiKeyInput} from "../entities/api-key-input/ui/ApiKeyInput.tsx";

function App() {

    return <>
        <ThemeProvider>
            <Header/>
            <Main>
                <CardsRequestProvider>
                    <div className="row justify-content-between my-4">
                        <div className="col-auto">
                            <CardSelect/>
                        </div>
                        <div className="col-auto">
                            <ApiKeyInput/>
                        </div>
                    </div>
                    <Cards/>
                </CardsRequestProvider>
            </Main>
        </ThemeProvider>
    </>
}

export default App
