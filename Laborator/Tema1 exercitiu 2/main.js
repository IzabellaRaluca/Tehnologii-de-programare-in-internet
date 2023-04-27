const btn = document.getElementById('btn');
const input = document.getElementById('input');
const answer = document.getElementById('answer');

btn.addEventListener('click', () => {
    capitalise()
})

function capitalise(string) {
        answer.innerHTML = '';
        const text = input.value
        let result = ''
        
        const capitalize = text.split(" ");
        for (let i = 0; i < capitalize.length; i++) {
            capitalize[i] = capitalize[i][0].toUpperCase() + capitalize[i].substr(1);
            result += `${capitalize[i]} `
        }
        
        
    
       
        const create = document.createElement('h1')
        create.innerText = result
        answer.appendChild(create)
}