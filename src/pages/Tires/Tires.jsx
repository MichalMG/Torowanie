import { useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import Announcements from "../../components/Announcements/Announcements";
import getAllAnnouncements from "../../helpers/getAllAnnouncements";

export default function Tires() {

  const [tiresArray, setTiresArray] = useState([]);
  const [loading, setLoading] = useState(true);

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
      {loading ? <Spinner /> : (
        <Announcements announcements={tiresArray} />
      )}
    </div>
  )
}