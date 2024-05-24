import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const [dataArray, setDataArray] = useState([]);

    const initialValue = {
        tittle: "",
        text: "",
      };
    
    const [data, setData] = useState(initialValue);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setDataArray([...dataArray,data]);
     
        setData(initialValue);
        setTimeout(() => {
            navigate("/");
        }, 3000);
      };

      useEffect(() => { 
        setDataArray(JSON.parse(localStorage.getItem("data")) || []);
      }, []);

      useEffect(() => {
        if(dataArray.length === 0) return;
        localStorage.setItem("data", JSON.stringify(dataArray));
      }, [dataArray])
      
      const handleInputChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };

    return (
        <div>
            <h2>News Form</h2>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="tittle">Tittle:</label>
                <input
                    type="text"
                    id="tittle"
                    name="tittle"
                    value={data.tittle}
                    onChange={handleInputChange}
                />

                <label htmlFor="text">Text:</label>
                <input
                    type="text"
                    id="text"
                    name="text"
                    value={data.text}
                    onChange={handleInputChange}
                />

                <button type="submit" value="Send">Submit</button>
            </form>
        </div>
    );
};

export default Form;