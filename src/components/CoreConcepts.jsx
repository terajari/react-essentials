import './CoreConcepts.css'

function CoreConcepts(props) {
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </li>
    )
}

  export default CoreConcepts