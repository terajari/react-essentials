import './CoreConcepts.css'

function CoreConcepts({title, desc, img}) {
    return (
      <li>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </li>
    )
}

  export default CoreConcepts