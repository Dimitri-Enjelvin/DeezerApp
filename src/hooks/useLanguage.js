import { useTranslation } from "react-i18next"


const useLanguage = () => { 

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;


    const handleLanguageChange = () => {
        if(currentLanguage === "en") {
            i18n.changeLanguage("fr")
        } else {
            i18n.changeLanguage("en")
        }
    }

    return { currentLanguage, handleLanguageChange }
}

export default useLanguage