import React,{useState,useEffect} from 'react';
import axios from 'axios';
import VendorContext from './VendorContext';
// export const VendorContext = React.createContext();

const VendorProvider = ({children}) =>{
    const [vendors,setVendors] = useState([]);
    const [apiCalled,setApiCalled] = useState(false);

    useEffect(()=>{
        if(!apiCalled){
            
            axios.get("http://localhost:8080/getAllVendors")
            .then((response)=>{
                const vendors = response.data;
                
                setVendors(vendors)
                setApiCalled(true);
            })
        }
    },[apiCalled]);
    
    console.table("vendors table",vendors)


    return(
        <VendorContext.Provider value={{vendors}}>
            {children}
        </VendorContext.Provider>
    )
}

export default VendorProvider;