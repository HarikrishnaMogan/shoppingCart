import React from "react";


class Card extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            cartbutton:"add to cart",
            changebtn:true,
        }
    }

    buttonchange=()=>{
        if(this.state.changebtn)
        {
            this.setState({cartbutton:"Remove Cart",changebtn:false});
            this.props.addcart(this.state.changebtn);
        }
        else{
            this.setState({cartbutton:"add to cart",changebtn:true});
            this.props.addcart(this.state.changebtn);
        }
    }
    render()
    {
        return(
            <React.Fragment>
             <div className="card">
             <img className="card-img-top" src={require(`${this.props.image}`).default} alt="items" />
              <div className="card-img-overlay">
                 {this.props.sale ? <span className="badge badge-dark">Sale</span>:<></>}
              </div> 

                 <div className="card-body">
                 <p className="cardhead">{this.props.heading}</p>
                 <p className="cardicon">
                     {this.props.star ? <><i class="fas fa-star"></i><i class="fas fa-star"></i>
                 <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></>
                 :<></>}
                 </p>
                 <p className="strike"><span>{this.props.discount}</span>{this.props.price}</p>
                  <div className="button">
                      {this.props.cart ? <>
                     <button className="btn  btn-outline-dark" onClick={this.buttonchange}>{this.state.cartbutton}</button>
                     </>:
                     <button className="btn  btn-outline-dark">View options</button>
                      }

                   </div>
                 </div>
             </div>
            </React.Fragment>
        )
    }
}

export default Card;