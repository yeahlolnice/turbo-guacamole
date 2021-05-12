import pic from "./../media/portfolio-pic.png"

function about() {
    return (
        <div style={{minHeight: "100vh"}}>
            <div style={{display: "flex", justifyContent: "center", padding: "20px"}}>
                <img src={pic} alt="" id="about-pic"/>
            </div>
            <h1 style={{color: "#f2edd7", textAlign: "center",marginTop: "30px"}}>About Me...</h1>
            <p style={{color: "#f2edd7", textAlign: "center", margin: "30px 10px 50px 10px"}}>
            Developer and tech enthusiast constantly upgrading my skills and experience with new software and hardware. I'm an inventor at heart, always trying to improve or create new and helpful products to complete boring tasks more efficiently. all of my spare time is consumed by cyber-security, gaming, and casual drinks with friends. ;)  
            </p>
        </div>
    )
}
export default about;