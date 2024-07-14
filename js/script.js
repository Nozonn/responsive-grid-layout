function addText() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat ex eum temporibus, ad accusantium cupiditate molestiae totam ratione impedit maiores reiciendis aperiam molestias eos saepe quae facilis? Rem, dolorem?";
    let p;

    for (let i = 0; i < 5; i++) {
        p = document.createElement("p");
        p.textContent = text;
        document.querySelector("#para").appendChild(p);
    }
}