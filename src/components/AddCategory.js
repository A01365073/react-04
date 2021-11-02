import React,{useState} from 'react'
import PropTypes from 'prop-types';  

export const AddCategory = ({setCategories}) => {
    const [inputvalue, setinputvalue] = useState('');
    const handleInputChange=(e)=>{
        setinputvalue(e.target.value);
    }
    const handlesumit=(e)=>{
        e.preventDefault();
        if(inputvalue.trim().length>2){
        setCategories(cats=>[inputvalue,...cats]);
        setinputvalue('');
    }
    }
    return (
        <form onSubmit={handlesumit}>
            <input 
                type="text"
                value={inputvalue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired// typo de dato
}

