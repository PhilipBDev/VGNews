import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

//<a href="https://www.flaticon.com/free-icons/gamepad" title="gamepad icons">Gamepad icons created by Smashicons - Flaticon</a>
