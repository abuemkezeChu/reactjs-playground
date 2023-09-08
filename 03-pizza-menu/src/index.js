import { React } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozzarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozzarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozzarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  // const style = { color: 'red', fontSize: '3rem' }
  const style = {}
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, and pepperoni"
        imageSrc="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza funghi"
        ingredients="Tomato, mozzarella, mushrooms, and onion"
        imageSrc="pizzas/funghi.jpg"
        price={12}
      />
    </main>
  )
}

function Pizza(props) {
  console.log(props)
  return (
    <div className="pizza">
      <img src={props.imageSrc} alt="spinage pizza"></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
      </div>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 8
  const closedHour = 22
  const isOpen = hour >= openHour && hour <= closedHour

  // if (hour >= openHour && hour < closedHour) {
  //   alert('We are currently open')
  // } else {
  //   alert('Sorry we are closed')
  // }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently open
    </footer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
