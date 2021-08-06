import { useParams } from "react-router-dom";
import AnnouncementHandlerForm from '../AnnouncementHandlerForm';
import axiosDB from '../../../axiosDB';
import { useEffect, useState } from "react";

export default function EditAnnouncement() {

  const { id } = useParams();
  const [announcement, setAnnouncement] = useState({});

  const getAnnouncement = async () => {
    const editAnnouncement = await axiosDB.get(`/announcements/${id}.json`);
    setAnnouncement(editAnnouncement.data);
  }

  useEffect(() => {
    getAnnouncement();
  }, [id]);

  const onSubmit = async (updateAnnouncement) => {
    await axiosDB.patch(`/announcements/${id}.json`, updateAnnouncement);
  }

  return (
    <>
      <AnnouncementHandlerForm btnLabel="Aktualizuj" title="Edytuj ogłoszenie" onSubmit={(updateAnnouncement) => onSubmit(updateAnnouncement)} announcement={announcement} />
    </>
  )
}