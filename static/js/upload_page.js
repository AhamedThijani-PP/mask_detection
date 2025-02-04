document.addEventListener("DOMContentLoaded", function () {
    let fileInput = document.getElementById("file-input");
    let uploadButton = document.querySelector(".custom-file-upload");

    uploadButton.addEventListener("click", function (event) {
        if (!fileInput.value) {
            fileInput.click();  // Ensure it only triggers when empty
        }
    });

    fileInput.addEventListener("change", function () {
        previewImage(event);
    });
});

function previewImage(event) {
    let reader = new FileReader();
    reader.onload = function () {
        let preview = document.getElementById("preview");
        preview.src = reader.result;
        document.querySelector(".image-preview").style.display = "block";
    };
    reader.readAsDataURL(event.target.files[0]);
}
