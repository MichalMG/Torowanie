import bike2 from './assets/img/bike2.jpg';


const announcements = [{
  id: 1,
  title: 'Motocykl Honda 2002 rok',
  city: 'Warszawa',
  price: '15 000 zł',
  date: 'wczoraj 15:00',
  image: bike2,
  category: 'motorcycles',
  promoted: false
}, {
  id: 2,
  title: 'Opona torowa',
  city: 'Bydgoszcz',
  price: '200 zł',
  date: 'dzisiaj 11:12',
  image: bike2,
  category: 'tires',
  promoted: true
}, {
  id: 3,
  title: 'Trackday Silesiaring 19-20.07',
  city: 'Kamień Śląski',
  price: '1 150 zł',
  date: '24.06 01:07',
  image: bike2,
  category: 'tickets',
  promoted: false
}, {
  id: 4,
  title: 'Trackday Brno 12-15.08',
  city: 'Brno, Czechy',
  price: '1 550 zł',
  date: '01.07 22:27',
  image: bike2,
  category: 'tickets',
  promoted: true
}, {
  id: 5,
  title: 'Opona torowa Metzeler! Nowa',
  city: 'Katowice',
  price: '500 zł',
  date: 'dzisiaj 16:45',
  image: bike2,
  category: 'tires',
  promoted: true
}, {
  id: 6,
  title: 'Motocykl Kawasaki 2012 rok',
  city: 'Radom',
  price: '21 000 zł',
  date: '21.07 18:19',
  image: bike2,
  category: 'motorcycles',
  promoted: false
}, {
  id: 7,
  title: 'Motocykl Suzuki dl-650 2019 rok',
  city: 'Wadowice',
  price: '35 000 zł',
  date: '17.06 12:17',
  image: bike2,
  category: 'motorcycles',
  promoted: true
}]

export const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state, user: action.user
      }
      case 'logout':
        return {
          ...state, user: null
        }
  }
}

export const initialState = {
  user: window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null,
  theme: 'info',
  announcements: announcements
}