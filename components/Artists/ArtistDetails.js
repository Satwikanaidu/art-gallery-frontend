import React, { useState } from "react";

const Artists = () => {
  const artists = [
    { id: 1, name: "Sandro Botticelli", bio: "Details", fullBio: "Sandro Botticelli (1445–1510) was an Italian painter of the Early Renaissance. He is best known for his works 'The Birth of Venus' and 'Primavera'. His work embodies the spirit of the Renaissance and is known for its mythological themes and grace." , img: "/photos/artist1.jpg" },
    { id: 2, name: "Leonardo da Vinci", bio: "Details", fullBio: "Leonardo da Vinci (1452–1519) was an Italian polymath whose interests spanned various fields, including painting, anatomy, engineering, and architecture. His most famous works include 'Mona Lisa' and 'The Last Supper', and his inventions were centuries ahead of their time." , img: "/photos/artist2.jpg" },
    { id: 3, name: "Albrecht Dürer", bio: "Details", fullBio: "Albrecht Dürer (1471–1528) was a German painter, printmaker, and theorist of the Renaissance. Known for his detailed woodcut prints and engravings, he is considered one of the most important artists of the Northern Renaissance." , img: "/photos/artist3.jpeg" },
    { id: 4, name: "Michelangelo", bio: "Details", fullBio: "Michelangelo (1475–1564) was an Italian Renaissance sculptor, painter, architect, and poet. His most famous works include the Sistine Chapel's ceiling, the statue of David, and the iconic 'Pietà'." , img: "/photos/artist4.jpg" },
    { id: 5, name: "Raphael", bio: "Details", fullBio: "Raphael (1483–1520) was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form and ease of composition. Raphael's best-known works include the 'School of Athens' and the 'Transfiguration'." , img: "/photos/artist5.jpeg" },
    { id: 6, name: "Caravaggio", bio: "Details", fullBio: "Caravaggio (1571–1610) was an Italian Baroque painter known for his dramatic use of lighting and realistic portrayal of subjects. His work had a profound influence on Baroque art, and his works include 'The Calling of Saint Matthew' and 'Judith Beheading Holofernes'." , img: "/photos/artist6.jpg" },
  ];

  // State to track which artist bio is expanded
  const [expandedBio, setExpandedBio] = useState(null);

  // Toggle function to expand/collapse bio
  const toggleBio = (id) => {
    setExpandedBio(expandedBio === id ? null : id);  // If clicked bio is open, close it; otherwise, open it
  };

  return (
    <div>
      <h1>Artists</h1>
      <div className="artwork-grid">
        {artists.map((artist) => (
          <div key={artist.id} className="artwork-card">
            <img
              src={artist.img}
              alt={artist.name}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
            <button onClick={() => toggleBio(artist.id)}>
              {expandedBio === artist.id ? "Show Less" : "Read More"}
            </button>
            {expandedBio === artist.id && (
              <div className="artist-full-bio">
                <p>{artist.fullBio}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
