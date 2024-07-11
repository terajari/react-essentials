import reactImg from '../assets/react-core-concepts.png'
import './Header.css'

const reactDesc = ["Fundamental", "Core", "Crucial"]

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
    let desc = reactDesc[randomInt(reactDesc.length - 1)]
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {desc} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
}

export default Header