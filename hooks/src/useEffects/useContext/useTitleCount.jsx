import { useEffect } from "react";

const useTitleCount = (count) =>{
    useEffect(()=>{
        if(count >=1){
            document.title = `Total is (${count})`
        }else{
            document.title = `Total is`
        }
    })
}

export default useTitleCount