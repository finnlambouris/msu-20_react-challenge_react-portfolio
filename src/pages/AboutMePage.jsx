import finnPhoto from "/img/Finn.jpg"

export default function AboutMePage() {
    return (
        <div className="container">
            <h2>About Finn</h2>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={finnPhoto} alt="A picture of Finn"></img>
                </div>
                <div className="col-md-6">
                    <p>Tech is not just my job; it's also my hobbies and passions. I am drawn to the digital world because I'm hardwired to figure out how and why things work, and troubleshoot issues that arise. An embarrassingly large amount of my time is spent on YouTube learning about topics such as video game history and electronics teardown & repair, as well as walkthroughs for different coding, video editing, and graphic design concepts. I love to get lost in the details and figure out how to create the exact vision I have.</p>
                    <p>I am also a Michigan State graduate who specialized in Media & Information and double minored in graphic design and film studies. Currently, I am enrolled in MSU's College of Engineering's Coding Bootcamp, where I am learning to create webpages from scratch, as well as squash bugs and resolve the issues they cause. I am also proud to be a member of Alpha Kappa Psi Professional Business Fraternity, which I attribute a majority of my soft skills to.</p>
                    <p>This website serves as my personal portfolio where I can house all of the work I'm proudest of.</p>
                </div>
            </div>
        </div>
    );
}
