function Homepage() {
  return (
    <>
      <div className="container">
        <h2>Benvenuto nel nostro Fake Shop Online</h2>
        <p className="text-gray-600 mb-6">
          Scopri i migliori prodotti al miglior prezzo. Questa è una demo, non
          troverai mai di meglio
        </p>
        <img
          src="https://picsum.photos/600/400"
          alt="Immagine di esempio"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </>
  );
}

export default Homepage;
