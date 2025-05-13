function startCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(targetDate.getHours() + 15);
    targetDate.setMinutes(targetDate.getMinutes() + 49);
    targetDate.setSeconds(targetDate.getSeconds() + 28);

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            return;
        }

        const totalDays = 7;
        const totalHours = 24;
        const totalMinutes = 60;
        const totalSeconds = 60;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, "0");
        document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

        updateProgress("days-circle", days, totalDays);
        updateProgress("hours-circle", hours, totalHours);
        updateProgress("minutes-circle", minutes, totalMinutes);
        updateProgress("seconds-circle", seconds, totalSeconds);
    }

    function updateProgress(id, value, max) {
        const circle = document.getElementById(id);
        const progress = (value / max) * 377; // 377 is the circumference
        circle.style.strokeDashoffset = 377 - progress;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

startCountdown();
