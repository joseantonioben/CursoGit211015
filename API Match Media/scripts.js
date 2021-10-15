
const mql = matchMedia("(min-width:400px)")

const applyMatchMedia = (matchMedia) => {
    mql.matches ?
        document.body.style.backgroundColor = "red"
        :
        document.body.style.backgroundColor = "royalblue"
}

addEventListener("resize", () => applyMatchMedia(mql))
applyMatchMedia(mql)