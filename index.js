const harmburg = document.querySelector('#harmburg');
const harmburgList = document.querySelector('#harmburg-list');

harmburg.addEventListener('click', ()=>{
    // harmburgList.style.display = 'block';

    if(harmburgList.classList.toggle('none')){
        harmburgList.style.display = 'block'
    }else{
        harmburgList.style.display = 'none'
    }
})


let theModal = document.getElementById('modal')
let openModal = document.querySelector('#open-mobile');
const closeModal = document.querySelector('#close-modal');

openModal.addEventListener('click', ()=>{

     theModal.style.display = 'flex';

    // alert('wrking')
})

// Clse modal whrn user clicks on an empty window

window.addEventListener('click', (e)=>{
    if(e.target === theModal)[
        theModal.style.display = 'none'
    ]
})

// Close the modal on x button click

closeModal.addEventListener('click', _=>{

    theModal.style.display = 'none'
})

// Connect Metamask

const metamaskButton = document.getElementById('connect-metamask');

metamaskButton.addEventListener('click', (e)=>{

e.preventDefault();



})

  

const connectMetamask = async ()=>{

        let account;

        if(window.ethereum !== 'undefined'){

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            account = accounts[0];
            document.getElementById('accountArea').innerHTML = account;
        }

    }



