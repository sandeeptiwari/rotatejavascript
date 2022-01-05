var foo = 'bar';

function bar() {
    var foo = 'baz';

    if (true) {
        var foo = 'bam';
        console.log(foo);
    }
    console.log(foo);
}
bar();
console.log(foo);
