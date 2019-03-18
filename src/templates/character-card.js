export function makeCharacterCard(character) {
    const html = `
        <li>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}">
            <p>${character.name}</p>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadCharacterCards(characters) {
    const heroesUL = document.getElementById('heroes-ul');
    clearCharacters(heroesUL);
    characters.forEach(character => {
        const dom = makeCharacterCard(character);
        heroesUL.appendChild(dom);
    });
}

function clearCharacters(node) {
    while(node.children.length > 0) {
        node.lastElementChild.remove();
    }
}