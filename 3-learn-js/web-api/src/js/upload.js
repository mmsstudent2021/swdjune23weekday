const fileInput = document.querySelector("#fileInput");
const output = document.querySelector("#output");
const uploaderUi = document.querySelector("#uploaderUi");

console.dir(FileReader);

uploaderUi.addEventListener("click",() => {
    fileInput.click()
})

fileInput.addEventListener("change", () => {
  const currentFile = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    // console.log(event.target.result);
    const img = new Image();
    img.src = event.target.result;
    img.classList.add("w-full","rounded-lg")
    output.append(img);
  });

  reader.readAsDataURL(currentFile);
});
