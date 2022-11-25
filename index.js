function Observable(observer){
    let counter = 1;
    const Producer = setInterval(() => {
        observer.next(counter++);
    }, 1000);   
    
    return () => {
        clearInterval(Producer);
    }
}

const closeFn = Observable({
    next: (data)=> console.log(data)
});

setTimeout(() => {
    closeFn();
}, 5000);