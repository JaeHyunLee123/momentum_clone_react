import img1 from "../assets/background/1.jpg";
import img2 from "../assets/background/2.jpg";
import img3 from "../assets/background/3.jpg";
import img4 from "../assets/background/4.jpg";
import img5 from "../assets/background/5.jpg";

const backgroundArr = [img1, img2, img3, img4, img5];

const randomIndex = Math.floor(Math.random() * backgroundArr.length);

const Background = backgroundArr[randomIndex];

export default Background;