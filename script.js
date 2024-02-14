function generateCat(){
    let image = document.createElement('img');
    let catResultID = document.getElementById('flex-cat-results');
    image.setAttribute('id','generatedCats');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    catResultID.appendChild(image);
}

function resetCatButton(){
    if (document.getElementById('generatedCats') != null) {
        document.getElementById('generatedCats').remove();
    }
}