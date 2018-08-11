export default function setProgressBarPercentage(percent) {
    document.querySelector('.progress-bar-wrapper .bar').style.width = `${percent}%`;
    document.querySelector('.progress-bar-wrapper .number').innerHTML = `${percent}%`;
    if (percent === 100) {
        document.querySelector('.progress-bar-wrapper').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.progress-bar-wrapper').style.display = 'none';
        }, 500);
    }
}
