import './App.css';

const Footer =()=> {
    const year = new Date().getFullYear()
  return (
   <>
   <footer>
       copyRight @ {year}
   </footer>
   </>
  );
}

export default Footer;
