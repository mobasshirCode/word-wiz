import React from "react";

export default function About(props) {
  // let [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid white",
  // });
  document.title = "Word Wiz - About";
  let myStyle = {
    color: props.mode === "light" ? "#030a24" : "#d4ddfa",
    backgroundColor: props.mode === "light" ? "#d4ddfa" : "#030a24",
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-3">About us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Introduction to the App
              </button>
            </h2>
            <div
              id="collapseOne"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Welcome to our Text Analyzer App!</strong>
                <br />
                Our Text Analyzer App is a powerful tool designed to make your
                text-related tasks easier and more efficient. Whether you're a
                writer, student, or professional, our app has something to offer
                you. Here are some key features:
                <br />
                <strong>Word Count :</strong> Quickly find out how many words
                are in your text. <br />
                <strong>Character Count :</strong> Count the total number of
                characters with just a click. <br />
                <strong>Estimated Reading Time :</strong> Get an estimate of how
                long it will take to read your text. <br />
                <strong>Text Formatting :</strong> Easily convert text to
                uppercase or lowercase. <br />
                <strong>Clean Text :</strong> Remove extra spaces and tidy up
                your text. <br />
                <strong>Copy to Clipboard :</strong> Quickly copy your text to
                use in other applications. <br />
                <br />
                With our app, you can analyze and enhance your text with ease.
                Give it a try and experience the difference!
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Meet Our Team
              </button>
            </h2>
            <div
              id="collapseTwo"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Our app is the result of hard work and dedication from a
                passionate team of developers and text enthusiasts. <br />
                Allow us to introduce ourselves : <br />
                <strong>Mobasshir Rahman</strong> : Although I am a lone member
                of the team , I have good grasp of basic concepts and
                profeciency in HTML , CSS , Vanilla JS and React which I used in
                making this app.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Our Commitment to You
              </button>
            </h2>
            <div
              id="collapseThree"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {">"} At Text Analyzer, we're continuously working to improve
                and expand our app. <br /> {">"} We're committed to creating
                innovative solutions to simplify your text-related tasks. <br />{" "}
                {">"} We strive to make your experience with our app the best it
                can be.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Thank You for Choosing Word Wiz
              </button>
            </h2>
            <div
              id="collapseFour"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We appreciate your trust in Word Wiz. <br /> Our mission is to
                provide you with a powerful and user-friendly text analysis
                tool. <br />
                Here's a quick recap : <br />
                Analyze text with ease using our app's features. <br />
                Meet our dedicated team. <br />
                Stay connected with our community and support. <br />
                <br />
                Ready to get started? Try <strong>Word Wiz</strong> today and
                take your text analysis to the next level. <br />
                Thank you for being a part of our journey!
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Check out my other Projects
              </button>
            </h2>
            <div
              id="collapseFive"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Do check my <strong>Project showcase</strong> where I keep my
                projects as a form of personal trophies. <br />
                Visit the link below : <br />
                <a target="_blank" rel="noopener noreferrer" href="https://mr-showcase.netlify.app/">
                  <button className="btn btn-primary m-2">
                    Project ShowCase
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
