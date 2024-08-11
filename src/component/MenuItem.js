import React from "react"


 const MenuItem = (props) => {
    return (
        <div className="col-11 col-md-6">
            <div class="card">
  <img src={props.img} alt=""/>
  <div class="card-body text-center">
    <h5 class="card-title">{props.title}</h5>
    <h5 className="card-title">R{props.price}</h5>
    <p class="card-text">{props.desc}</p>
    <button class="btn btn-primary">Add to Cart</button>
  </div>
</div>
        </div>
    )
}

export default MenuItem;