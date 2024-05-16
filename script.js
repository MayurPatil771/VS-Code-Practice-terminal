var hIndex = function(citations) {
    
    citations.sort((a,b)=>{return b-a});

    let i = 0

    while(citations[i]>i){
        i++;
    }

    console.log("test");

    return i;

};

const citations = [3,0,6,1,5]

const r = hIndex(citations);

console.log(r);