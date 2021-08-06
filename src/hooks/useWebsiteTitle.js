export default function useWebsiteTitle(newTitle) {

  const setTitle = title => {
    document.title = title;
  }

  if (newTitle) {
    setTitle(newTitle);
  }

  return setTitle;
}