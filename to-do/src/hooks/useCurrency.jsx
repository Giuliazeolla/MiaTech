import { useContext } from "react";
import { CurrencyContext } from "../providers/Currency";

export const useCurrency = () => {
    return useContext(CurrencyContext);
};

export const SelectCurrency = ({ currency, setCurrency }) => {
    return (
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EURO</option>
        </select>
    )
}