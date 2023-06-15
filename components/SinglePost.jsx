function SinglePost({ title, body }) {
  return (
    <div className="border-2 mb-4 px-2 py-4 shadow-sm rounded-md">
      <h3 className="mb-2 font-semibold text-lg">{title}</h3>
      <p className="text-md">{body}</p>
    </div>
  )
}

export default SinglePost
