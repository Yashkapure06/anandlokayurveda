import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function layout({children}) {
    return (
        <>
        <Header/>
        <br/><br/>
        {children}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        <Footer/>

        </>
    )
}
