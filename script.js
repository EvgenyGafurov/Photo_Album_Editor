let wrapper = document.querySelector(".img_wrapper")

let idButtonDeleteImage = Math.floor(Math.random() * (100000 - 10) + 10) 
let imageId = Math.floor(Math.random() * (100000 - 10) + 10)


function download (input) {
let reader = new FileReader();
let file = input.files[0];
reader.readAsDataURL(file);

   

reader.onload = function () {

    

    localStorage.setItem(imageId,reader.result)
 
    

    let img =document.createElement('img')
    let buttonDeleteImage = document.createElement('button')
    wrapper.appendChild(img)
    wrapper.appendChild(buttonDeleteImage)
    img.src = reader.result

    img.id = imageId
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.marginTop = '50px'

    buttonDeleteImage.id = idButtonDeleteImage
    buttonDeleteImage.style.width = '100%'
    buttonDeleteImage.style.height = '20px'
    buttonDeleteImage.style.backgroundColor = 'rgba(0, 0, 0, 0.171)'
    buttonDeleteImage.textContent='Удалить'

    


    buttonDeleteImage.addEventListener('click', () => {
    if (buttonDeleteImage.id==buttonDeleteImage.id) { wrapper.removeChild(img), wrapper.removeChild(buttonDeleteImage)} 
    })

}}




