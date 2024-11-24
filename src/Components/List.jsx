import { people } from '../data'
const List = () => {

 console.log(people[2]?.images[0].small?.url);
  return (
    <div className="p-4 text-white rounded-md w-36 h-36 border-solid bg-violet-200">
      <img src={'https://avatars.githubusercontent.com/u/1?v=4'} alt="" />
      <span className="text-violet-950 font-semibold">Name: </span>{" "}
      {people[0].name}
    </div>
  );
}

export default List