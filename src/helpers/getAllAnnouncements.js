import axiosDB from '../axiosDB';
import objectIdToArray from './objectIdToArray';

export default async function getAllAnnouncements() {
  const allAnnouncements = await axiosDB.get('/announcements.json');
  const newArray = objectIdToArray(allAnnouncements.data);
  return newArray;
}