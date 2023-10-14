import React, { useState } from 'react';
import axios from 'axios';

function TestDonne() {
  const [data, setData] = useState({
    checkbox: [
      { idCalendar: 1, nameCalendar: 'lundi', isChecked: null },
      { idCalendar: 2, nameCalendar: 'Mardi', isChecked: true },
      { idCalendar: 3, nameCalendar: 'Mercredi', isChecked: null }
      // ... autres éléments de la liste ...
    ]
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Envoyez les données JSON au serveur ASP.NET Core
    axios
      .post('http://localhost:5045/api/Data/recuperer-donnees', data.checkbox)
      .then((response) => {
        // Traitez la réponse du serveur ici
        console.log(response.data);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error(error);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* Affichez ici les éléments de votre formulaire */}
        {/* Par exemple, une liste de cases à cocher */}
        {data.checkbox.map((item) => (
          <div key={item.idCalendar}>
            <label>
              {item.nameCalendar}
              <input
                type="checkbox"
                checked={item.isChecked || false}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setData((prevData) => ({
                    ...prevData,
                    checkbox: prevData.checkbox.map((calendarItem) =>
                      calendarItem.idCalendar === item.idCalendar
                        ? { ...calendarItem, isChecked }
                        : calendarItem
                    )
                  }));
                }}
              />
            </label>
          </div>
        ))}
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default TestDonne;
