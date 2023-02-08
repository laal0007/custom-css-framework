const $colors = document.getElementById('colors-js')

const colormap = [
    "primary",
    "secondary",
    "tertiary",
    "warning",
    "success",
    "light",
    "dark"
]

const properties = [
    "text",
    "bg"
]


let html = []

for (const property of properties) {
    
    for (const color of colormap) {
        html.push(`
        <span class="${property}-${color}">${color} ${property} |</span>
        `)
    }
    html.push(`<br> <br>
        `)
}

$colors.innerHTML = html.join('')

