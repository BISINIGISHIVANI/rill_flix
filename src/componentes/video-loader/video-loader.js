import "./loader.css";
import "./spin-loader.css";
import "./icon-loader.css";
const VideoLoader = () => {
  return <span className="loader"></span>;
};
const SpinLoader = () => {
  return <span className="spin-loader"></span>;
};
const IconLoader = () => {
  return <span className="icon-loader"></span>;
};
export { SpinLoader, VideoLoader, IconLoader };
