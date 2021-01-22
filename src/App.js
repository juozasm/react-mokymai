import ErrorBoundary from './containers/ErrorBoundaries'
import IndexPage from './views/IndexPage'

export default function App() {
    return (
      <ErrorBoundary>      
        <IndexPage/>
      </ErrorBoundary>
    )
}
