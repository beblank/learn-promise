const hello = "hello"
const greet = (name) => {
    return new Promise<string>((resolve, reject) => {
        resolve(hello)
    }).then((x: string) => {
        console.log(x)
        return x.toUpperCase()
    }).then((x:string) => {
        return x.concat(" "+ name)
    })
}

const addTxt = (s) => {
    const text = document.createElement('text');
    text.textContent = s;
    document.body.appendChild(text);
}

greet("adit").then((x) => {
    console.log(x)
    addTxt(x)
})



