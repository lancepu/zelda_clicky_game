export default function getImage(id) {
  let imgLocation = "";
  switch (id) {
    case 1:
      imgLocation = "./zelda.webp";
      break;
    case 2:
      imgLocation = "./urbosa.webp";
      break;
    case 3:
      imgLocation = "./revali.webp";
      break;
    case 4:
      imgLocation = "./mipha.webp";
      break;
    case 5:
      imgLocation = "./lynel.webp";
      break;
    case 6:
      imgLocation = "./link.webp";
      break;
    case 7:
      imgLocation = "./kass.webp";
      break;
    case 8:
      imgLocation = "./guardian.webp";
      break;
    case 9:
      imgLocation = "./gannon.webp";
      break;
    case 10:
      imgLocation = "./epona.webp";
      break;
    case 11:
      imgLocation = "./daruk.webp";
      break;
    case 12:
      imgLocation = "./bokoblin.webp";
      break;
    default:
      imgLocation = "./link.webp";
  }

  return imgLocation;
}
