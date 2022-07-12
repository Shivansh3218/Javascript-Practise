for (let i = 1; i <= 5; i++) {
    let star = ''
    for (let j = 1; j < 5 - i; j++) {
        star = star + " "
    }
        for (let k = 1; k <= i; k++) {
            star = star + " *"
        }
        console.log(star)
    }
