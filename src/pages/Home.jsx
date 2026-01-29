
// Página principal (Home). Muestra la navegación y la lista de tareas.
import Nav from '../components/Nav'
import TaskList from '../components/TaskList'


const Home = () => {
  // Renderiza la barra de navegación y la lista de tareas
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <Nav />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <TaskList />
      </div>
      {/* Otros contenidos de la página principal */}
    </div>
  );
};

// Exporta la página Home
export default Home;
