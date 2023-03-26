import { useEffect, useState } from "react";

const Courses = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:4000/courses");
        if (!res.ok) throw new Error("An error has occured.");
        const data = await res.json();
        setIsLoading(false);
        setData(data);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Courses</h1>

      {data &&
        data.map((course) => (
          <div key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.duration}</p>
          </div>
        ))}
    </div>
  );
};

export default Courses;
