
function loadUserData() {
return new Promise((autPut) => {
    setTimeout(() => {
       autPut("Пользователь загружен") 
    }, 2000);
});
}

async function main() {
    console.log('ожидание');
    let result = await loadUserData();
     console.log(result); 
}


  main()