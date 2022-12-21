import portalgun from "../assets/image/portalgun.jpg";
import cake from "../assets/image/cake.png";
import cube from "../assets/image/cube.png";
import wheatley from "../assets/image/wheatley.png";
import turret from "../assets/image/turret.png";
import glados from "../assets/image/glados.png";

const PRODUCTS = [
  {
    id: 1,
    name: "Portal gun",
    description: "The Aperture Science Handheld Portal Device.",
    price: 800,
    image: portalgun,
    // other fields
  },
  {
    id: 2,
    name: "Cake",
    description:
      'The cake is a lie. Recipe: In addition to the simple mention of the Cake, an actual recipe is given. The recipe can be found on several computer screens after Chell\'s escape from death. Additionally, during the battle with GLaDOS, the Intelligence Core will recite the recipe for the Cake. The recipe often contains unusual (e.g. "candy coated peanut butter pieces, shaped like fish") or potentially lethal (e.g. "cranial caps") ingredients.',
    price: 25,
    image: cake,
    // other fields
  },
  {
    id: 3,
    name: "Cube",
    description: "The Weighted Companion Cube.",
    price: 1000,
    image: cube,
    // other fields
  },
  {
    id: 4,
    name: "Sphere",
    description:
      " It is one of many cores that was attached to GLaDOS in order to regulate her behavior.",
    price: 80,
    image: wheatley,
    // other fields
  },
  {
    id: 5,
    name: "Turret",
    description:
      "Tripod robots that appear in every game in the Portal series.",
    price: 50,
    image: turret,
    // other fields
  },
  {
    id: 6,
    name: "GLaDOS",
    description: "Genetic Lifeform and Disk Operating System.",
    price: 300,
    image: glados,
    // other fields
  },
];

export { PRODUCTS };
