import Banner from "./components/Banner"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container";
import Card from "./components/Card";
import cartoes from "./json/db.json"

function App() {
  return (
    <>
      <Header />
      <Banner parametro="00" />

      <Container>
        <h3>Cartões Postais</h3>
        <section className="cards">
          {cartoes.map((cartao) => <Card id={cartao.url} key={cartao.id} />)}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
