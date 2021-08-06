import AnnouncementHandlerForm from '../AnnouncementHandlerForm';
import axiosDB from '../../../axiosDB';

export default function NewAnnouncement() {

  const onSubmit = async (announcementData) => {
    await axiosDB.post('/announcements.json', announcementData);
  }

  return (
    <>
      <AnnouncementHandlerForm btnLabel="Dodaj ogłoszenie" title="Dodaj nowe ogłoszenie" onSubmit={(announcementData) => onSubmit(announcementData)} />
    </>
  )
}