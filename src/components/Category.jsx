
function Category({img, text}) {
  return (
    <div className="category flex flex-col justify-center items-center gap-1 px-2 py-2 hover:bg-gray-400 rounded-md cursor-pointer" >
      <div className="category-image">
        <img src={img} alt="category-img w-full" />
      </div>

      <h3 className="category-text text-white text-sm">{text}</h3>
    </div>
  )
}

export default Category
