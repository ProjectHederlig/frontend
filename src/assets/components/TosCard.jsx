function TosCard({ tos }) {
  return (
    <div className="TosCard">

        <div className="tos-main">
            
            <h3 className="tos-description">{tos.description}</h3>
        </div>
        <div className="tos-details">
          <p> <li> {tos.firstText}</li></p>
           <p> <li> {tos.secondText}</li></p>
           <p>  <li> {tos.thirdText}</li></p>
        </div>  
  
    </div>
  )
}


export default TosCard