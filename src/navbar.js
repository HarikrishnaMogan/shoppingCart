
function Navbar(props)
{
 
    return(
        
    <div class="navbar navbar-expand-md bg-light navbar-light">
       <div class="container">
        <div class="navbar-brand">Start bootstrap</div>
         <button class="navbar-toggler" data-toggle="collapse" data-target="#collapsiblenavbar">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="collapsiblenavbar">
            <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link active" href="#1">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#1">About</a></li>
            <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" id="dropdown" data-toggle="dropdown" aria-expanded="false" href="#1">Shop</a>
             <ul class="dropdown-menu" aria-labelledby="dropdown">
               <li><a class="dropdown-item" href="#1">All products</a></li>
               <li><hr class="dropdown-divider"></hr></li>
               <li><a class="dropdown-item" href="#1">Popular Items</a></li>
               <li><a class="dropdown-item" href="#1">New Arrivals</a></li>
             </ul>
            </li>
            </ul>
            <form class="ml-auto">
              <button class="btn btn-outline-dark mt-2">
                <i class="fas fa-shopping-cart"></i> Cart <span className="badge rounded-pill bg-dark text-light cartvalue">{props.count}</span>
              </button>
            </form>
         </div>
        </div>
      </div>

    );
}
export default Navbar;