function fetchdata(){
    return new Promise((resolve,reject)=>{
        const students=[
            {name:"alice",score:50},
            {name:"bob",score:60},
            {name:"charlie",score:30},
            {name:"david",score:89}
        ];
            setTimeout(()=>{
            resolve(students);
        },3000);
    });
}
let total=0;
fetchdata()
.then((students)=>{let sum = students.reduce((total, student) => total + student.score, 0);
    console.log(sum);
})
.catch((err)=>{
    console.log(err);
});
