import { useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import Announcements from "../../components/Announcements/Announcements";
import getAllAnnouncements from "../../helpers/getAllAnnouncements";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

export default function Tires() {

  const [tiresArray, setTiresArray] = useState([]);
  const [loading, setLoading] = useState(true);
  useWebsiteTitle("Opony")
  const getAnnouncements = async () => {
    try {
      setLoading(true);
      const allAnnouncements = await getAllAnnouncements();
      const allTires = [...allAnnouncements].filter(x => x.category === 'tires');
      setTiresArray(allTires);
      setLoading(false);
    } catch (ex) {
      console.log(ex.response);
    }
  }

  useEffect(() => {
    getAnnouncements();
  }, [])

  return (
    <div className="container">
      {loading
        ? <Spinner />
        : tiresArray.length === 0
          ? (<div className="alert alert-warning">
            <p className="mb-0">Aktualnie brak ogłoszeń w kategorii opony</p>
          </div>)
          : <Announcements announcements={tiresArray} />}
    </div>
  )
}