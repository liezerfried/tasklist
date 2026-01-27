import { Link } from 'react-router-dom'

function App() {

  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
      <Link to="/tasklist/home">
        <button>Go to Home</button>
      </Link>
      <Link to="/tasklist/about">
        <button>Go to About</button>
      </Link>
    </div>
  )
}

export default App
