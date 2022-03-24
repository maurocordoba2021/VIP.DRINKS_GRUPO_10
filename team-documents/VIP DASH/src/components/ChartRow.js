import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.idProducts}</td>
                    <td>{props.name}</td>
                    <td>$ {props.price}</td>
                    <td>{props.Categories.name}</td>
                </tr>
            )
    }
    
        

export default ChartRow;