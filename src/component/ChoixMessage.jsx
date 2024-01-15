function ChoixMessage({idannonce}){
    console.log(idannonce)
    function check_choix(value){
       alert("Message envoyer")
    }
    return(
        <div className="choix-message">
            <h6>Vous voulez le contacter par :</h6>
            <span onClick={()=>check_choix('bonjour !')}>Bonjour ! </span>
            <span onClick={()=>check_choix('J\'aime bien votre voiture ! !')}> J'aime bien votre voiture !</span>
            <span onClick={()=>check_choix('Suis interesser !')}> Suis interesser ! </span>
        </div>
    )
}
export default ChoixMessage