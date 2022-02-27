// delete Skills
document.querySelectorAll('.deleteSkill').forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = attr(btn, 'data-skill-id');
        console.log(id)
        document.getElementById('delete-modal-id').value = id;
    });
});

// Update Skills
const attr = ($el, attrName) => $el.getAttribute(attrName);
    document.querySelectorAll('.updateSkill').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = attr(btn, 'data-skill-id');
            const name = attr(btn, 'data-skill-name');
            const ratio = attr(btn, 'data-skill-ratio');

            console.log(id, name, ratio);

            document.getElementById('edit-modal-id').value = id;
            document.getElementById('skill-name-input').value = name;
            document.getElementById('skill-ratio-input').value = ratio;
        });
    });


// delete About
document.querySelectorAll('.deleteAbout').forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = attr(btn, 'data-about-id');
        alert(id)
        console.log(id)
        document.getElementById('delete-about-id').value = id;
    });
});

// Update About
    document.querySelectorAll('.updateAbout').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = attr(btn, 'data-about-id');
            const d_name = attr(btn, 'data-about-d-name');
            const p_name = attr(btn, 'data-about-p-name');
            const short = attr(btn, 'data-about-short');
            const desc = attr(btn, 'data-about-desc');
            // const img = attr(btn, 'data-about-img');
            // const cv = attr(btn, 'data-about-cv');

            document.getElementById('edit-about-id').value = id;
            document.getElementById('skill-d-name-input').value = d_name;
            document.getElementById('skill-p-name-input').value = p_name;
            document.getElementById('skill-short-desc-input').value = short;
            document.getElementById('skill-desc-input').value = desc;
            // document.getElementById('skill-img-input').value = img;
            // document.getElementById('skill-cv-input').value = cv;

        });
    });

// delete Exp
document.querySelectorAll('.deleteexp').forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = attr(btn, 'data-exp-id');
        alert(id)
        console.log(id)
        document.getElementById('delete-exp-id').value = id;
    });
});