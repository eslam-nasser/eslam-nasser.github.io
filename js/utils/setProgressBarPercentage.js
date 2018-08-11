export default function setProgressBarPercentage(percent) {
    const ppc = document.querySelector('.progress-pie-chart');
    const deg = (360 * percent) / 100;
    if (percent > 50) {
        ppc.classList.add('gt-50');
    }
    document.querySelector('.ppc-progress-fill').style.transform = `rotate(${deg}deg)`;
    document.querySelector('.ppc-percents span').innerHTML = `${percent}%`;
}
