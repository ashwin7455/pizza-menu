import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co. </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Hope we are excited for tomorrow session at 11AM IST with below
            Agenda: [1] BA Interview Process [2] Expectations from Applicant [3]
            Common challenges BA's face during Interview
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are still working on our menu .please come back later.</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/spinaci.jpg "
        price={100}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion "
        photoName="pizzas/funghi.jpg "
        price={800}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
      <img src={pizzaObj.photoName} alt=" pizzas" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 18;
  const closeHour = 23;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour > openHour && hour < closeHour) alert(" we are open NOW ");
  // else alert("sorry we are closed now");

  if (!isOpen)
    return (
      <p>
        {/* we are happy to welcome you between {openHour}:00 and {closeHour}:00{" "} */}{" "}
        closed
      </p>
    );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>
          sorry , closed now we are happy to welcome you between {openHour}:00
          and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        we are open from {openHours}:00 to {closeHours}:00 . Come visit us or
        order online .
      </p>
      <button className="btn"> Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// React before 18

React.render(
  <React.StrictMode>
    {/* React.StrictMode ek tool hai development ke liye, jo hume batata hai ki
    hamare code me kahin potential problems to nahi hain. Yeh production me
    affect nahi karta – sirf development time pe hi kaam karta hai.
    Jab aap <React.StrictMode> me koi component wrap karte ho, to React:
    kuch functions ya lifecycle methods ko do baar call karta hai (sirf development me) – 
    taaki check kar sake ki sab kuch sahi se kaam kar raha hai ya nahi. */}
    <App />
  </React.StrictMode>
);
