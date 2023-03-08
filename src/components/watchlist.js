import { useEffect, useState, useRef } from "react";
import Search from "./search";
import Show from "./show";
import "./watchlist.css";

const testShowData = [
  {
    "id": 170,
    "url": "https://www.tvmaze.com/shows/170/orange-is-the-new-black",
    "name": "Orange Is the New Black",
    "type": "Scripted",
    "language": "English",
    "genres": [
    "Drama",
    "Comedy",
    "Crime"
    ],
    "status": "Ended",
    "runtime": null,
    "averageRuntime": 60,
    "premiered": "2013-07-11",
    "ended": "2019-07-26",
    "officialSite": "https://www.netflix.com/title/70242311",
    "schedule": {
    "time": "",
    "days": []
    },
    "rating": {
    "average": 8
    },
    "weight": 98,
    "network": null,
    "webChannel": {
    "id": 1,
    "name": "Netflix",
    "country": null,
    "officialSite": "https://www.netflix.com/"
    },
    "dvdCountry": null,
    "externals": {
    "tvrage": 32950,
    "thetvdb": 264586,
    "imdb": "tt2372162"
    },
    "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/203/508250.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/203/508250.jpg"
    },
    "summary": "<p><b>Orange Is the New Black</b> is the story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.</p>",
    "updated": 1671133097,
    "_links": {
    "self": {
    "href": "https://api.tvmaze.com/shows/170"
    },
    "previousepisode": {
    "href": "https://api.tvmaze.com/episodes/1661796"
    }
    },
    "_embedded": {
    "previousepisode": {
    "id": 1661796,
    "url": "https://www.tvmaze.com/episodes/1661796/orange-is-the-new-black-7x13-heres-where-we-get-off",
    "name": "Here's Where We Get Off",
    "season": 7,
    "number": 13,
    "type": "regular",
    "airdate": "2019-07-26",
    "airtime": "",
    "airstamp": "2019-07-26T12:00:00+00:00",
    "runtime": 89,
    "rating": {
    "average": 8.7
    },
    "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/206/515740.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/206/515740.jpg"
    },
    "summary": "<p>Tearful farewells, emotional tributes, new beginnings. Say goodbye to the women of Litchfield in the series finale.</p>",
    "_links": {
    "self": {
    "href": "https://api.tvmaze.com/episodes/1661796"
    },
    "show": {
    "href": "https://api.tvmaze.com/shows/170"
    }
    }
    }
    }
    },
    {
      "id": 171,
      "url": "https://www.tvmaze.com/shows/171/how-i-met-your-mother",
      "name": "How I Met Your Mother",
      "type": "Scripted",
      "language": "English",
      "genres": [
      "Drama",
      "Comedy",
      "Romance"
      ],
      "status": "Ended",
      "runtime": 30,
      "averageRuntime": 30,
      "premiered": "2005-09-19",
      "ended": "2014-03-31",
      "officialSite": null,
      "schedule": {
      "time": "20:00",
      "days": [
      "Monday"
      ]
      },
      "rating": {
      "average": 7.8
      },
      "weight": 96,
      "network": {
      "id": 2,
      "name": "CBS",
      "country": {
      "name": "United States",
      "code": "US",
      "timezone": "America/New_York"
      },
      "officialSite": "https://www.cbs.com/"
      },
      "webChannel": null,
      "dvdCountry": null,
      "externals": {
      "tvrage": 3918,
      "thetvdb": 75760,
      "imdb": "tt0460649"
      },
      "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2451.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/2451.jpg"
      },
      "summary": "<p><b>How I Met Your Mother</b> is a comedy about Ted and how he fell in love. It all starts when Ted's best friend, Marshall drops the bombshell that he's going to propose to his long-time girlfriend, Lilya kindergarten teacher. At that moment, Ted realizes that he had better get a move on if he too hopes to find true love. Helping him in his quest is Barney a friend with endless, sometimes outrageous opinions, a penchant for suits and a foolproof way to meet women. When Ted meets Robin he's sure it's love at first sight, but destiny may have something else in store.</p>",
      "updated": 1674543708,
      "_links": {
      "self": {
      "href": "https://api.tvmaze.com/shows/171"
      },
      "previousepisode": {
      "href": "https://api.tvmaze.com/episodes/12492"
      }
      },
      "_embedded": {
      "previousepisode": {
      "id": 12492,
      "url": "https://www.tvmaze.com/episodes/12492/how-i-met-your-mother-9x24-last-forever-2",
      "name": "Last Forever (2)",
      "season": 9,
      "number": 24,
      "type": "regular",
      "airdate": "2014-03-31",
      "airtime": "20:30",
      "airstamp": "2014-04-01T00:30:00+00:00",
      "runtime": 30,
      "rating": {
      "average": 6.3
      },
      "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/101/253963.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/101/253963.jpg"
      },
      "summary": "<p>Ted finally finishes telling his kids the story of how he met their mother.</p>",
      "_links": {
      "self": {
      "href": "https://api.tvmaze.com/episodes/12492"
      },
      "show": {
      "href": "https://api.tvmaze.com/shows/171"
      }
      }
      }
      }
      }
]

const getUsersShows = () => JSON.parse(localStorage.getItem("shows")) || [];

export default function Watchlist() {
  const [usersShows, setUsersShows] = useState(getUsersShows());
  const [shows, setShows] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const modal = useRef(null);

  useEffect(() => {
    if (usersShows.length > 0) {
      const timer = setTimeout(effect, 1000);
      return () => {
        clearTimeout(timer);
      }
    }
    function effect() {
      const requests = [];
      usersShows.forEach((show) => {
        const url = `https://api.tvmaze.com/shows/${show.apiId}?embed[]=previousepisode&embed[]=nextepisode`;
        requests.push(fetch(url));
      })
  
      Promise.all(requests)
      .then(
        res => Promise.all(res.map(r => r.json())))
      .then(shows => {
        console.log(shows);
        setShows(shows);
      });
    }
  }, [usersShows.length]);

  function deleteShow(id) {
    const newUsersShows = usersShows.filter(show => show.apiId !== id);
    localStorage.setItem("shows", JSON.stringify(newUsersShows));
    setUsersShows(newUsersShows);
  }

  function addShow(show) {
    const userShowsDto = usersShows.map(show => show);
    userShowsDto.push(show);
    localStorage.setItem("shows", JSON.stringify(userShowsDto));
    setUsersShows(userShowsDto);
  }

  function showModal() {
    setIsSearching(true);
  }

  function hideModal() {
    setIsSearching(false)
  }

  function sectionOnClick(e) {
    if (e.target.contains(modal.current) && e.target !== modal.current) {
      hideModal();
    }
  }

  return (
    <section className="watchlist" onClick={(e) => sectionOnClick(e)}>
      <div className="watchlist__inner">
        <div className="watchlist__search-bar">
            <Search 
              addShow={addShow}
              showModal={showModal}
              hideModal={hideModal}
              isSearching={isSearching}
              ref={modal}
            />
        </div>
        <section className="watchlist__shows">
            {shows.length > 0
            ? (
                <>
                {shows.map((show) => {
                  return <Show 
                  key={show.id} 
                  show={show}
                  deleteShow={deleteShow}
                  />
                })}
                </>
            )
            : <p className="watchlist__error-msg">
                Your shows are empty. Add some by using the search bar above!
              </p>
          }
        </section>
      </div>
    </section>
  )
}