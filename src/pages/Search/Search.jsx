import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Spinner from "../../components/UI/Spinner/Spinner";
import Announcements from "../../components/Announcements/Announcements";
import axios from '../../axiosDB';
import objectIdToArray from "../../helpers/objectIdToArray";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

export default function Search() {

  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const { term } = useParams();
  useWebsiteTitle(`Wyszukiwanie: ${term}`)

  const getSearch = async () => {
    setLoading(true);
    try {
      const getAllAnnouncements = await axios.get('/announcements.json');

      const getSearchTerm = objectIdToArray(getAllAnnouncements.data).filter(x => x.title.toLowerCase().includes(term.toLowerCase()));
      setSearch(getSearchTerm);
      setLoading(false);

    } catch (ex) {
      console.log(ex.response);
      setLoading(false);
    }
  }

  useEffect(() => {
    getSearch();
  }, [term])

  return (
    <>
      <div className="bg-light">
        <div className="container">
          {loading
            ? <Spinner />
            : search.length === 0
              ? <div className="alert alert-danger">Niestety nic nie znaleziono</div>
              : <Announcements announcements={search} />}

        </div>
      </div>

    </>
  )
}