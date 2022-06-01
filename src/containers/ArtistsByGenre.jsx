import React from "react";
import { useTranslation } from "react-i18next";

import useFetch from "../hooks/useFetch";

import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";

const ArtistsByGenre = (props) => {

  const { t } = useTranslation()


  const { id } = props
  const { data: artists, isLoading } = useFetch(`genre/${id}/artists`) 


    if (isLoading) return <Loading />;

      return (
        <React.Fragment>
          <h1>{t('trad:artists')}</h1>
          <div className="featured-artists">
            {artists.data.map((artist) => (
              <Card key={artist.id} artist={artist} />
            ))}
          </div>
        </React.Fragment>
      );
}

export default ArtistsByGenre;
