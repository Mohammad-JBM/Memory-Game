function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let rnd = Math.floor(Math.random() * arr.length);
        let tmp = arr[i];
        arr[i] = arr[rnd]
        arr[rnd] = tmp
    }
    return arr
};
// Mohammad JBM Design This Project