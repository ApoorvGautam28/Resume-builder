document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    let fullName = document.getElementById('full-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let education = document.getElementById('education').value;
    let institution = document.getElementById('institution').value;
    let gradYear = document.getElementById('grad-year').value;
    let experience = document.getElementById('experience').value;
    let skills = document.getElementById('skills').value;

    // Display resume
    document.getElementById('output-name').innerText = fullName;
    document.getElementById('output-email').innerText = email;
    document.getElementById('output-phone').innerText = phone;
    document.getElementById('output-address').innerText = address;
    document.getElementById('output-education').innerText = education;
    document.getElementById('output-institution').innerText = institution;
    document.getElementById('output-grad-year').innerText = gradYear;
    document.getElementById('output-experience').innerText = experience;
    document.getElementById('output-skills').innerText = skills;

    // Show resume output
    document.getElementById('resume-output').classList.remove('hidden');

    // Handle image upload
    let imageInput = document.getElementById('profile-image');
    if (imageInput.files && imageInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('output-image-container').classList.remove('hidden');
            document.getElementById('output-image').src = e.target.result;
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        document.getElementById('output-image-container').classList.add('hidden');
    }
});
