import './Home.css'
const Home = ({user, setUser}) => {

    const handelLogOut = () => {
        setUser([])
    }

    return(
        <div>
            <h1>Bienvenido</h1>
            <h2>{[user]}</h2>
            <button onClick={handelLogOut}>Cerrar sesion</button>
        </div>
    )

}

export default Home