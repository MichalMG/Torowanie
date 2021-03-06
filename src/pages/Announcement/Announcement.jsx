import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosDB from '../../axiosDB';
import Spinner from "../../components/UI/Spinner/Spinner";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import AnnouncementForm from "../Announcement/AnnouncementForm/AnnouncementForm";

export default function AnnouncementTire() {

  const { id } = useParams();
  const [announce, setAnnounce] = useState({})
  const [loading, setLoading] = useState(true);
  const setTitle = useWebsiteTitle();

  const getAnnounce = async () => {
    try {
      const announce = await axiosDB.get(`/announcements/${id}.json`);
      setAnnounce(announce.data);
      setLoading(false);
      setTitle(announce.data.title);
    } catch (ex) {
      console.log(ex.response)
      setLoading(false);
    }
  }

  useEffect(() => {
    getAnnounce();
  }, [])

  return (
    loading ? <Spinner /> : <AnnouncementForm {...announce} id={id} />
  )

}