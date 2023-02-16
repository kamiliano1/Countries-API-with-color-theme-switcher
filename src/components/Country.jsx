export default function Country(props) {
    return (
      <div className='dark:bg-darkBlue bg-white rounded-lg text-black dark:text-white cursor-pointer'>
        <div className='min-[630px]:h-[200px]'>
          <img src={props.flag} alt={`${props.name} flag`} className="rounded-t-[0.5rem] h-[100%] w-[100%] object-fill " />
        </div>
        <div className='py-6 px-5 space-y-1'>
          <h1 className='font-800 text-lg my-3'>{props.name}</h1>
          <p><span className='font-800'>Population: </span>{props.population}</p>
          <p><span className='font-800'>Region: </span>{props.region}</p>
          <p><span className='font-800'>Capital: </span>{props.capital}</p>
        </div>
      </div>
    )
  }