const Cars = ({ cars }) => {
  return (
    <div>
      <h1>Cars</h1>

      {cars.map((car) => (
        <div key={car.id}>
          <h2>
            {car.id} - {car.title}
          </h2>
          <p>{car.speed}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Cars;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/cars");
  const data = await res.json();

  return {
    props: {
      cars: data,
    },
  };
}
