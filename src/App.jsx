import { getImageUrl } from './utils.js';

function Profile(
  { name,   
    imageId,
    profession,
    awards,
    discovered
  }) {
  return (
    <>
     <section className='profile' >
      <h2>{name}</h2>
      <img src={getImageUrl(imageId)} alt="" width={70} height={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
     </section>

    </>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile imageId={'szV5sdG'} awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal']} profession={'Physicist and chemist'} discovered={'polonium (chemical element)'} name="Maria Skłodowska-Curie" />      

      <Profile imageId={'YfeOqp2'} awards={[
        'Miyake Prize for geochemistry', 'Tanaka Prize'
      ]} profession={'geochemist'} discovered={'a method for measuring carbon dioxide in seawater'} name="Katsuko Saruhashi" />
    </div>
  );
}