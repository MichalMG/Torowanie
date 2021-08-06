import tire from '../../assets/img/tire.jpg';
import bike from '../../assets/img/bike.jpg';
import ticket from '../../assets/img/ticket.png';
import Element from './Element/Element';

export default function Category() {

  const category = [{
    id: 1,
    title: 'Trackday',
    image: ticket,
    path: '/tickets'
  }, {
    id: 2,
    title: 'Opony',
    image: tire,
    path: '/tires'
  }, {
    id: 3,
    title: 'Motocykle',
    image: bike,
    path: '/motorcycles'
  }]

  return (
    <section>
      <div className="container my-2">
        <h3 className="text-center py-3">Kategorie</h3>
        <div className="row py-2 justify-content-evenly">

          {category.map(x => <Element key={x.id} {...x} />)}

        </div>
      </div>
    </section>
  )
}