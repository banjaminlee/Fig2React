import ShowCards from "./ShowCards"

function Shows({name, date,list }) {
  return (
    <div className="mt-12">
    
        <div className="shows-heading flex justify-between my-5">
        
            <h2 className="show-name text-xl font-semibold lg:text-2xl">{name}</h2>
            <h2 className="show-data text-xl font-semibold lg:text-2xl">{date}</h2>
        </div>
        <div className="shows">
          {list.map((data, key)=> {
            return(
              <ShowCards name={data.name} img={data.img} place={data.place} age={data.age} ticket={data.ticket} time={data.time} key={key} img_desk={data.img_desk} tooltip_text={data.tooltip}/> 
            )
          })}
        </div>
        
      
    </div>
  )
}

export default Shows
