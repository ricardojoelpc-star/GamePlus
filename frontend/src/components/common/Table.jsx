function Table({

    columns,

    data,

    renderActions

}) {

    return (

        <div className="table-container">

            <table className="admin-table">

                <thead>

                    <tr>

                        {

                            columns.map((column) => (

                                <th key={column.key}>

                                    {column.title}

                                </th>

                            ))

                        }

                        {

                            renderActions && (

                                <th>

                                    Acciones

                                </th>

                            )

                        }

                    </tr>

                </thead>

                <tbody>

                    {

                        data.length === 0 ? (

                            <tr>

                                <td

                                    colSpan={

                                        columns.length + 1

                                    }

                                    style={{

                                        textAlign:"center",

                                        padding:"30px"

                                    }}

                                >

                                    No hay registros.

                                </td>

                            </tr>

                        )

                        :

                        data.map((row,index)=>(

                            <tr key={index}>

                                {

                                    columns.map(column=>(

                                        <td key={column.key}>

                                            {

                                                column.render

                                                ?

                                                column.render(row)

                                                :

                                                row[column.key]

                                            }

                                        </td>

                                    ))

                                }

                                {

                                    renderActions && (

                                        <td>

                                            {

                                                renderActions(row)

                                            }

                                        </td>

                                    )

                                }

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Table;