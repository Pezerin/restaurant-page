import './styles.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu';
import { loadAbout } from './about';

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

loadHome(content);