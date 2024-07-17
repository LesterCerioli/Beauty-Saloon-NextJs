import { pages } from "next/dist/build/templates/app-page";
import React  from "react"; 

const Max_Items = 9;
const Max_Left = (Max_Items - 1) /2 ;

const Pagination = ({limit, total, offset}) => {
    const current = offset ?(offset, limit) + 1:1; 
    const Pages = math.ceil (total / limit); 
    const first = math.Max (current - Max_Left, 1);
    return(
        <Ul>
            {Array.from({length: Max_Items})
            .map((_, index)=> index + first)
            
            }
        </Ul>
    ); 
};

export default Pagination ;