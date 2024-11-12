import "../style/contant.css";
function Contact(){
    return(
        <main className="contact-main">
             <div className="form-container">
                <h1 className="con-title">Contact us</h1>
                <form action="" className="form">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="abc@gmail.com"/>
                    <input className="msg" type="text" placeholder="Your message"/>
                </form>
                <button className="button">Submit</button>
            </div> 
        </main>
    );
}
    export default Contact;