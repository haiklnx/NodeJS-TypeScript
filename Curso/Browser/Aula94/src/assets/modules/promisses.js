function promisse() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('executando promisse');
            resolve();
        }, 2000);
    })
}

export default async () => {
    await promisse().then(() => console.log('oi'));
    console.log('terminou')
}

