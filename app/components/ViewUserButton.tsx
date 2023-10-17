"use client"
const ViewUserButton = () => {
  const handleClick = () => alert("Clicked")

  return (
    <>
      <button onClick={handleClick}>User detail</button>
    </>
  )
}

export default ViewUserButton
