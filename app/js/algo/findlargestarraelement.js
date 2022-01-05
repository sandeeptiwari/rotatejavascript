function largest () {
    let arr = [1, 99, 1000, 121, 2, 2, 3, 7];
    arr = arr.sort((a, b) => b - a);
    const result  = arr[0];
    console.log('Largest Element ', result);
}

largest();

