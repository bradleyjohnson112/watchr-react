import "./show.css";
import { TfiTrash } from "react-icons/tfi"

const Episode = ({ episode, isNext }) => {
  function formatDateTime(date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateTime = new Date(date);
    const dateString = `${dateTime.getUTCDate()} ${
      months[dateTime.getUTCMonth()]
    } ${dateTime.getUTCFullYear()} ${
      dateTime.getUTCHours() < 10
        ? "0" + dateTime.getUTCHours()
        : dateTime.getUTCHours()
    }:${
      dateTime.getUTCMinutes() < 10
        ? "0" + dateTime.getUTCMinutes()
        : dateTime.getUTCMinutes()
    }`;
    return dateString;
  }
  
  return (
    <>
      <p className="show__episode">
        {isNext 
          ? "Next Episode: "
          : "Previous Episode: "
        }
        <span className="show__episode-name">{episode.name}</span>
      </p>
      <p className="show__airing-info">Airdate: <span className="show__airdate">{formatDateTime(episode.airstamp)}</span></p>
    </>
  );
}

function getImgLink(show) {
  if (show._embedded.previousepisode) {
    return show._embedded.previousepisode.image?.original;
  } else if (show._embedded.nextepisode) {
    return show._embedded.nextepisode.image?.original;
  } else {
    return null;
  }
}

export default function Show({ show, deleteShow }) {
  const imgLink = getImgLink(show);

  const statusClass = show.status === "Running" ? "show__status_running" : "show__status_ended";

  return (
    <article className="show">
      <div className="show__inner">
        <img src={imgLink ? imgLink : null} width="100%" height="auto" className="show__img"/>
        <div className="show__content">
          <h3 className="show__name">{show.name}</h3>
          <p className="show__status">Status: <span className={statusClass}>{show.status}</span></p>
          {
            show._embedded?.nextepisode ? <Episode episode={show._embedded.nextepisode} isNext={true} /> : 
              show._embedded?.previousepisode ? <Episode episode={show._embedded.previousepisode} isNext={false} /> :
              <span>Episode information unavaliable</span>
          }
        </div>
        <button 
          onClick={() => deleteShow(show.id)}
          className="show__button"
        >
          <TfiTrash className="show__trash-icon"/>
        </button>
      </div>
    </article>
  );
}