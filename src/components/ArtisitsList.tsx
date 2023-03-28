import Artist, { ArtistData } from "./Artist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";

type ArtisitsListProps = {
  artists: ArtistData[];
  name: string;
};
const ArtisitsList = (props: ArtisitsListProps) => {
  const { artists, name } = props;

  /* ------------- draggable scroll ------------------- */
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  /* -------------------------------- */
  const artistsElems = artists?.map((artist) => (
    <Artist artist={artist} key={artist.adamid} />
  ));
  return (
    <div className="album-list">
      <div className="headline-cont">
        <h3>{name}</h3>
        <div className="line"></div>
        <div className="conrolers-cont">
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={() => {
              const elem = ref.current as HTMLElement;
              elem.scrollLeft -= 100;
            }}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={() => {
              const elem = ref.current as HTMLElement;
              elem.scrollLeft += 100;
            }}
          />
        </div>
      </div>
      <div className="albums-cont" id="new-releases" ref={ref} {...events}>
        {artistsElems}
      </div>
    </div>
  );
};

export default ArtisitsList;
