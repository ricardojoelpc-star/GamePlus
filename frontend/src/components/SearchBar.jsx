function SearchBar({ valor, cambiar }) {

    return (

        <input

            type="text"

            placeholder="Buscar videojuegos..."

            value={valor}

            onChange={(e)=>cambiar(e.target.value)}

            style={{

                width:"100%",

                padding:"15px",

                borderRadius:"10px",

                border:"1px solid #CCC",

                fontSize:"16px",

                marginBottom:"25px"

            }}

        />

    );

}

export default SearchBar;