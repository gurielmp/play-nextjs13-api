import CardList from "../components/Posts/CardList"
import ViewUserButton from "../components/Posts/ViewUserButton"

const base_url = "https://jsonplaceholder.typicode.com/posts"
interface Iposts {
  userId: number
  id: number
  title: string
  body: string
}

const Posts = async () => {
  const response = await fetch(base_url)
  const post: Iposts[] = await response.json()

  return (
    <>
      <h1>Post page</h1>
      {post.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <i>{post.title}</i>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        )
      })}
    </>
  )
}

export default Posts
