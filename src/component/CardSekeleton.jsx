import { Link } from "react-router-dom"
function CardSekeleton (){
  return(
    Array(8).fill(0).map((item , index) =>(
      <div key={index} className="card-object">
          <Link to="#">
              <div className="gray"></div>
          </Link>
            <div className="some-details">
              <span className="gray-span"></span><span className="gray-span"></span>
            </div>
      </div>
    ))
  )
}
export default CardSekeleton