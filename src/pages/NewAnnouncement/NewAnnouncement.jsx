import { useState } from "react";
import Input from "../../components/Input/Input";
import validation from "../../helpers/validation";
import LoadingButton from '../../components/UI/LoadingButton/LoadingButton';
import firebase from '../../firebase';
import axios from '../../axiosDB';
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function NewAnnouncement() {

  const [user] = useAuth();
  const [loading, setLoading] = useState(false);
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const history = useHistory();

  const [form, setForm] = useState({
    title: {
      value: '',
      errorMessage: '',
      isValid: false,
      rules: ['required', { rule: 'length', length: 100 }]
    },
    city: {
      value: '',
      errorMessage: '',
      isValid: false,
      rules: ['required']
    },
    price: {
      value: '',
      errorMessage: '',
      isValid: false,
      rules: ['required']
    },
    category: {
      value: 'tires',
      errorMessage: '',
      isValid: true
    },
    description: {
      value: '',
      errorMessage: '',
      isValid: false,
      rules: ['required']
    },
    promoted: {
      value: '0',
      errorMessage: '',
      isValid: true,
    },
    email: {
      value: '',
      errorMessage: '',
      isValid: false,
      rules: ['required', 'email']
    },
    phone: {
      value: '',
      errorMessage: '',
      isValid: false,
      rules: ['required', 'phone']
    },
    name: {
      value: '',
      errorMessage: '',
      isValid: false,
      rules: ['required']
    },
    photo: {
      url: '',
      isValid: false,
      invalidMessage: '',
      validMessage: ''
    }
  })

  const changeHandler = (value, type) => {
    const errorMessage = validation(value, form[type].rules)
    setForm({ ...form, [type]: { ...form[type], value, isValid: !errorMessage, errorMessage } })
  }

  const imgHandler = img => {
    setLoadingPhoto(true);
    setForm({ ...form, photo: { ...form.photo, url: '', isValid: false, invalidMessage: '', validMessage: '' } })
    if (img === undefined) {
      setForm({ ...form, photo: { ...form.photo, isValid: false, invalidMessage: 'Nie wybrano zdjęcia !' } });
      setLoadingPhoto(false);
      return;
    }
    let bucketName = 'images';
    let file = img;
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);

    uploadTask.on('state_changed',
      (snapshot) => { },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
        setForm({ ...form, photo: { ...form.photo, isValid: false, invalidMessage: 'Coś poszło nie tak, próbuj jeszcze raz', validMessage: '' } });
        setLoadingPhoto(false);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          setForm({ ...form, photo: { ...form.photo, url: downloadURL, isValid: true, validMessage: 'zdjęcie zostało dodane', invalidMessage: '' } });
          setLoadingPhoto(false);
        });
      })
  }

  const formHandler = async e => {
    setLoading(true);
    e.preventDefault();
    try {
      const announcementInfo = {
        title: form.title.value,
        city: form.city.value,
        price: form.price.value,
        category: form.category.value,
        description: form.description.value,
        promoted: form.promoted.value,
        email: form.email.value,
        phone: form.phone.value,
        name: form.name.value,
        photo: form.photo.url,
        userId: user.localId
      }
      await axios.post('/announcements.json', announcementInfo);
      setLoading(false);
      history.push('/')
    } catch (ex) {
      setLoading(false);
      console.log(ex.response)
    }
  }

  const btnDisabledHandler = !(Object.values(form).filter(x => !x.isValid).length === 0);


  return (
    <div className="container">
      <div className="card my-2">
        <div className="card-header">
          <h4>Dodaj nowe ogłoszenie</h4>
        </div>
        <div className="card-body">
          <form onSubmit={formHandler} className="my-2">
            <Input
              type="text"
              label="Tytuł"
              name="title-announcement"
              isValid={form.title.isValid}
              errorMessage={form.title.errorMessage}
              value={form.title.value}
              onChange={val => changeHandler(val, 'title')}
            />
            <div className="row">
              <div className="col-6">
                <Input
                  type="number"
                  label="Cena"
                  name="price-announcement"
                  isValid={form.price.isValid}
                  errorMessage={form.price.errorMessage}
                  value={form.price.value}
                  onChange={val => changeHandler(val, 'price')}
                />
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <p className="mb-2">Kategoria</p>
                  <Input
                    type="select"
                    name="category-announcement"
                    options={[
                      { label: 'Trackday', value: 'trackday' },
                      { label: 'Opony', value: 'tires' },
                      { label: 'Motocykle', value: 'motorcycles' }]}
                    isValid={form.category.isValid}
                    errorMessage={form.category.errorMessage}
                    value={form.category.value}
                    onChange={val => changeHandler(val, 'category')}
                  />
                </div>
              </div>
            </div>

            <div className="my-2">
              <p className="mb-2">Dodaj zdjęcie</p>
              <Input
                type="file"
                name="photo-announcement"
                onChange={(img) => imgHandler(img)}
                loading={loadingPhoto}
                invalidMessage={form.photo.invalidMessage}
                validMessage={form.photo.validMessage}
                isValid={form.photo.isValid}
              />
              <p className="text-muted"><small>*aby dodać ogłoszenie musisz wysłać zdjęcie</small></p>
            </div>

            <Input
              type="textarea"
              label="Opis produktu"
              name="description-announcement"
              isValid={form.description.isValid}
              errorMessage={form.description.errorMessage}
              value={form.description.value}
              onChange={val => changeHandler(val, 'description')}
            />

            <div className="row">
              <div className="col-6">
                <Input
                  type="text"
                  label="Imię"
                  name="name-announcement"
                  isValid={form.name.isValid}
                  errorMessage={form.name.errorMessage}
                  value={form.name.value}
                  onChange={val => changeHandler(val, 'name')}
                />
              </div>
              <div className="col-6">
                <Input
                  type="text"
                  label="Telefon"
                  name="phone-announcement"
                  isValid={form.phone.isValid}
                  errorMessage={form.phone.errorMessage}
                  value={form.phone.value}
                  onChange={val => changeHandler(val, 'phone')}
                />
              </div>
              <div className="col-6">
                <Input
                  type="email"
                  label="Email"
                  name="email-announcement"
                  isValid={form.email.isValid}
                  errorMessage={form.email.errorMessage}
                  value={form.email.value}
                  onChange={val => changeHandler(val, 'email')}
                />
              </div>
              <div className="col-6">
                <Input
                  type="text"
                  label="Miasto"
                  name="city-announcement"
                  isValid={form.city.isValid}
                  errorMessage={form.city.errorMessage}
                  value={form.city.value}
                  onChange={val => changeHandler(val, 'city')}
                />
              </div>
            </div>

            <div className="mb-2">
              <p className="mb-2">Ogłoszenie promowane</p>
              <Input
                type="radio"
                name="promoted-announcement"
                options={[{
                  value: '1', label: 'Tak'
                }, {
                  value: '0', label: 'Nie'
                }]}
                value={form.promoted.value}
                onChange={value => changeHandler(value, 'promoted')}
              />
            </div>

            <LoadingButton
              title="Dodaj ogłoszenie"
              disabled={btnDisabledHandler}
              loading={loading}
            />
          </form>
        </div>
      </div>
    </div>
  )
}