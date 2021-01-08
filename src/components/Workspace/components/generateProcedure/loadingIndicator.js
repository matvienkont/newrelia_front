export const isLoading = (isLoading) => {
    const text = document.getElementById('generate-button-text');
    const div_button = document.getElementById('generate-button-id');

    if(isLoading) {
        text.innerHTML = 'Processing...';
        div_button.onclick = null;
    } else {
        text.innerHTML = 'Generate image';
    }
}