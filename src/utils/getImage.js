export default function getImage(id) {
  let imgLocation = "";
  switch (id) {
    case 1:
      imgLocation = "./zelda.png";
      break;
    case 2:
      imgLocation = "./urbosa.png";
      break;
    case 3:
      imgLocation = "./revali.png";
      break;
    case 4:
      imgLocation = "./mipha.png";
      break;
    case 5:
      imgLocation = "./lynel.png";
      break;
    case 6:
      imgLocation = "./link.png";
      break;
    case 7:
      imgLocation = "./kass.png";
      break;
    case 8:
      imgLocation = "./guardian.png";
      break;
    case 9:
      imgLocation = "./gannon.png";
      break;
    case 10:
      imgLocation = "./epona.png";
      break;
    case 11:
      imgLocation = "./daruk.png";
      break;
    case 12:
      imgLocation = "./bokoblin.png";
      break;
    default:
      imgLocation = "./link.png";
  }

  return imgLocation;
}
