{
    const tony1 = {
        name: 'tony',
        age: '18',
    };

    const name = 'tony';
    const age = '18';

    // 💩
    const tony2 = {
        name: name,
        age: age,
    };

    // ✨
    const tony3 = {
        name,
        age,
    };

    console.log(tony1, tony2, tony3);
    // { name: 'tony', age: '18' } { name: 'tony', age: '18' } { name: 'tony', age: '18' }
}