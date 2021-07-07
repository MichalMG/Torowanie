import { useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import Announcements from "../../components/Announcements/Announcements";
import getAllAnnouncements from "../../helpers/getAllAnnouncements";

export default function Tickets() {
  const [trackdayArray, setTrackdayArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTrackday = async () => {
    setLoading(true);
    try {
      const allAnnouncements = await getAllAnnouncements();
      const allTrackdays = [...allAnnouncements].filter(x => x.category === "trackday");
      setTrackdayArray(allTrackdays);
      setLoading(false);
    } catch (ex) {
      console.log(ex.response);
    }
  }

  useEffect(() => {
    getTrackday();
  }, [])

  return (
    <div className="container">
      {loading ? <Spinner /> : (
        <Announcements announcements={trackdayArray} />
      )}
    </div>
  )
}