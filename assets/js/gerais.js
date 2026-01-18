const input = document.querySelector('#input');
const add = document.querySelector('#add');
const ul = document.querySelector('ul');
const clean = document.querySelector('#clean-tasks');
const cont = document.querySelector('#task-count');

// FUNÇÕES
function atualizaCont() {
    const total = ul.children.length - 2;
    const done = ul.querySelectorAll('.marked').length;

    if (total === 0) {
        cont.textContent = 'Nenhuma tarefa';
    } else {
        cont.textContent = `${done} / ${total} concluídas`;
    }
}

function adicionar() {
    const texto = input.value.trim();
    if (texto === '') return;

    const li = document.createElement('li');

    li.innerHTML = `
        <span>${texto}</span>
        <div class="concluir"><img src="assets/images/ok.png"></div>
        <div class="excluir"><img src="assets/images/lixo.png"></div>
    `;

    ul.appendChild(li);
    input.value = '';

    const concluir = li.querySelector('.concluir');
    const remover = li.querySelector('.excluir');

    concluir.addEventListener('click', () => {
        li.classList.toggle('marked');
        atualizaCont();
    });

    remover.addEventListener('click', () => {
        li.remove();
        atualizaCont();
    });

    atualizaCont();
}

function limparConcluidas() {
    const concluidas = ul.querySelectorAll('.marked');
    concluidas.forEach(item => item.remove());
    atualizaCont();
}

function enter(e) {
    if (e.key === 'Enter') {
        adicionar();
    }
}

// EVENTOS
add.addEventListener('click', adicionar);
document.addEventListener('keyup', enter);
clean.addEventListener('click', limparConcluidas);
atualizaCont();