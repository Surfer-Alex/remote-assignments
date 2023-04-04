let result ;
function calculate(args) {
     
     if(args.op === '+'){
        result = args.n1 + args.n2; 
     }
     else if (args.op === '-'){ 
        result = args.n1 - args.n2;
     }
     else if (args.op === 'x'){ 
        result = 'Not supported';
     }
    return result;// your code here
    }

    
    console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
    console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
    console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'