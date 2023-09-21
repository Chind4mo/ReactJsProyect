import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {


    return (


        <div>
            <Navbar />
            <div style={{ padding: "20px 25px" }}>
                {children}
            </div>
        </div>

    )
}

export default Layout;
