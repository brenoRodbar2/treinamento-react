import { useState } from 'react';
import { DoubleBracketts } from './DoubleBracketts';
import data from './data'

const About = () => {
  const [index, setIndex] = useState(0);
  const person = data[index]
  console.log(index)
  return (
    <div className="relative flex flex-col items-center">
      <div className="flex-col flex ">
        <div className="flex justify-center">
          <img
            className="h-[150px] w-[150px] rounded-full object-cover border-r-8 border-t-8  border-indigo-500"
            src={person.image}
            alt=""
          />
          <div className="bg-indigo-500 rounded-full w-fit p-2 absolute top-2 left-[13rem]">
            <DoubleBracketts />
          </div>
        </div>
        <div className="flex-col flex items-center mt-4">
          <p className="font-semibold text-xl leading-none">{person.name}</p>
          <p className="text-indigo-500 font-medium">{person.job}</p>
        </div>
        <p className="w-[35em] mt-4 text-center font-light">{person.text}</p>
        <div className="flex mt-2 gap-3 justify-center">
          <button
            type="button"
            onClick={() =>
              index === 0 ? setIndex(data.length - 1) : setIndex(index - 1)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() =>
              index === data.length - 1 ? setIndex(0) : setIndex(index + 1)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </button>
        </div>
        <button
        type='button'
          onClick={() => setIndex(Math.floor(Math.random() * 3 + 1))}
          className="mt-2 text-indigo-200 bg-indigo-400 self-center px-4 py-1 rounded-md w-fit"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
}

export default About