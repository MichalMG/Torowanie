import Announcement from "./Announcement/Announcement";

export default function Announcements(props) {

  return (
    props.announcements.map((x) => <Announcement key={x.id} {...x} />)
  )
}