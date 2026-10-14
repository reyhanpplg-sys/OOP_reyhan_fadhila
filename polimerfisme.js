class cuking {
    bersuara() {
        console.log("meong :V");
    }
}

class anjing {
    bersuara() {
        console.log("pinjam 100");
    }
}

const hewan = [new cuking(), new anjing()];

hewan.forEach(function(item) {
    item.bersuara();
});