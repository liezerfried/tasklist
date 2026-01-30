
// Página principal (Home). Muestra la navegación y la lista de tareas.
import Nav from '../components/Nav'
import TaskList from '../components/TaskList'
import QuoteInfo from '../components/QuoteInfo'
import Footer from '../components/Footer' // <-- Agrega esta línea



const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', minHeight: '100vh' }}>
      <Nav />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <TaskList />
      </div>
      <QuoteInfo />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

// Exporta la página Home
export default Home;
