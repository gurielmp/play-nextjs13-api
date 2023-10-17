"use client"

interface ViewUserButtonProps {
  userId: number
}
const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`userId: ${userId}`)

  return (
    <>
      <button onClick={handleClick}>User detail</button>
    </>
  )
}

export default ViewUserButton
