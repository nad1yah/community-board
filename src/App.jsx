import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <h1>Nadiyah's Favorite Taco Bell Items</h1>
      <h2>
        Undisputable list of the best menu items on Taco Bell, for TacoBell
        enjoyers
      </h2>

      <div className="items">
        <Card
          image="https://www.tacobell.com/images/22362_crunchwrap_supreme_269x269.jpg"
          title="Crunchwrap Supreme"
          category="Specialties"
        />
        <Card
          image="https://www.tacobell.com/images/22813_cheesy_gordita_crunch_269x269.jpg"
          title="Cheesy Gordita Crunch"
          category="Tacos"
        />
        <Card
          image="https://www.tacobell.com/images/22963_beef_grilled_cheese_burrito_269x269.jpg"
          title="Grilled Cheese Burrito"
          category="Burritos"
        />
        <Card
          image="https://www.tacobell.com/images/22172_nacho_cheese_doritos_locos_tacos_269x269.jpg"
          title="Nachos Cheese Doritos Locos Taco"
          category="Tacos"
        />
        <Card
          image="https://www.tacobell.com/images/30046_cinnabon_delights_2_pack_269x269.jpg"
          title="Cinnabon Delight"
          category="Side & Sweets"
        />
        <Card
          image="https://www.tacobell.com/images/23471_new_cantina_chicken_crispy_taco_269x269.jpg"
          title="Cantina Chicken Crispy Taco"
          category="Tacos"
        />
        <Card
          image="https://www.tacobell.com/images/1491_mtn_dew_baja_blast_freeze_269x269.jpg"
          title="Frozen Baja Blast"
          category="Drinks"
        />
        <Card
          image="https://www.tacobell.com/images/22303_mexican_pizza_269x269.jpg"
          title="Mexican Pizza"
          category="Specialties"
        />
        <Card
          image="https://www.tacobell.com/images/22321_quesadilla_269x269.jpg"
          title="Chicken Quesadilla"
          category="Quesadillas"
        />
        <Card
          image="https://www.tacobell.com/images/22850_chalupa_supreme_269x269.jpg"
          title="Chalupa Supreme"
          category="Tacos"
        />
        <Card
          image="https://www.tacobell.com/images/22525_cinnamon_twists_269x269.jpg"
          title="Cinnamon Twists"
          category="Side & Sweets"
        />
      </div>
    </div>
  );
};

export default App;
