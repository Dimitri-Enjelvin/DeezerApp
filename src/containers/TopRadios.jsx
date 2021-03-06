import React from "react";
import { useTranslation } from "react-i18next"

import useFetch from "../hooks/useFetch"

import Loading from "../components/Loading/Loading";
import StandarCard from "../components/StandardCard/StdCard";

const TopRadios = () => { 

  const { t } = useTranslation()

  const { data: radios, isLoading } = useFetch(`radio/top`)

    if (isLoading) return <Loading />;


    return (
      <React.Fragment>
        <h1>{t('trad:topRadios')}</h1>
        <div className="genres-section">
          {radios.data.map((radio) => (
            <StandarCard
              key={radio.id}
              text={radio.title}
              pic={radio.picture_big}
              url={`/radio/${radio.id}`}
            />
          ))}
        </div>
      </React.Fragment>
    );
}

export default TopRadios;
