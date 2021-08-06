import Searchbar from "../../components/UI/Searchbar/Searchbar";
import Category from "../../components/Category/Category";
import AnnouncementsHome from "../../components/Announcements/AnnouncementsHome";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

export default function Home() {

  useWebsiteTitle("Strona główna");

  return (
    <>
      <Searchbar />
      <Category />
      <AnnouncementsHome />
    </>
  )
}