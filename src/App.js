import './App.css';
import Header from "./components/Header/header";
import Layout from "./components/Layout/layout";
import Footer from "./components/Footer/footer";
import bg1Img from './img/bg1.jpg';
import bg3Img from './img/bg3.jpg'
import pokemons from "./utils/pokemons";
import PokemonCard from './components/PokemonCard/PokemonCard';
import cardBackSide from './img/card-back-side.jpg'

function App() {

  return (
    <>
        <Header title="This is Pokemon Game" descr="This is fanny game!" />
        <Layout id={1} title='My Pokemons' urlBg={bg1Img} >
            <div className='flex'>
                {
                    pokemons.map( item =>
                        <PokemonCard key={item.id}
                                     cardBackSide = {cardBackSide}
                                     type={item.type}
                                     values={item.values}
                                     img={item.img}
                                     name={item.name}
                                     id={item.id}
                                     typePok = {item.type}
                        />)
                }
            </div>
        </Layout>
        <Layout id={2} title='Rules of the games' colorBg='#ffccff'>
            In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
            Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
            To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.

        </Layout>

        <Layout id={3} title='title3' urlBg={bg3Img}>


        </Layout>
        <Footer/>
    </>
  );
}

export default App;
