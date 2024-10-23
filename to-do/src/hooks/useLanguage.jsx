import { useContext } from "react"
import { LanguageContext } from "../providers/Language";

export const SelectLanguage = ({ lang, setLang }) => {
    return (
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="it">Italiano</option>
            <option value="en">English</option>
        </select>
    )
}

export const useLanguage = () => {
    const { lang, setLang } = useContext(LanguageContext);

    return [lang, setLang];

}