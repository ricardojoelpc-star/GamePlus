function Navbar(){

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    return(

        <nav style={{

            height:"70px",
            background:"#2563EB",
            color:"white",

            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",

            padding:"0 30px"

        }}>

            <h2>GAMEPLUS</h2>

            <span>

                {usuario?.nombre}

            </span>

        </nav>

    );

}

export default Navbar; 