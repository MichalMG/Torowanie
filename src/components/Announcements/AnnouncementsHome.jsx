import { useEffect, useState } from 'react';
import getAllAnnouncements from '../../helpers/getAllAnnouncements';
import AnnouncementHome from './AnnouncementHome/AnnouncementHome';


export default function AnnouncementsHome() {
  const [promoted, setPromoted] = useState([]);

  const getPromoted = async () => {
    try {
      const allAnnouncements = await getAllAnnouncements();
      const newArray = [...allAnnouncements].filter(x => x.promoted).splice(0, 4);
      setPromoted(newArray)
    } catch (ex) {
      console.log(ex.response);
    }
  }

  useEffect(() => {
    getPromoted();
  }, [])

  return (
    <section className="bg-light">
      <div className="container my-2">
        <h3 className="text-center py-3">Promowane ogłoszenia</h3>
        <div className="row">

          {promoted.map(announcement => <AnnouncementHome key={announcement.id} {...announcement} />)}

        </div>
      </div>
    </section>
  )
}