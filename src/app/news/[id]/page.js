
const page = ({params,searchParams}) => {
  return (
    <div>
      <h2>This is Dynamic page in news</h2>
      <h2>ID {params.id}</h2>
      
      {/* http://localhost:3000/news/6?name="staar" */}
      <h2>searchParams {searchParams.name}</h2>
    </div>
  );
};

export default page;