import logo from '../../../../assets/images/logo.png'
function Header() {

    return (
        <div className="2xl:container mx-auto bg-white p-3">
            <img className="mx-3 p" src={logo} alt="Brand logo" srcset="" />
        </div>
    );
}
export default Header;