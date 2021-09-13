import React from "react";
import ReactDom from "react-dom";
import "./index.css"
import Card from "./Card";
import Navbar from "./navbar";
import Heading from "./heading";
import Footer from "./footer";
import cardobj from "./cardJson";


//to iterate card
class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
           count:0,
        }
    }

    addcart=(bool)=>{
        if(bool)
        {  
           this.setState((st)=>({
               count:st.count +1
           }));
           
          
        }
        else{
          
            this.setState((st)=>({
                count:st.count-1
            }));
         
        }
    }
  render()
  {
    return(
       <>
        <Navbar count={this.state.count} />
        <Heading />
        <div className="root">
        {cardobj.map((x,i)=>{
            return <Card 
            key={i}
            image={x.image}
            sale={x.sale}
            heading={x.heading}
            star={x.star}
            discount={x.discount}
            price={x.price}
            cart={x.cart}
            addcart={this.addcart}
            />
        })
        }
        </div>
        <Footer />
      
        </> 
    );
   }
}


ReactDom.render(<App/>,document.querySelector("#root"));

/*
let cardobj =[
    {
        image:"./images/profile.jpg",
        sale:false,
        heading:"Fancy Product",
        star:false,
        discount:"",
        price:"$40.00 - $80.00",
        cart:false
    },
    {
        image:"./images/profile.jpg",
        sale:true,
        heading:"Special Item",
        star:true,
        discount:"$20.00",
        price:"$18.00",
        cart:true
    },
    {
        image:"./images/profile.jpg",
        sale:false,
        heading:"Sale Item",
        star:false,
        discount:"$50.00",
        price:"$25.00",
        cart:true
    },
    {
        image:"./images/profile.jpg",
        sale:false,
        heading:"Popular Item",
        star:true,
        discount:"",
        price:"$40.00",
        cart:true
    },
    {
        image:"./images/profile.jpg",
        sale:true,
        heading:"Sale Item",
        star:false,
        discount:"$50.00",
        price:"$25.00",
        cart:true
    },
    {
        image:"./images/profile.jpg",
        sale:false,
        heading:"Fancy Product",
        star:false,
        discount:"",
        price:"$120.00 - $280.00",
        cart:false
    }
    ];*/