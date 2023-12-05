let btn = document.querySelector("button");
let dogImage = document.querySelector("#dogImage");

btn.addEventListener("click", async () => {
  let link = await getImage();
  dogImage.setAttribute("src", link);
});

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    console.log("error : ", e);
    return "No Image found";
  }
}
