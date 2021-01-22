export default function Loader({ isLoading, children }) {
    return isLoading ? 'LOADING...' : children   
}
