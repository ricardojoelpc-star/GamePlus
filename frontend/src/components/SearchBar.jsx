function SearchBar({ valor, cambiar }) {

    return (

        <input

            type="text"

            placeholder="Buscar videojuegos..."

            value={valor}

            onChange={(e) => cambiar(e.target.value)}

        />

    );

}

export default SearchBar;