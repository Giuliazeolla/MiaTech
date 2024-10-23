import React from "react";
import TodoList from "./TodoList";
import { SelectLanguage, useLanguage } from "./hooks/useLanguage";
import { SelectCurrency, useCurrency } from "./hooks/useCurrency";

const App = () => {
    const [lang, setLang] = useLanguage();
    const [currency, setCurrency] = useCurrency();

    return (
        <>
            <div>
                <SelectLanguage lang={lang} setLang={setLang}/>
                <SelectCurrency currency={currency} setCurrency={setCurrency}/>
                <h2>    
                    {
                        lang == 'it' ? 'Lista to-do' : 'Todo list'
                    }
                </h2>
                <p>
                    {
                        currency == 'USD' ? '$100' : '€90'
                    }
                </p>
                <TodoList />
            </div>
        </>
    );
}

export default App;