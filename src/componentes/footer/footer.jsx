import { logo } from "../../assests/icons/icon";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footer-li">
        <div className="flex-row justify-center flex-space-between bd-bottom">
          <section>
            <div className="flex-row gap  justify-center">
              <img className="vid-logo  cursor-pointer margin-left" src={logo} alt="img" />
              <h2 className="title cursor-pointer">
                <b> Rill Flix</b>
              </h2>
            </div>
          </section>
          <section>
            <ul className="flex-row justify-center gap list-none">
              <li>Twitter</li>
              <li>Github</li>
              <li className="margin-right">LinkedIn</li>
            </ul>
          </section>
        </div>
        <section></section>
        <section className="flex-row gap-md footer-middle flex-center">
          <div className="">
            <h4>Movie Categories</h4>
            <div className="flex-row gap-md">
              <div>
                <ul className="list-none">
                  <li>Action</li>
                  <li>Adventure</li>
                  <li>Animation</li>
                  <li>Crime</li>
                </ul>
              </div>
              <div>
                <ul className="list-none">
                  <li>Fantacy</li>
                  <li>Horror</li>
                  <li>Mystery</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4>TV Series</h4>
            <ul className="list-none">
              <li>Scary TV Series</li>
              <li>Big TV Premieres</li>
              <li>Reality TV Shows</li>
              <li>Original Shows</li>
            </ul>
          </div>
          <div className="bd-left">
            <h4>Support</h4>
            <ul className="list-none">
              <li>Contact</li>
              <li>FAQ</li>
              <li>HelpCenter</li>
            </ul>
          </div>
        </section>
        <section className="padding-md footer-btm">
          <span className="padding-md margin-left">Copyright © 2022, RillFlix. All Rights Reserved</span>
        </section>
      </footer>
    </div>
  );
}
