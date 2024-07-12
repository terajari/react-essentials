import './CoreConcept.css'

function CoreConcept({title, desc, img}) {
    return (
      <li>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </li>
    )
}

  export default CoreConcept