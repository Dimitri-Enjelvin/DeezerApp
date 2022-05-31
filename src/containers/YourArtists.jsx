import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next"


import MaleSingerBowie from "../assets/artists/male-singer_bowie.png";
import MaleSingerPrince from "../assets/artists/male-singer_prince.png";
import FemaleSingerBowie from "../assets/artists/female-singer_bowie.png";
import FemaleSingerPrince from "../assets/artists/female-singer_prince.png";

import randomNumber from "../core/functions/randomNumber";

import NotYet from "../components/Others/NotYet";
import Card from "../components/CardArtists/Card";

const emojis = [
  MaleSingerBowie,
  FemaleSingerBowie,
  MaleSingerPrince,
  FemaleSingerPrince,
]

const YourArtists = () => {

  const { t } = useTranslation()

  const followingArtists = useSelector((state) => state.favArtists)

  const imageSelected = emojis[randomNumber(0, 4)]

    return (
      <React.Fragment>
        <h1>{t('trad:yourArtists')}</h1>
        <div className="featured-artists">
          {followingArtists.length === 0 || followingArtists === null ? (
            <NotYet
              type={"artists"}
              message={"Find your favorite artist and start following them"}
              imgSrc={imageSelected}
            />
          ) : (
            followingArtists.map((artist) => (
              <Card key={artist.id} artist={artist} />
            ))
          )}
        </div>
      </React.Fragment>
    );
}

export default YourArtists;
