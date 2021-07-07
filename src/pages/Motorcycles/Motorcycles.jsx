import { useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import Announcements from "../../components/Announcements/Announcements";
import getAllAnnouncements from "../../helpers/getAllAnnouncements";

export default function Motorcycle() {

  const [motorcyclesArray, setMotorcyclesArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMotorcycles = async () => {
    try {
      const allAnnouncements = await getAllAnnouncements();
      const allMotorcycles = [...allAnnouncements].filter(x => x.category === "motorcycles");
      setMotorcyclesArray(allMotorcycles);
      setLoading(false);
    } catch (ex) {
      console.log(ex.response);
      setLoading(false);
    }
  }

  useEffect(() => {
    getMotorcycles();
    // setLoading(true);
    // setTimeout(() => {
    //   const newArray = [...state.announcements].filter(x => x.category === 'motorcycles');
    //   setAnnouncementsArray(newArray);
    //   setLoading(false);
    // }, 2000)
  }, [])

  return (
    <div className="container">
      {loading ? <Spinner /> : (
        <Announcements announcements={motorcyclesArray} />
      )}
    </div>
  )
}