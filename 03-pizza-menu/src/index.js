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
  const pizzas = pizzaData
  // const pizzas = []
  const numPizzas = pizzas.length
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map(pizza => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>we're working on our menu, please come back later😊</p>
      )}

      {/* <Pizza
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
      /> */}
    </main>
  )
}

function Pizza({ pizzaObject }) {
  console.log(pizzaObject)

  if (pizzaObject.soldOut) {
    return null
  }

  return (
    <li className="pizza">
      <img src={pizzaObject.photoName} alt="spinage pizza"></img>
      <div>
        <span>{pizzaObject.price}</span>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 8
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  // if (hour >= openHour && hour < closeHour) {
  //   alert('We are currently open')
  // } else {
  //   alert('Sorry we are closed')
  // }

  /**Multiple return is used in cases where we want to return entire components not just a piece of jsx */

  if (!isOpen) {
    return (
      <p>
        we're are happy to welcome you between {openHour}:00 and {closeHour}
        :00{' '}
      </p>
    )
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          we're are happy to welcome you between {openHour}:00 and {closeHour}
          :00{' '}
        </p>
      )}
    </footer>
  )
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
