import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer className="bg-deep-black border-t border-color-grey-700 ">
      <Newsletter />
      <div className="container w-full mx-auto text-center text-color-grey-500 text-sm pb-10 md:flex justify-center md:max-w-screen-md ">
        <div className="container justify-center flex gap-5 md:text-left pb-5">
          <p>Privacy Policy</p>
          <p>Terms of Conditions</p>
        </div>
        <p className="inline-block w-full">22NIGHTS BV. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
