// DOM elements
const shareBtn = document.getElementById('share-btn')
const shareBtnContent = document.getElementById('share-btn-content')

// Interacting with share button element
shareBtn.addEventListener('click', () => {
    if (shareBtnContent.classList.contains('hidden')) {
        shareBtnContent.classList.remove('hidden')
    } else {
        shareBtnContent.classList.add('hidden')
    }
})