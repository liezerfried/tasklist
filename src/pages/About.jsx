// Página "Acerca de". Muestra información sobre la app y la navegación.
import Nav from '../components/Nav';

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <Nav />
      {/* Aquí puedes agregar información sobre la aplicación o el autor */}
    </div>
  );
};

// Exporta la página About
export default About;