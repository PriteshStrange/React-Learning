import Image from "./Image";
import Title from './Title'

function Card(props){
    return(
        <>
         <a href={props.link}>
            <Image imgSrc={props.imgSrc}/>
        </a> 
          <p><Title title={props.title}/></p>
        </>
    )
}

export default  Card