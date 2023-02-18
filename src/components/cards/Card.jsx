import "./Card.css";

const Card = ({data}) => {
  return (
    <div className="container">
        {data.map((item)=>{
            const {id, title, desc, image} = item
            return(
                <div className="card-div"key={id}>
                    <h3 >{title}</h3>
                    <img src={image} alt="" />
                    <p>{desc}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Card