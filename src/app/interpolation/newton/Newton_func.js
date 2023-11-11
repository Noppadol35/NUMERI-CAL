export function Newton_func(x,y,xValue){

    let summy = 0;
    let n = x.length;
    let a = new Array(n);
    
    for(let i=0;i<n;i++){
        a[i] = y[i];
    }
    for(let j=1;j<n;j++){
        for(let i=n-1;i>=j;i--){
            a[i] = (a[i]-a[i-1])/(x[i]-x[i-j]);
        }
    }
    
    for(let i=n-1;i>=0;i--){
        let temp = a[i];
        for(let j=0;j<i;j++){
            temp = temp*(xValue-x[j]);
        }
        summy = summy+temp;
    }
    
    return summy;
}