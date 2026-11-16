//Myheader 컴포넌트
function Myheader({title, desc}) {
  return (
    <header>
      <h1 className="log">{title}</h1>
      <p>{desc}</p>
    </header>
  );
}

export default Myheader;