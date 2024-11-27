const mata = document.querySelectorAll('.mata-gerak');

window.addEventListener('mousemove', (e) => {
    mata.forEach(mata => {
        const x = mata.getBoundingClientRect().left + (mata.clientWidth / 2);
        const y = mata.getBoundingClientRect().top + (mata.clientHeight / 2);
        const radian = Math.atan2(e.pageX - x, e.pageY - y);
        const rot = (radian * (100 / Math.PI) * -1) + 90;
        mata.style.transform = `rotate(${rot}deg)`;

        // console.log(rot);
    });
})