import "../style/education.css";

function Education() {
  return (
    <main className="edu-main">
      <section className="edu-text">
        <h1>Education</h1>
        <p>
          With a keen eye for detail, Ilyas strives to enhance the overall user
          experience on every project. Proficient in HTML, CSS, and JavaScript, he
          brings designs to life with a focus on usability and performance.
        </p>
      </section>

      {/* Box 1 */}
      <div className="box-con-edu">
        <div>
          <h1 className="uni-name">University of Karachi</h1>
          <span>Student</span>
        </div>
        <div className="computer">
          <h2>Bachelor In Computer Science</h2>
          <p>
            A Bachelor's in Computer Science provides foundational knowledge in
            programming, algorithms, and computer systems, preparing students for
            careers in software development, data science, and IT. It combines theory
            with practical skills in problem-solving, coding, and technology management.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Education;
