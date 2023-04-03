// import logo from './logo.svg';
import "./App.css";
import Asset from "./component/Asset";
import Navbar from "./component/Navbar";


function App() {
  let asset = [
    {
      header: "Technical Project Management",
      description:
        "Description: Story of Alignment Specific Accountable Staggering approach",
    },
    {
      header: "Thread build",
      description:
        "Description: Watch the video and thread build, and joy out key threads while watching the video",
    },
    {
      header: "Structure You Pointers",
      description:
        "Description: Write a 400-500 word article, from the thread. Publish your understanding, and showcase your learning to the entire world",
    },
    {
      header: "4SA Method",
      description:
        "Description: To explore more read more",
    },
  ];


  return (
    <>
      <Navbar />
      <div className="box w-75  mx-auto">
        <div className="headerContainer d-flex justify-content-around my-2 ">
          <h2 className="Header">Technical Project Management</h2>{" "}
          <button className="submit"> Submit Project</button>
        </div>
        <div className="intro d-flex flex-column  mx-auto border ">
          <h5 className="fw-bolder">Explore the world of management</h5>
          <span className="fw-normal">
            As a project manager, you play an important role in leading a
            project through initiation, planning, execution, monitoring,
            controlling and completion. How? Do you want to manage each and
            every step of your life?
          </span>
        </div>
        <div className="asset mx-auto">

        <Asset asset = {asset}/>
        </div>

       
      </div>

    </>
  );
}

export default App;
