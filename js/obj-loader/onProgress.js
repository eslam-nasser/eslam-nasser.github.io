import setProgressBarPercentage from '../utils/setProgressBarPercentage';

export default function onProgress(xhr) {
    if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        setProgressBarPercentage(Math.round(percentComplete, 2));
    }
}
