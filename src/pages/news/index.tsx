function NewArticleList({ articles }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((articles) => {
        return (
          <div key={articles.id}>
            <h2>
              {articles.id} {articles.title} | {articles.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewArticleList

export async function getServerSideProps() {
  //Gọi điểm cuối API bên ngoài để nhận bài đăng  
  const reponse = await fetch("")
  const data = await reponse.json()

  return {
    props: {
      articles: data,
    },
  };
}
