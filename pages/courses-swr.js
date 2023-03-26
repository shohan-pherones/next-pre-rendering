import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:4000/courses");
  const data = await res.json();
  return data;
};

const CoursesSWR = () => {
  const { data, error, isLoading } = useSWR("courses", fetcher);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div>
      <h1>CoursesSWR</h1>

      {data.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursesSWR;
