function random(n_random) {
    n_random=Math.random()* (101 - 1) + 1
    n_random=Math.round(n_random)
    n_random=parseInt(n_random)
    console.log(n_random)
    return n_random
}