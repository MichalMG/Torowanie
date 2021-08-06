import { useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import Announcements from "../../components/Announcements/Announcements";
import getAllAnnouncements from "../../helpers/getAllAnnouncements";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

export default function Motorcycle() {

  const [motorcyclesArray, setMotorcyclesArray] = useState([]);
  const [loading, setLoading] = useState(true);
  useWebsiteTitle("Motocykle");

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
  }, [])

  return (
    <div className="container">
      {loading
        ? <Spinner />
        : motorcyclesArray.length === 0
          ? (<div className="alert alert-warning">
            <p className="mb-0">Aktualnie brak ogłoszeń w kategorii motocykle</p>
          </div>)
          : <Announcements announcements={motorcyclesArray} />}
    </div>
  )
}