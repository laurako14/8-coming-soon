function countTimeDiff() {
    const date = new Date();
    const currentYear = date.getFullYear(); 
    const newYear = currentYear + 1;
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();
    const currentTimeMiliseconds = date.getTime();
    let timeLeft = newYearMiliseconds - currentTimeMiliseconds;

    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    timeLeft -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(timeLeft / 1000 / 60 / 60);
    timeLeft -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(timeLeft / 1000 / 60);
    timeLeft -= minutes * 1000 * 60
    const seconds = Math.floor(timeLeft / 1000);

    return { 
        days: days < 10 ? '0' + days : days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds };
}

export { countTimeDiff }