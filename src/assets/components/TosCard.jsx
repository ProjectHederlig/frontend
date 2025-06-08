

function TosCard({ tos }) {
  return (
    <div className="TosCard">

        <div className="tos-main">
            
            <p className="tos-description">{tos.description}</p>
        </div>
        <div className="tos-details">
            <p>{tos.firstText}</p>
             <p>{tos.secondText}</p>
              <p>{tos.thirdText}</p>
        </div>  
  
    </div>
  )
}


export default TosCard