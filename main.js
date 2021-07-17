let check

async function pegaCheck() {
    let getCheck = await fetch('https://raw.githubusercontent.com/JuninhoFreitas/www.dev-addict.com/main/check.json')
    let data = await getCheck.json();
    return data    
}
window.alert('oi')
window.alert(pegacheck());

