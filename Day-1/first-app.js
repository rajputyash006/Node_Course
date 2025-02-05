const fs=require('fs');


fs.writeFileSync('file.txt','Hello from node js');

// Callback function
fetchData= (callback)=>{
    setTimeout(() => {
        callback('Done!')
    }, 1500);
}

// setTimeout Function
setTimeout(()=>{
    console.log('Timer is done');
    fetchData(text=>{
        console.log(text);
    })
},2000);

console.log('Hi');

// Promise
fetchUserName = () =>{
    const promise =new Promise ((res,rej)=>{
        return res('done! from promise')
    })
    return promise;
}

setTimeout(()=>{
    fetchUserName().then((text)=>{
        console.log(text);
    })
},2000);